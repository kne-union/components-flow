import style from './style.module.scss';
import { get } from 'lodash';
import classnames from 'classnames';
import NodeLabel from '@components/NodeLabel';
import NodeDelete from '@components/NodeDelete';
import { createWithRemoteLoader } from '@kne/remote-loader';

const ConditionNode = createWithRemoteLoader({
  modules: ['Icon', 'Tooltip']
})(({ remoteModules, ...props }) => {
  const [Icon, Tooltip] = remoteModules;
  const { data } = props;
  const { label, content } = data || {};
  return (
    <div className={classnames(style['condition-node-wrapper'], data?.isError ? style['error'] : null)}>
      <div className={style['node']}>
        <div className={style['node-title']}>
          {get(data, 'type') !== 'default' ? (
            <NodeLabel {...props} />
          ) : (
            <div className={classnames(style['node-title-label'], style['ellipse'])}>
              {label}
              {get(data, 'type') === 'default' && (
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
            {get(data, 'type') !== 'default' && <NodeDelete {...props} data={data} />}
          </div>
        </div>
        <div
          className={style['node-content']}
          onClick={() => {
            console.log('on condition node click...');
          }}
        >
          {content ? <span className={style['ellipse']}>{content}</span> : <span className={style['placeholder']}>请设置条件</span>}
          {get(data, 'type') !== 'default' && <Icon className={style['content-right-icon']} type="icon-arrow-thin-right" />}
        </div>
      </div>
      {get(data, 'isError') && <div className="error-message">不能为空</div>}
    </div>
  );
});

export default ConditionNode;
