import style from './style.module.scss';
import classnames from 'classnames';
import NodeTitle from '@components/NodeTitle';
import DeleteIcon from '@components/DeleteIcon';
import { createWithRemoteLoader } from '@kne/remote-loader';

const ConditionNode = createWithRemoteLoader({
  modules: ['Icon', 'Tooltip']
})(({ remoteModules, node, ...props }) => {
  const [Icon, Tooltip] = remoteModules;
  const { title, content, type, isError } = node;

  return (
    <div className={classnames(style['condition-node-wrapper'], isError ? style['error'] : null)}>
      <div className={style['node']}>
        <div className={style['node-title']}>
          {type !== 'default' ? (
            <NodeTitle node={node} />
          ) : (
            <div className={classnames(style['node-title-label'], style['ellipse'])}>
              {title}
              {type === 'default' && (
                <Tooltip overlayClassName={style['tooltip']} content={<div className={classnames(style['tooltip-inner'], style['tooltip-inner-yiwen'])}>当未满足其他条件时，系统自动创建默认条件，确保条件分支完整</div>}>
                  <span className={style['node-yiwen-icon']}>
                    <Icon type="icon-yiwen" />
                  </span>
                </Tooltip>
              )}
            </div>
          )}
          <div className={style['condition-right']}>
            <span className={classnames(style['condition-priority'], style['ellipse'])}>优先级1</span>
            {type !== 'default' && <DeleteIcon node={node} {...props} />}
          </div>
        </div>
        <div
          className={style['node-content']}
          onClick={() => {
            console.log('on condition node click...');
          }}
        >
          {content ? <span className={style['ellipse']}>{content}</span> : <span className={style['placeholder']}>请设置条件</span>}
          {type !== 'default' && <Icon className={style['content-right-icon']} type="icon-arrow-thin-right" />}
        </div>
      </div>
      {isError && <div className={style['error-message']}>不能为空</div>}
    </div>
  );
});

ConditionNode.defaultProps = {
  type: 'default',
  isError: false
};

export default ConditionNode;
