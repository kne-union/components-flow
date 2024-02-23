
# ConditionNode


### 概述

条件节点


### 示例

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _ConditionNode(@components/ConditionNode),_antd(antd)

```jsx
const { default: ConditionNode } = _ConditionNode;
const { Space } = _antd;

const BaseExample = () => {
  return <Space>
    <ConditionNode data={{ label: '条件1', content: '' }} />
    <ConditionNode data={{ label: '默认条件', content: '其他条件进入此流程', type: 'default' }} />
  </Space>;
};

render(<BaseExample />);

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |

