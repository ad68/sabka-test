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
  type: "edit" | "delete" | "view"
  onClick?: (value: Record<string, unknown>) => void
}
export type TableHeaderActions = {
  type: "add" | "other"
  title?: string
  onClick: () => void
}
export type TableHeaderBulkActions = {
  type: "publish",
  onClick: (value: Array<any>) => void
}
export type TableApiUrls = {
  fetch: string;
  delete?: string;
}
export type col = {
  title: string,
  field: string,
  width?: string,
  type?: "date" | "description" | "price" | "condition",
  conditions?: any
}
export type TableContentProps = {
  cols?: Array<col>;
  queries?: any;
  params?: any;
}
export type FooterContent = {
  title: string,
  filedValue: string, type: "price" | undefined
}
export type Summary = {
  position: "top" | "bottom",
  content: Array<FooterContent>

}
export type TableConfigProps = {
  listResponseObjectName?: string,
  apiUrl: TableApiUrls;
  pageSize?: number;
  actions?: Array<TableActions>;
  headerActions?: Array<TableHeaderActions>;
  bulkActions?: Array<TableHeaderBulkActions>

  reload?: boolean;
  summary?: Summary
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
  selectedItem: Array<any>
  total: number,
  currentPage: number,
  headerActions?: Array<TableHeaderActions>
  bulkActions?: Array<TableHeaderBulkActions>
  checkboxHandleChange: (checked: boolean, id: any) => void
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
  actions?: Array<TableHeaderActions>
  bulkActions?: Array<TableHeaderBulkActions>,
  selectedItem: Array<any>
}
/* export type BulkActionProp = {
  actions: Array<TableHeaderActions>
} */
export type UseCustomTable = {
  api: string,
  reload?: boolean
  queries: any,
  pageSize?: number,
  listResponseObjectName?: string,
  summary?: any
}