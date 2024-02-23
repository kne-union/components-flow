
# BasicNode


### 概述

基础节点


### 示例

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _BasicNode(@components/BasicNode),_antd(antd)

```jsx
const { default: BasicNode } = _BasicNode;
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
      <BasicNode data={{ label: 'BasicNode1', content: '' }} />
      <BasicNode data={{ label: 'BasicNode2', content: 'BasicNode' }} />
    </Space>
  );
};

render(<BaseExample />);

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |

