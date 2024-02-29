import style from './style.module.scss';
import classnames from 'classnames';
import Node from './TreeNode';

const FlowChart = ({ className, children, next, label, lineHeight, lineWidth, lineColor, nodeWidth, nodeHeight, nodePadding, lineBorderRadius }) => {
  return (
    <ul
      className={classnames(className, style['flow'])}
      style={{
        '--line-height': lineHeight,
        '--line-width': lineWidth,
        '--line-color': lineColor,
        '--node-width': nodeWidth,
        '--node-height': nodeHeight,
        '--node-padding': nodePadding,
        '--line-border-radius': lineBorderRadius
      }}
    >
      <Node className={classnames('root', style['root'])} label={label} next={next}>
        {children}
      </Node>
    </ul>
  );
};

FlowChart.defaultProps = {
  lineHeight: '20px',
  lineWidth: '1px',
  lineBorderRadius: '5px',
  lineColor: 'black',
  nodeWidth: '200px',
  nodeHeight: '84px',
  nodePadding: '20px'
};

FlowChart.Node = Node;

export default FlowChart;
