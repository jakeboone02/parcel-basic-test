import { ActionElement } from "./ActionElement";
import { DragHandle } from "./DragHandle";
import { NotToggle } from "./NotToggle";
import { ValueEditor } from "./ValueEditor";
import { ValueSelector } from "./ValueSelector";
import { Rule } from "../Rule";
import { RuleGroup } from "../RuleGroup";
import { Controls } from "../types";

export const defaultControlElements: Controls = {
  addGroupAction: ActionElement,
  removeGroupAction: ActionElement,
  cloneGroupAction: ActionElement,
  cloneRuleAction: ActionElement,
  addRuleAction: ActionElement,
  removeRuleAction: ActionElement,
  combinatorSelector: ValueSelector,
  fieldSelector: ValueSelector,
  operatorSelector: ValueSelector,
  valueEditor: ValueEditor,
  notToggle: NotToggle,
  ruleGroup: RuleGroup,
  rule: Rule,
  dragHandle: DragHandle,
};
