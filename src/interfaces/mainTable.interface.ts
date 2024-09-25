import { Key } from "react";

interface mainTableProps {
  columns: { name: string; uid: string }[];
  initialVisibleColumns: string[];
  data: {
    id: string;
    name: string;
    class: string;
    DOB: string;
    status: string;
    profile: string;
  }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  renderCell: (item: any, columnKey: Key) => React.ReactNode;
}

export type { mainTableProps };
