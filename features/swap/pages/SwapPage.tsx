import Box from "@/components/Box";
import HistoryTable from "@/features/history/components/HistoryTable";
import { GetServerSideProps, NextPage } from "next";
import SwapForm from "../components/SwapForm";

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

const SwapPage: NextPage = () => {
  return (
    <div className="flex items-center justify-center bg-slate-200 w-full h-screen gap-12">
      <Box className="w-1/2 min-w-[340px] h-[600px] overflow-y-auto">
        <HistoryTable />
      </Box>
      <Box className="w-1/6 min-w-[300px]">
        <h1 className="text-2xl font-bold">Swap</h1>
        <SwapForm />
      </Box>
    </div>
  );
};

export default SwapPage;
