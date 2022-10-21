import React from "react";

interface TableHeaderProps {
  items: string[];
}
const TableHeader: React.FC<TableHeaderProps> = ({ items }) => {
  return (
    <thead>
      <tr>
        {items.map((item, index) => (
          <th key={index} className="text-left p-2 border">
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default React.memo(TableHeader);
