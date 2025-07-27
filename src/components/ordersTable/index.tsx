import { OrdersTableProps } from "@/types";

const OrdersTable = ({ columns, data }: OrdersTableProps) => {
  return (
    <div className="overflow-x-auto w-full rounded-md border border-gray-300 dark:border-gray-600 my-4">
      <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
        <thead>
          <tr className="h-[44px] bg-[#FAFAFA] dark:bg-[#2A2A3C] border-b border-[#E9EAEB] dark:border-gray-600">
            {columns.map((col, i) => (
              <th
                key={i}
                className="py-3 px-6 text-gray-700 dark:text-gray-200 text-center align-middle whitespace-nowrap"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="h-[92px]">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="py-3 px-6 bg-[#FAFAFA] dark:bg-[#1F1F1F] border-b border-[#E9EAEB] dark:border-gray-700 text-center align-middle whitespace-nowrap text-gray-700 dark:text-gray-300"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
