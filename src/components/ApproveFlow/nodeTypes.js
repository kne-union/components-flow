import StartNode from '@components/StartNode';
import BasicNode from '@components/BasicNode';
import ConditionNode from '@components/ConditionNode';
import CCNode from '@components/CCNode';

const nodeTypes = {
  start: StartNode,
  basic: BasicNode,
  condition: ConditionNode,
  cc: CCNode
};

export default nodeTypes;
