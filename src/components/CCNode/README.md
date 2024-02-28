
# CCNode


### 概述

抄送节点


### 示例

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _CCNode(@components/CCNode),_antd(antd)

```jsx
const { default: CCNode } = _CCNode;
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
      <CCNode node={{ title: 'CCNode1', content: '' }} />
      <CCNode node={{ title: 'CCNode2', content: 'CCNode' }} />
    </Space>
  );
};

render(<BaseExample />);

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |

