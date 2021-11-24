export interface NameLabelPair {
  name: string;
  label: string;
  [x: string]: any;
}

export interface Field extends NameLabelPair {
  operators?: NameLabelPair[];
  values?: NameLabelPair[];
}
