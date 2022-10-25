import { useMutation, useQuery } from "react-query";
import client from "./client";

export function useTransferAPI() {
  const requestTransfer = async (params: Transfer.Payload) => {
    return await client.post("/transfers/transfer", params);
  };

  const fetchTransferList = async () => {
    const { data } = await client.get<Transfer.List>("/transfers");
    return data;
  };

  return {
    requestTransfer,
    fetchTransferList,
  };
}

export function useRequestTransfer() {
  const { requestTransfer } = useTransferAPI();
  const { mutate, isLoading, error } = useMutation(requestTransfer);

  return {
    mutate,
    isLoading,
    error,
  };
}

export function useFetchTransferList() {
  const { fetchTransferList } = useTransferAPI();
  const { data, isLoading, error } = useQuery(
    ["transfer", "list"],
    () => fetchTransferList(),
    {
      refetchInterval: 3000,
    }
  );

  return {
    data,
    isLoading,
    error,
  };
}
