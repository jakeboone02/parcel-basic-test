export interface CommonProps {
  /**
   * CSS classNames to be applied
   */
  className?: string;
  /**
   * The level of the current group
   */
  level: number;
  /**
   * The title for this control
   */
  title?: string;
  /**
   * Container for custom props that are passed to all components
   */
  context?: any;
  /**
   * Validation result of the parent component
   */
  validation?: boolean;
}

export interface ValueEditorProps extends CommonProps {
  handleOnChange(value: any): void;
  field: string;
  fieldData: any;
  operator: string;
  // type?: string;
  inputType?: any;
  values?: any[];
  value?: any;
}
