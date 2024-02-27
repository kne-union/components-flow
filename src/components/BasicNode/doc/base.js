const { default: BasicNode } = _BasicNode;
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
      <BasicNode node={{ title: 'BasicNode1', content: '' }} />
      <BasicNode node={{ title: 'BasicNode2', content: 'BasicNode' }} />
    </Space>
  );
};

render(<BaseExample />);
