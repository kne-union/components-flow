const { default: CCNode } = _CCNode;
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
      <CCNode node={{ title: 'CCNode1', content: '' }} />
      <CCNode node={{ title: 'CCNode2', content: 'CCNode' }} />
    </Space>
  );
};

render(<BaseExample />);
