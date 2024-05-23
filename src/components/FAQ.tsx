"use client";

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What is $SHITZU?",
    answer:
      "SHITZU is the quirky memecoin born from an April Fool's Day prank gone fabulously right. Picture this: a hidden mint button, a ticking clock of 24 hours, and a frenzy of clicks leading to the minting of exactly 576,167,000 SHITZU tokens. Dubbed the 'proof of finger', this one-time-only minting spree makes SHITZU a uniquely finite bundle of digital fun. No more minting, just the joy of being part of the SHITZU saga!",
  },
  {
    question: "Why join SHITZU Community?",
    answer: (
      <div>
        Step into a community teaming with NEAR OGs, Developers, Artists,
        Marketers, Content creators, and Investors. Don't be surprised to find
        NEAR project founders casually engaging on our Telegram channel. We take
        pride in spotlighting projects shaping the NEAR/Aurora ecosystem. Engage
        in our community Crossword Puzzles, where partnering projects take the
        center stage. From compelling tweets to insightful threads, we
        supplement our content to keep you informed. Join our Twitter spaces to
        showcase your incredible projects, and as a member, be rewarded in
        $SHITZU & NEAR tokens for active participation. <br />
        <br />
        Embark on a journey where innovation meets community, and every member
        is a valued contributor. <br />
        <br />
        Join $SHITZU and be part of something extraordinary in the NEAR & Aurora
        universe.,
      </div>
    ),
  },
  {
    question: "Who run the Shitzu Community?",
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
    answer: "Join us on Telegram, Twitter, and Github.",
  },
];

export default function FAQ() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-landing px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-landing divide-y divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-300">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
