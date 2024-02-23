const { default: FlowChart } = _FlowChart;
const { Card } = antd;

const Node = FlowChart.Node;
const BaseExample = () => {
  return (
    <FlowChart label={<Card>开始</Card>} next={<Node label={<Card>结束</Card>} />}>
      <Node label={<Card>label-1-1</Card>} />
      <Node
        label={<Card>label-1-2</Card>}
        next={
          <Node label={<Card>label-1-2-end</Card>} next={<Node label={<Card>label-1-2-end-end</Card>} />}>
            <Node label={<Card>label-1-2-end-1</Card>} />
            <Node label={<Card>label-1-2-end-2</Card>} />
          </Node>
        }
      >
        <Node label={<Card>label-1-2-1</Card>} />
        <Node label={<Card>label-1-2-2</Card>} />
        <Node label={<Card>label-1-2-3</Card>}>
          <Node label={<Card>label-1-2-3-1</Card>} />
          <Node label={<Card>label-1-2-3-2</Card>} />
          <Node label={<Card>label-1-2-3-3</Card>} />
        </Node>
      </Node>
      <Node label={<Card>label-1-3</Card>}>
        <Node label={<Card>label-1-3-1</Card>} />
      </Node>
      <Node label={<Card>label-1-4</Card>}>
        <Node label={<Card>label-1-4-1</Card>} />
        <Node label={<Card>label-1-4-2</Card>} />
      </Node>
    </FlowChart>
  );
};

render(<BaseExample />);
