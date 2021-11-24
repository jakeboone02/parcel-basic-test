import type { Field, NameLabelPair, ValueEditorType } from './basic';

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
  validation?: boolean | any;
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

export type QueryBuilderProps<RG extends any> = Omit<
  QueryBuilderPropsInternal<RG>,
  'independentCombinators'
> & {
  independentCombinators?: boolean;
};

export type QueryBuilderPropsInternal<RG extends any> =
  {
    /**
     * Initial query object for uncontrolled components
     */
    defaultQuery?: RG;
    /**
     * Query object for controlled components
     */
    query?: RG;
    /**
     * The array of fields that should be used. Each field should be an object
     * with {name: String, label: String}
     */
    fields?: Field[];
    /**
     * The array of operators that should be used.
     * @default
     * [
     *   { name: '=', label: '=' },
     *   { name: '!=', label: '!=' },
     *   { name: '<', label: '<' },
     *   { name: '>', label: '>' },
     *   { name: '<=', label: '<=' },
     *   { name: '>=', label: '>=' },
     *   { name: 'contains', label: 'contains' },
     *   { name: 'beginsWith', label: 'begins with' },
     *   { name: 'endsWith', label: 'ends with' },
     *   { name: 'doesNotContain', label: 'does not contain' },
     *   { name: 'doesNotBeginWith', label: 'does not begin with' },
     *   { name: 'doesNotEndWith', label: 'does not end with' },
     *   { name: 'null', label: 'is null' },
     *   { name: 'notNull', label: 'is not null' },
     *   { name: 'in', label: 'in' },
     *   { name: 'notIn', label: 'not in' },
     *   { name: 'between', label: 'between' },
     * ]
     */
    operators?: NameLabelPair[];
    /**
     * The array of combinators that should be used for RuleGroups.
     * @default
     * [
     *     {name: 'and', label: 'AND'},
     *     {name: 'or', label: 'OR'},
     * ]
     */
    combinators?: NameLabelPair[];
    controlElements?: any;
    enableMountQueryChange?: boolean;
    /**
     * The default field for new rules. This can be a string identifying the
     * default field, or a function that returns a field name.
     */
    getDefaultField?: string | ((fieldsData: Field[]) => string);
    /**
     * The default operator for new rules. This can be a string identifying the
     * default operator, or a function that returns an operator name.
     */
    getDefaultOperator?: string | ((field: string) => string);
    /**
     * Returns the default value for new rules.
     */
    getDefaultValue?(rule: any): any;
    /**
     * This is a callback function invoked to get the list of allowed
     * operators for the given field. If `null` is returned, the default
     * operators are used.
     */
    getOperators?(field: string): NameLabelPair[] | null;
    /**
     * This is a callback function invoked to get the type of `ValueEditor`
     * for the given field and operator.
     */
    getValueEditorType?(field: string, operator: string): ValueEditorType;
    /**
     * This is a callback function invoked to get the `type` of `<input />`
     * for the given field and operator (only applicable when
     * `getValueEditorType` returns `"text"` or a falsy value). If no
     * function is provided, `"text"` is used as the default.
     */
    getInputType?(field: string, operator: string): string | null;
    /**
     * This is a callback function invoked to get the list of allowed
     * values for the given field and operator (only applicable when
     * `getValueEditorType` returns `"select"` or `"radio"`). If no
     * function is provided, an empty array is used as the default.
     */
    getValues?(field: string, operator: string): NameLabelPair[];
    /**
     * Allows and/or configuration between rules
     */
    independentCombinators: RG extends any ? false : true;
    /**
     * This callback is invoked before a new rule is added. The function should either manipulate
     * the rule and return it, or return `false` to cancel the addition of the rule.
     */
    onAddRule?(rule: any, parentPath: number[], query: RG): any | false;
    /**
     * This callback is invoked before a new group is added. The function should either manipulate
     * the group and return it, or return `false` to cancel the addition of the group.
     */
    onAddGroup?(ruleGroup: RG, parentPath: number[], query: RG): RG | false;
    /**
     * This is a callback function that is invoked anytime the query configuration changes.
     */
    onQueryChange?(query: RG): void;
    /**
     * This can be used to assign specific CSS classes to various controls
     * that are created by the `<QueryBuilder />`.
     */
    controlClassnames?: any;
    /**
     * This can be used to override translatable texts applied to various
     * controls that are created by the `<QueryBuilder />`.
     */
    translations?: any;
    /**
     * Show the combinators between rules and rule groups instead of at the top of rule groups.
     */
    showCombinatorsBetweenRules?: boolean;
    /**
     * Show the "not" toggle for rule groups.
     */
    showNotToggle?: boolean;
    /**
     * Show the "Clone rule" and "Clone group" buttons
     */
    showCloneButtons?: boolean;
    /**
     * Reset the operator and value components when the `field` changes.
     */
    resetOnFieldChange?: boolean;
    /**
     * Reset the value component when the `operator` changes.
     */
    resetOnOperatorChange?: boolean;
    /**
     * Select the first field in the array automatically
     */
    autoSelectField?: boolean;
    /**
     * Adds a new default rule automatically to each new group
     */
    addRuleToNewGroups?: boolean;
    /**
     * Enables drag-and-drop features
     */
    enableDragAndDrop?: boolean;
    /**
     * Query validation function
     */
    validator?(): any;
    /**
     * Container for custom props that are passed to all components
     */
    context?: any;
  };
