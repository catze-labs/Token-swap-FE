import { GetServerSideProps, NextPage } from "next";
import TestHeader from "@/features/test/components/TestHeader";
import Counter from "@/features/test/components/Counter";
import { useCatFact } from "@/requests/cat";

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

const HelloPage: NextPage = () => {
  const { data: catfact, isLoading } = useCatFact();

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="w-64 flex flex-col gap-4">
        <TestHeader />
        {isLoading && <p>Loading...</p>}
        {!isLoading && catfact && <p>{catfact.fact}</p>}
        <Counter />
      </div>
    </div>
  );
};

export default HelloPage;
