import PropsWithChildren from "react";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";

export const DynamicScaffoldProvider = ({ children }: PropsWithChildren) => {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "81bc3d0b-0271-4100-a1b2-ae3e2d4b2758", //update this to {process.env.NEXT_PUBLIC_DYNAMIC_API_KEY}
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      {children}
    </DynamicContextProvider>
  );
};
