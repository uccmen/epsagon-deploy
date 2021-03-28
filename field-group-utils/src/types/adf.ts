export interface ADFRoot {
  version: number;
  type: 'doc';
  content: ADFNode[];
}

export interface ADFNode {
  type: string;
  attrs?: any;
  content?: ADFNode[];
  marks?: ADFMark[];
  text?: string;
}

export interface TableADFNode extends ADFNode {
  type: 'table';
  content: TableRowADFNode[];
}

export interface TableRowADFNode extends ADFNode {
  type: 'tableRow';
  content: (TableHeaderADFNode | TableCellADFNode)[];
}

export interface TableHeaderADFNode extends ADFNode {
  type: 'tableHeader';
}

export interface TableCellADFNode extends ADFNode {
  type: 'tableCell';
}

export interface ADFMark {
  type: string;
  attrs?: any;
}
