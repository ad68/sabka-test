import { ReactNode } from "react";

/* export type TableProps = {
  cols?: Array<any>;
  api: string;
  params?: any;
  queries?: any;
  pageSize?: number;
  actions?: any;
  apiDel?: any;
  reload?: boolean;
}; */
export type TableActions = {
  type: "edit" | "delete" | "view" | "condition"
  onClick?: (value: Record<string, unknown>) => void
  showCondition?: (item: any) => boolean;
}
export type TableHeaderActions = {
  type: "add"
  onClick?: () => void
}
export type TableApiUrls = {
  fetch: string;
  delete?: string;
}
export type TableContentProps = {
  cols?: Array<any>;
  queries?: any;
  params?: any;
}

export type TableConfigProps = {
  listResponseObjectName?: string,
  apiUrl: TableApiUrls;
  pageSize?: number;
  actions?: Array<TableActions>;
  headerActions?: Array<TableHeaderActions>;
  reload?: boolean;
}
export type CustomTableProps = {
  content: TableContentProps
  config: TableConfigProps
};
export type TableBodyProps = {
  cols?: Array<any>;
  apiDel?: any;
  data: any;
  loading: boolean,
  getList: any;
  actions?: any;
  total: number
  headerActions?: Array<TableHeaderActions>
};
export type Actions = {
  actions?: any;
  setDeleteId?: any;
  item1?: any;
  showDeleteModal: () => void;
};

/* export type TableFetchResponse = {
  elements: any,
  totalElements: number
} */
export type DeleteModalProps = {
  open: boolean;
  onClose: () => void;
  width?: number;
  children?: ReactNode;
  onSuccess?: any;
  buttonText?: string;
  api: string;
  id: string;
};
export type HeaderActionProp = {
  actions: Array<TableHeaderActions>
}
export type UseCustomTable = {
  api: string,
  reload?: boolean
  queries: any,
  pageSize?: number,
  listResponseObjectName?: string
}