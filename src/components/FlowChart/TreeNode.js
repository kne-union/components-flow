import React, { Children } from 'react';
import classnames from 'classnames';
import style from './style.module.scss';

const TreeNode = ({ children, label, next, className }) => {
  return (
    <li className={classnames(className, 'node-lines', 'node', style.node, style['node-lines'])}>
      <div className={classnames('node-label', style['node-label'])}>{label}</div>
      {Children.count(children) > 0 && (
        <ul
          className={classnames('children-container', style['children-container'], {
            [style['has-next']]: Children.count(next) > 0
          })}
        >
          {children}
        </ul>
      )}
      {Children.count(next) > 0 && (
        <>
          <ul className={classnames('end-container', style['end-container'])}>{next}</ul>
        </>
      )}
      <i
        className={classnames(style['end-lines'], {
          [style['has-children']]: Children.count(children) > 0,
          [style['has-only-children']]: Children.count(children) === 1
        })}
      >
        <i className={style['end-lines-vertical']} />
      </i>
    </li>
  );
};

export default TreeNode;
