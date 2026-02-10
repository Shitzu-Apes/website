"use client";

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What is $SHITZU?",
    answer:
      "SHITZU is the quirky memecoin born from an April Fool's Day prank gone fabulously right. Picture this: a hidden mint button, a ticking clock of 24 hours, and a frenzy of clicks leading to the minting of exactly 576,167,000 SHITZU tokens. Dubbed the “proof of finger”, this one-time-only minting spree makes SHITZU a uniquely finite bundle of digital fun. No more minting, just the joy of being part of the SHITZU saga!",
  },
  {
    question: "Why join SHITZU Community?",
    answer: (
      <div className="space-y-3">
        <p>
          Step into a community packed with NEAR OGs, developers, artists,
          marketers, creators, and investors — including NEAR project founders
          who regularly hang out in our chats.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Discover projects shaping the NEAR / Aurora ecosystem</li>
          <li>Join community games like Crossword Puzzles</li>
          <li>Follow updates via tweets, threads, and Twitter Spaces</li>
          <li>Earn $SHITZU &amp; NEAR rewards for active participation</li>
        </ul>
        <p>
          Join $SHITZU and be part of something extraordinary in the NEAR &amp;
          Aurora universe.
        </p>
      </div>
    ),
  },
  {
    question: "Who runs the Shitzu Community?",
    answer:
      "You! It's a place where everyone has a voice and the power to steer the journey.",
  },
  {
    question: "What is Migration?",
    answer:
      "Migration is a strategic move by SHITZU Community to expand SHITZU's presence from Aurora to NEAR. The plan? Introduce SHITZUv2, a NEP-141 token on NEAR, and seamlessly transition from SHITZUv1 via a custom 'bridging' smart contract on Aurora. This contract, employing cross-contract calls, will burn SHITZUv1 and mint SHITZUv2, ensuring a smooth, lossless transfer for our community.",
  },
  {
    question: "How can I contribute to the Shitzu Community?",
    answer: "Join us on Telegram, X, and GitHub — and help shape what we build.",
  },
];

export default function FAQ() {
  return (
    <section className="section bg-gray-900">
      <div className="section-inner">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-base leading-7 text-white/70">
            Quick answers to the most common questions. If you’re stuck, reach
            out — we’re active daily.
          </p>

          <dl className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-sm hover:bg-white/10">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between gap-6 text-left text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="mt-0.5 flex h-7 items-center text-white/80">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-3">
                      <div className="text-base leading-7 text-white/70">
                        {faq.answer}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="https://t.me/Shitzu_Community"
              target="_blank"
              rel="noreferrer"
              className="btn-accent w-full sm:w-auto"
            >
              Ask on Telegram →
            </a>
            <a href="/blog" className="btn-outline-primary w-full sm:w-auto text-center">
              Read the blog →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
