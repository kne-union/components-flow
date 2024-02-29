import style from './style.module.scss';
import { createWithRemoteLoader } from '@kne/remote-loader';
import clone from 'lodash/clone';
import { useContext } from '../ApproveFlow/context';

const DeleteIcon = createWithRemoteLoader({
  modules: ['Icon', 'Tooltip']
})(({ remoteModules, node }) => {
  const [Icon] = remoteModules;

  const { setFlowData } = useContext();

  const onDelete = () => {
    setFlowData(flowData => {
      const pNode = flowData.get(node.parentId);
      const newFlowData = clone(flowData);
      if (node.nodeType === 'condition') {
        if (pNode.next?.length > 2) {
          newFlowData.set(node.parentId, Object.assign({}, pNode, { next: pNode.next.filter(item => item !== node.id) }));
          newFlowData.delete(node.id);
        } else {
          // TODO 指定删除条件分支后的结束节点
          newFlowData.set(node.parentId, Object.assign({}, pNode, { next: [] }));
          pNode.next.forEach(item => newFlowData.delete(item));
        }
      } else {
        newFlowData.set(node.parentId, Object.assign({}, pNode, { next: node?.next || [] }));
        newFlowData.delete(node.id);
      }
      return newFlowData;
    });
  };
  return (
    <span
      className={style['node-delete']}
      onClick={event => {
        event.preventDefault();
        event.stopPropagation();
        onDelete?.();
      }}
    >
      <Icon type="icon-close-thin" size="16" />
    </span>
  );
});

export default DeleteIcon;
