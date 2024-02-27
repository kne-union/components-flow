import { get } from 'lodash';
import { createWithRemoteLoader } from '@kne/remote-loader';
// import NodeTooltip from "@components/WorkFlow/nodeTooltip";
import NodeCondition from '@components/ConditionNode';
import DeleteIcon from '@components/DeleteIcon';
import NodeLabel from '@components/NodeLabel';
import classnames from 'classnames';
import style from './style.module.scss';

const BasicNode = createWithRemoteLoader({
  modules: ['components-core:Icon']
})(({ remoteModules, ...props }) => {
  const [Icon] = remoteModules;
  const { data } = props;
  const { content } = data || {};

  return (
    <div
      className={classnames(
        style['node-wrapper']
        // data.isError ? style["error"] : null
      )}
    >
      <div className={style['node']}>
        <div className={style['node-title']}>
          <NodeLabel {...props} />
          <DeleteIcon {...props} data={data} />
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
      {get(data, 'isError') && <div className="error-message">不能为空</div>}
      {/*{get(data, "hasAddAction") !== false && (
        <NodeTooltip {...props} data={data} open={open} setOpen={setOpen} />
      )}*/}
      {get(data, 'hasCondition') && <NodeCondition {...props} data={data} />}
    </div>
  );
});

export default BasicNode;
