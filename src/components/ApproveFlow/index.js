import { useState } from 'react';
import style from './style.module.scss';
import FlowChart from '@components/FlowChart';
import StartNode from '@components/StartNode';
import { createWithRemoteLoader } from '@kne/remote-loader';
import { Button, Space } from 'antd';
import { Provider, useContext } from './context';
import clone from 'lodash/clone';
import nodeTypes from './nodeTypes';

const { v4: uuidv4 } = require('uuid');

const Node = FlowChart.Node;

const OptionsNode = createWithRemoteLoader({
  modules: ['components-core:Icon', 'components-core:Tooltip']
})(({ remoteModules, id, children, isEnd }) => {
  const [Icon, Tooltip] = remoteModules;
  const { appendNode } = useContext();
  return (
    <div className={style['options-node']}>
      {!isEnd && children}
      <Tooltip
        placement="right"
        content={
          <Space direction="vertical">
            <Button
              onClick={() => {
                appendNode(
                  {
                    title: '新审批节点',
                    nodeType: 'basic'
                  },
                  id,
                  'next'
                );
              }}
            >
              添加审批节点
            </Button>
            <Button
              onClick={() => {
                appendNode(
                  {
                    title: '新抄送节点',
                    nodeType: 'cc'
                  },
                  id,
                  'next'
                );
              }}
            >
              添加抄送节点
            </Button>
            <Button
              onClick={() => {
                appendNode(
                  {
                    title: '新条件分支',
                    nodeType: 'condition'
                  },
                  id,
                  'conditions'
                );
              }}
            >
              添加条件分支
            </Button>
          </Space>
        }
      >
        <Button className={style['add-btn']} size="small" icon={<Icon type="tianjia" />} />
      </Tooltip>
      {isEnd && children}
    </div>
  );
});
const ApproveFlow = () => {
  /*
   * 用数组保存flow数据
   *  conditions
   * */
  const [flowData, setFlowData] = useState(
    new Map([
      ['root', { id: 'root', title: '发起人', content: '发起人' }],
      ['end', { id: 'end', title: '结束', content: '结束' }]
    ])
  );

  //conditions next
  const appendNode = (node, parentId = 'root', appendType = 'next') => {
    setFlowData(flowData => {
      const id = uuidv4();
      const newFlowData = clone(flowData);
      (() => {
        if (!parentId) {
          return;
        }

        const pNode = flowData.get(parentId);
        const currentNodeNext = pNode.next || [];
        if (appendType === 'conditions' && (!currentNodeNext.length || flowData.get(currentNodeNext[0])?.nodeType !== 'condition')) {
          setTimeout(() => {
            appendNode(Object.assign({}, node, { type: 'default', title: '默认条件', content: '其他条件进入此流程' }), parentId, appendType);
          }, 0);
        }
        if (appendType === 'conditions' && !(currentNodeNext[0] && flowData.get(currentNodeNext[0])?.nodeType !== 'condition')) {
          if (currentNodeNext?.length > 1) {
            currentNodeNext.splice(currentNodeNext?.length - 1, 0, id);
          } else {
            currentNodeNext.push(id);
          }
          newFlowData.set(parentId, Object.assign({}, pNode, { next: currentNodeNext }));
          newFlowData.set(id, Object.assign({}, node, { id, parentId }));
          return;
        }

        const next = [id];
        newFlowData.set(parentId, Object.assign({}, pNode, { next }));
        newFlowData.set(id, Object.assign({}, node, { id, parentId, next: currentNodeNext }));
        currentNodeNext.forEach(prevId => {
          const prevItem = newFlowData.get(prevId);
          newFlowData.set(prevId, Object.assign({}, prevItem, { parentId: id }));
        });
      })();
      return newFlowData;
    });
  };

  const renderNode = id => {
    const nodeData = flowData.get(id);
    if (!nodeData) {
      return null;
    }

    const children = (nodeData.next || []).map(nextId => renderNode(nextId));

    if (id === 'root') {
      const endNodeData = flowData.get('end');
      return (
        <FlowChart
          label={
            <OptionsNode id={id} node={nodeData}>
              <StartNode node={nodeData} />
            </OptionsNode>
          }
          next={
            [...flowData.values()].filter(item => !item?.next?.length)?.length > 1 ? (
              <OptionsNode isEnd id={'end'} node={endNodeData}>
                <StartNode node={endNodeData} />
              </OptionsNode>
            ) : (
              <Node id={'end'}>
                <StartNode node={endNodeData} />
              </Node>
            )
          }
        >
          {children}
        </FlowChart>
      );
    }
    const RenderNode = nodeTypes?.[nodeData.nodeType || 'basic'];
    return (
      <Node
        key={id}
        label={
          <OptionsNode id={id} node={nodeData}>
            <RenderNode node={nodeData} />
          </OptionsNode>
        }
      >
        {children}
      </Node>
    );
  };

  return (
    <Provider
      value={{
        flowData,
        setFlowData,
        appendNode
      }}
    >
      {renderNode('root')}
    </Provider>
  );
};

export default ApproveFlow;
