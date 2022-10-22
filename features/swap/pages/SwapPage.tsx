import Box from "@/components/Box";
import TextInput from "@/components/TextInput";
import HistoryTable from "@/features/history/components/HistoryTable";
import useMetaMask from "@/features/wallet/hooks/useMetamask";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import SwapForm from "../components/SwapForm";

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

const SwapPage: NextPage = () => {
  const wallet = useMetaMask();
  const [host, setHost] = useState<string | null>(
    "https://ca10-116-36-205-131.jp.ngrok.io"
  );

  const handleSubmit = async (formData: { from: number; to: number }) => {
    await wallet.connect();
    const tx = await wallet.send(formData.from);

    if (tx && host) {
      // TODO: API Call
      const res = await axios.post(host + "/transfers/transfer", {
        chainId: "0x5",
        startToken: "eth",
        endToken: "usdt",

        // formData.from is eth, change it to gwei
        amount: formData.from * 1000000000 + "",
        walletAddress: wallet.account,
        gasFee: "0x5208",
        receiveTransactionId: tx,
      });
      console.log("res", res);
    }
  };

  return (
    <div className="flex items-center justify-center bg-slate-200 w-full h-screen gap-12">
      <Box className="w-1/2 min-w-[340px] h-[600px] overflow-y-auto">
        <HistoryTable />
      </Box>
      <Box className="w-1/6 min-w-[300px]">
        <h1 className="text-2xl font-bold">Swap</h1>
        <div>
          <TextInput
            label="host"
            value={host || ""}
            onChange={(e) => {
              setHost(e.target.value);
            }}
          />
        </div>
        <SwapForm onSubmit={handleSubmit} />
      </Box>
    </div>
  );
};

export default SwapPage;
