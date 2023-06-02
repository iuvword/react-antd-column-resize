import type { ThHTMLAttributes } from 'react'
import './index.css'

export interface Column {
  key?: string | number | undefined;
  width?: number;
  dataIndex?: string | number | undefined;
  children?: Column[] | undefined;
  // 其他列属性...
}


export interface ResizableColumnProps<T> {
  columns: T[];
  minWidth?: number;
  maxWidth?: number,
  defaultWidth?: number;
}


export type ResizableHeaderCellProps = {
  width: number;
  minWidth: number;
  maxWidth: number;
  defaultWidth: number;
  cellKey: string | number;
  onResize: (cellKey: string | number, width: number) => void;
} & ThHTMLAttributes<HTMLTableCellElement>