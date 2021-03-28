export declare interface Content {
  ancestors?: Content[];
  id: string;
  status: string;
  title: string;
  type: string;
  _links: {
    base: string;
    webui: string;
  };
}

export interface Field<T extends string | any[] = string | any[]> {
  id: string;
  value: T;
}

type instanceFieldId = string;

export interface TableFieldValue {
  id: string;
  value: {[templateFieldId: string]: instanceFieldId};
}

export interface DisplayFieldProps<T extends string | any[] = string | any[]> {
  field?: Field<T>;
}

export interface ConfluenceContentById {
  [contentId: string]: Content;
}

export interface ContentListItem {
  id?: string;
  label: string;
  value: string;
  type?: string;
}
