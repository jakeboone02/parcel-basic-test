import produce, { enableES5 } from 'immer';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { RuleGroup } from './RuleGroup';

enableES5();

export const QueryBuilder = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={'test'}>
        <RuleGroup />
      </div>
    </DndProvider>
  );
};

QueryBuilder.displayName = 'QueryBuilder';
