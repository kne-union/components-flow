import { createWithRemoteLoader } from '@kne/remote-loader';
import DeleteIcon from '@components/DeleteIcon';
import NodeLabel from '@components/NodeLabel';
import classnames from 'classnames';
import style from './style.module.scss';

const BasicNode = createWithRemoteLoader({
  modules: ['components-core:Icon']
})(({ remoteModules, node, ...props }) => {
  const [Icon] = remoteModules;
  const { content, isError } = node;

  return (
    <div className={classnames(style['node-wrapper'], isError ? style['error'] : null)}>
      <div className={style['node']}>
        <div className={style['node-title']}>
          <NodeLabel node={node} {...props} />
          <DeleteIcon {...props} />
        </div>
        <div
          className={style['node-content']}
          onClick={() => {
            console.log('on basic node click...');
          }}
        >
          {content ? <span className={classnames(style['node-title-label'], style['ellipse'])}>{content}</span> : <span className={style['placeholder']}>请选择审批人</span>}
          <Icon className={style['content-right-icon']} type="icon-arrow-thin-right" />
        </div>
      </div>
      {isError && <div className={style['error-message']}>不能为空</div>}
    </div>
  );
});

BasicNode.defaultProps = {
  isError: false,
  node: {}
};

export default BasicNode;
