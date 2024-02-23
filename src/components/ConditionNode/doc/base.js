const { default: ConditionNode } = _ConditionNode;
const { Space } = _antd;

const BaseExample = () => {
  return (
    <Space>
      <ConditionNode data={{ label: '条件1', content: '' }} />
      <ConditionNode data={{ label: '默认条件', content: '其他条件进入此流程', type: 'default' }} />
    </Space>
  );
};

render(<BaseExample />);
