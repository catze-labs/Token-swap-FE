import { TransferStatus } from "@/features/enums";

interface TransferPayload {
  chainId: string;
  startToken: string;
  endToken: string;
  amount: string;
  walletAddress: string;
  gasFee: string;
  receiveTransactionId: string;
}

interface Transfer {
  id: number;
  status: TransferStatus;
  chainId: string;
  startToken: string;
  endToken: string;
  receiveTransactionId: string;
  sendTransactionId: string | null;
  created: string;
  updated: string;
  userWalletAddress: string;
}

declare global {
  declare namespace Transfer {
    type Payload = TransferPayload;
    type Item = Transfer;
    type List = Transfer[];
  }
}
