"use client";

import React, { useState } from "react";
import Link from "next/link";
import Capsule, { CapsuleModal, Environment } from "@usecapsule/react-sdk";
// Import styles if using v3.5.0 or greater of `@usecapsule/react-sdk`
import "@usecapsule/react-sdk/styles.css";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

// Initialize Capsule SDK with your API key and environment
const capsule = new Capsule(Environment.BETA, process.env.NEXT_PUBLIC_CAPSULE_API_KEY);

const Capsulelogin: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const [isOpen, setIsOpen] = useState(false); // Use any state management you wish, this is purely an example!

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Scaffold-ETH 2 with Capsule</span>
          </h1>
          <div className="flex justify-center">
            <div>
              <button className="btn" onClick={() => setIsOpen(true)}>
                Sign in With Email
              </button>

              <CapsuleModal capsule={capsule} isOpen={isOpen} onClose={() => setIsOpen(false)} />
            </div>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>
          <p className="text-center text-lg">
            Get started by editing{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/nextjs/components/Header.tsx
            </code>
          </p>
          <p className="text-center text-lg">
            Make sure you delete the{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              "RainbowKitCustomConnectButton" and the "FaucetButton" components
            </code>{" "}
            there
          </p>
          <p className="text-center text-lg">
            Copy how the CapsuleModal is implemented in{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/nextjs/app/capsule-login/page.tsx
            </code>{" "}
            into the{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/nextjs/components/Header.tsx
            </code>{" "}
            file
          </p>
          <p className="text-center text-lg">
            Remember to get your own{" "}
            <a href="https://developer.usecapsule.com/" className="underline bold">
              Capsule API key from their dashboard
            </a>{" "}
            and input into{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/nextjs/app/capsule-login/page.tsx
            </code>{" "}
            using the NEXT_PUBLIC_CAPSULE_API_KEY variable in your{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              .env.local
            </code>{" "}
            file
          </p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contracts
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Capsulelogin;
