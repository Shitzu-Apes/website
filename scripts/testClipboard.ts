// Exercises the copyToClipboard branching that was previously unguarded.
// Run with: node --experimental-strip-types scripts/testClipboard.ts
import { copyToClipboard } from "../src/utils/clipboard.ts";

type Case = {
  name: string;
  secure: boolean;
  writeText?: (t: string) => Promise<void>;
  execCommand?: (c: string) => boolean;
  expect: boolean;
};

const cases: Case[] = [
  {
    name: "secure context, async API works",
    secure: true,
    writeText: async () => {},
    execCommand: () => true,
    expect: true,
  },
  {
    name: "secure context, async API rejects -> falls back",
    secure: true,
    writeText: async () => {
      throw new Error("NotAllowedError");
    },
    execCommand: () => true,
    expect: true,
  },
  {
    name: "secure context, async API rejects and fallback fails",
    secure: true,
    writeText: async () => {
      throw new Error("NotAllowedError");
    },
    execCommand: () => false,
    expect: false,
  },
  {
    name: "INSECURE context (LAN http) -> no throw, fallback used",
    secure: false,
    execCommand: () => true,
    expect: true,
  },
  {
    name: "secure context but no clipboard API at all",
    secure: true,
    execCommand: () => true,
    expect: true,
  },
  {
    name: "insecure and fallback unavailable",
    secure: false,
    execCommand: () => false,
    expect: false,
  },
];

function defineGlobal(key: string, value: unknown) {
  // Node 24 exposes some of these (e.g. navigator) as getter-only, so a plain
  // assignment throws; redefine the property instead.
  Object.defineProperty(globalThis, key, {
    value,
    configurable: true,
    writable: true,
  });
}

function installDom(c: Case) {
  const appended: unknown[] = [];
  let removed = 0;

  defineGlobal("window", { isSecureContext: c.secure });
  defineGlobal("navigator", {
    ...(c.writeText ? { clipboard: { writeText: c.writeText } } : {}),
  });

  const textarea = {
    value: "",
    style: {} as Record<string, string>,
    attrs: {} as Record<string, string>,
    setAttribute(k: string, v: string) {
      this.attrs[k] = v;
    },
    select() {},
    setSelectionRange() {},
  };

  defineGlobal("document", {
    body: {
      appendChild: (n: unknown) => appended.push(n),
      removeChild: () => {
        removed++;
      },
    },
    createElement: () => textarea,
    execCommand: c.execCommand ?? (() => false),
  });

  return {
    textarea,
    appendedCount: () => appended.length,
    removedCount: () => removed,
  };
}

let failures = 0;

async function main() {
  for (const c of cases) {
    const dom = installDom(c);
    let result: boolean | string = "<threw>";
    let err = "";

    try {
      result = await copyToClipboard("token.0xshitzu.near");
    } catch (e) {
      err = (e as Error).message;
    }

    const pass = result === c.expect;
    if (!pass) failures++;
    console.log(
      `${pass ? "PASS" : "FAIL"}  ${c.name}\n        returned=${String(result)} expected=${c.expect}${
        err ? ` threw=${err}` : ""
      }\n        textarea appended=${dom.appendedCount()} removed=${dom.removedCount()}`
    );
  }

  console.log(
    `\n${cases.length - failures}/${cases.length} passed${
      failures ? `, ${failures} FAILED` : ""
    }`
  );
}

main().then(() => process.exit(failures ? 1 : 0));
