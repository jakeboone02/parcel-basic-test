export interface NameLabelPair {
  name: string;
  label: string;
}

export interface Field extends NameLabelPair {
  operators?: NameLabelPair[];
  values?: NameLabelPair[];
}
