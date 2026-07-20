// import { tableHeader } from "./tableStyles";

// interface TableHeaderProps {
//   left: string;
//   right: string;
//   leftWidth?: string;
// }

// export default function TableHeader({
//   left,
//   right,
//   leftWidth = "190px",
// }: TableHeaderProps) {
//   return (
//     <thead>
//       <tr>
//         <th
//           style={{ width: leftWidth }}
//           className={tableHeader}
//         >
//           {left}
//         </th>

//         <th className={tableHeader}>
//           {right}
//         </th>
//       </tr>
//     </thead>
//   );
// }

import { tableHeader } from "./tableStyles";

interface TableHeaderProps {
  left: string;
  right: string;
  leftWidth?: string;
}

export default function TableHeader({
  left,
  right,
  leftWidth = "190px",
}: TableHeaderProps) {
  return (
    <thead>
      <tr>
        <th style={{ width: leftWidth }} className={tableHeader}>
          {left}
        </th>

        <th className={tableHeader}>
          {right}
        </th>
      </tr>
    </thead>
  );
}