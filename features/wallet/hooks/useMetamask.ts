import { useEffect, useState } from "react";
import Web3 from "web3";

export default function useMetaMask() {
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [balance, setBalance] = useState<number | null>(null);

  const connect = async () => {
    if (!window?.ethereum) {
      console.error("No ethereum object found");
      return;
    }
    setLoading(true);
    try {
      /**
       * CHANGE CHAIN ID TO GOERLI
       */
      await window.ethereum.request?.({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x5` }],
      });

      /**
       * GET ACCOUNT
       */
      const account = await window.ethereum.request?.({
        method: "eth_requestAccounts",
      });

      // @ts-ignore
      window.web3 = new Web3(window.ethereum);
      setAccount(account[0]);

      /**
       * GET CHAIN ID
       */
      const chainId = await window.ethereum.request?.({
        method: "eth_chainId",
      });
      console.log(chainId);
      setChainId(parseInt(chainId, 16));

      /**
       * GET BALANCE OF USDT
       */

      const balance = await window.ethereum.request?.({
        method: "eth_getBalance",
        params: [account[0], "latest"],
      });

      if (balance) {
        // gwei(balance) to eth
        const ethBalance = parseInt(balance, 16) / 1000000000000000000;
        setBalance(ethBalance);
      }
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        setError(error);
      }
    }
    setLoading(false);
  };

  const send = async (amount: number) => {
    if (!window?.ethereum) {
      console.error("No ethereum object found");
      return;
    }

    setLoading(true);

    try {
      const tx = await window.ethereum.request?.({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: "0xCaaCADD34C562e5E686E185C0ACd9f9B31779E54",
            value: window.web3.utils.toHex(
              window.web3.utils.toWei(amount.toString(), "ether")
            ),
          },
        ],
      });

      return tx;
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        setError(error);
      }
    }
    setLoading(false);
  };

  return {
    account,
    chainId,
    error,
    loading,
    balance,
    connect,
    send,
  };
}
