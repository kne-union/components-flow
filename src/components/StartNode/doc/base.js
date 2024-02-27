const { default: StartNode } = _StartNode;
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
      <StartNode data={{ label: 'StartNode1', content: '' }} />
      <StartNode data={{ label: 'StartNode2', content: 'StartNode' }} />
    </Space>
  );
};

render(<BaseExample />);
