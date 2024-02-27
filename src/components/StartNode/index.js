import classnames from 'classnames';

import style from './style.module.scss';

const StartNode = ({ node }) => {
  return (
    <div className={classnames(style['node-wrapper'])}>
      <div className={style['node']}>
        <div className={classnames(style['node-title'], style['ellipse'])}>{node?.title}</div>
        <div className={style['node-content']}>
          {node?.content ? <span className={classnames(style['node-title-label'], style['ellipse'])}>{node.content}</span> : <span className={classnames(style['placeholder'], style['ellipse'])}>请选择审批人</span>}
        </div>
      </div>
    </div>
  );
};

export default StartNode;
