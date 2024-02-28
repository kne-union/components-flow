
# StartNode


### 概述

开始节点


### 示例

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _StartNode(@components/StartNode),_antd(antd)

```jsx
const { default: StartNode } = _StartNode;
const { Space } = _antd;

const nodeWidth = 200;
const nodeHeight = 84;
const nodePadding = 80;

const style = {
  '--node-height': nodeHeight + 'px',
  '--node-width': nodeWidth + 'px',
  '--node-padding': nodePadding + 'px'
};

const BaseExample = () => {
  return (
    <Space style={style}>
      <StartNode node={{ title: 'StartNode1', content: '' }} />
      <StartNode node={{ title: 'StartNode2', content: 'StartNode' }} />
    </Space>
  );
};

render(<BaseExample />);

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |

