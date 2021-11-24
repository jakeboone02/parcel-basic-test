export interface ValueEditorProps {
  handleOnChange(value: any): void;
  field: string;
  fieldData: any;
  operator: string;
  inputType?: any;
  values?: any[];
  value?: any;
}
