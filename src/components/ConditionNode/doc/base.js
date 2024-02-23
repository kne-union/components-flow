const { default: ConditionNode } = _ConditionNode;
const { Space } = _antd;

const nodeWidth = 200;
const nodeHeight = 84;
const nodePadding = 80;

const style = {
  '--node-height': nodeHeight + 'px',
  '--node-width': nodeWidth + 'px',
  '--node-padding': nodePadding + 'px'
};

const BaseExample = () => {
  return (
    <Space style={style}>
      <ConditionNode data={{ label: '条件1', content: '' }} />
      <ConditionNode data={{ label: '默认条件', content: '其他条件进入此流程', type: 'default' }} />
    </Space>
  );
};

render(<BaseExample />);
