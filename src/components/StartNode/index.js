import { get } from 'lodash';
import ConditionNode from '@components/ConditionNode';
import classnames from 'classnames';

import style from './style.module.scss';

const StartNode = ({ data, ...props }) => {
  const { label, content } = data || {};
  return (
    <div className={classnames(style['node-wrapper'])}>
      <div className={style['node']}>
        <div className={classnames(style['node-title'], style['ellipse'])}>{label}</div>
        <div className={style['node-content']}>
          {content ? <span className={classnames(style['node-title-label'], style['ellipse'])}>{content}</span> : <span className={classnames(style['placeholder'], style['ellipse'])}>请选择审批人</span>}
        </div>
      </div>
      {get(data, 'hasCondition') && <ConditionNode {...props} data={data} />}
    </div>
  );
};

export default StartNode;
