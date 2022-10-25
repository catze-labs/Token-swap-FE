import { useFetchTransferList } from "@/requests/useTransferService";
import TableHeader from "./TableHeader";

const HistoryTable: React.FC = () => {
  const { data } = useFetchTransferList();

  const HEADERS = ["Id", "Wallet Address", "Status", "Chain", "Swap", "Tx"];

  return (
    <table className="w-full">
      <TableHeader items={HEADERS} />
      <tbody>
        {data?.map((item) => (
          <tr key={item.id}>
            <td className="border border-gray-300 p-2 text-center">
              {item.id}
            </td>
            <td className="border border-gray-300 p-2 text-center">
              <span className="w-40 truncate inline-block">
                {item.userWalletAddress}
              </span>
            </td>
            <td className="border border-gray-300 p-2 text-center">
              {item.status}
            </td>
            <td className="border border-gray-300 p-2 text-center">
              Goerli Testnet
            </td>
            <td className="border border-gray-300 p-2 text-center">
              {item.startToken} to {item.endToken}
            </td>
            <td className="border border-gray-300 p-2 text-center">
              {item?.sendTransactionId && (
                <a
                  href={
                    "https://goerli.etherscan.io/tx/" + item.sendTransactionId
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 text-blue-400 hover:underline"
                >
                  View
                </a>
              )}
            </td>
          </tr>
        ))}
        {/* <tr>
          <td className="text-center border p-2">2021-09-01</td>
          <td className="text-center border p-2">0.1 ETH</td>
          <td className="text-center border p-2">0.1 SETH</td>
          <td className="text-center border p-2">Success</td>
          <td className="text-center border p-2 max-w-[23px] truncate">
            0x1234567890123345453534
          </td>
          <td className="border p-2">
            <a
              href="https://goerli.etherscan.io/tx/0x1234567890123345453534"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 hover:underline"
            >
              View
            </a>
          </td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default HistoryTable;
