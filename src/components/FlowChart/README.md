
# FlowChart


### 概述

渲染出一个流程图


### 示例


#### 示例样式

```scss
.ant-card {
  border-color: black;
  text-align: center;
  width: 200px;
}
```

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _FlowChart(@components/FlowChart),antd(antd)

```jsx
const {default: FlowChart} = _FlowChart;
const {Card} = antd;

const Node = FlowChart.Node;
const BaseExample = () => {
    return <FlowChart label={<Card>开始</Card>} next={<Node label={<Card>结束</Card>}/>}>
        <Node label={<Card>label-1-1</Card>}/>
        <Node label={<Card>label-1-2</Card>}
              next={<Node label={<Card>label-1-2-end</Card>} next={<Node label={<Card>label-1-2-end-end</Card>}/>}>
                  <Node label={<Card>label-1-2-end-1</Card>}/>
                  <Node label={<Card>label-1-2-end-2</Card>}/>
              </Node>}>
            <Node label={<Card>label-1-2-1</Card>}/>
            <Node label={<Card>label-1-2-2</Card>}/>
            <Node label={<Card>label-1-2-3</Card>}>
                <Node label={<Card>label-1-2-3-1</Card>}/>
                <Node label={<Card>label-1-2-3-2</Card>}/>
                <Node label={<Card>label-1-2-3-3</Card>}/>
            </Node>
        </Node>
        <Node label={<Card>label-1-3</Card>}>
            <Node label={<Card>label-1-3-1</Card>}/>
        </Node>
        <Node label={<Card>label-1-4</Card>}>
            <Node label={<Card>label-1-4-1</Card>}/>
            <Node label={<Card>label-1-4-2</Card>}/>
        </Node>
    </FlowChart>;
};

render(<BaseExample/>);

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |

