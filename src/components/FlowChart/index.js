import style from './style.module.scss';
import classnames from 'classnames';
import Node from './TreeNode';

const FlowChart = ({ className, children, next, label, lineHeight = '20px', lineWidth = '1px', lineColor = 'black', nodePadding = '5px', lineBorderRadius = '5px' }) => {
  return (
    <ul
      className={classnames(className, style['flow'])}
      style={{
        '--line-height': lineHeight,
        '--line-width': lineWidth,
        '--line-color': lineColor,
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

FlowChart.Node = Node;

export default FlowChart;
