import { ReactNode } from "react";

import { labelCell, tableCell } from "./tableStyles";

interface TableRowProps {
  label: string;
  value: ReactNode;
}

export default function TableRow({ label, value }: TableRowProps) {
  return (
    <tr className="min-h-[56px]">
      <td className={labelCell}>
        {label}
      </td>

      <td className={tableCell}>
        {value}
      </td>
    </tr>
  );
}