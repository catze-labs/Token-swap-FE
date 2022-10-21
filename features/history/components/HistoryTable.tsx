import TableHeader from "./TableHeader";

const HistoryTable: React.FC = () => {
  return (
    <table className="w-full">
      <TableHeader
        items={["Date", "From", "To", "Status", "Wallet Address", "Tx Info"]}
      />
      <tbody>
        <tr>
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
        </tr>
      </tbody>
    </table>
  );
};

export default HistoryTable;
