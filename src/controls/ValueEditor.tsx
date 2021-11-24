// This works
// import type { ValueEditorProps } from "../types/props";
// This does not work
import type { ValueEditorProps } from "../types";

export const ValueEditor = ({ someValue }: ValueEditorProps) => {
  return <div>{someValue}</div>;
};
