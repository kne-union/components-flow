import classnames from 'classnames';
import DeleteIcon from '@components/DeleteIcon';
import NodeTitle from '@components/NodeTitle';
import { createWithRemoteLoader } from '@kne/remote-loader';

import style from './style.module.scss';

const CCNode = createWithRemoteLoader({
  modules: ['components-core:Icon']
})(({ remoteModules, node, ...props }) => {
  const [Icon] = remoteModules;
  const { content, isError } = node || {};

  return (
    <div className={classnames(style['node-wrapper'], isError ? style['error'] : null)}>
      <div className={style['node']}>
        <div className={style['node-title']}>
          <NodeTitle {...props} node={node} />
          <DeleteIcon {...props} node={node} />
        </div>
        <div
          className={style['node-content']}
          onClick={() => {
            console.log('on cc node click...');
          }}
        >
          {content ? <span className={classnames(style['node-title-label'], style['ellipse'])}>{content}</span> : <span className={style['placeholder']}>请选择抄送人</span>}
          <Icon className={style['content-right-icon']} type="icon-arrow-thin-right" />
        </div>
      </div>
      {isError && <div className={style['error-message']}>不能为空</div>}
    </div>
  );
});

export default CCNode;
