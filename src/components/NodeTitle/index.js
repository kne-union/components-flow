import { useEffect, useState, useRef } from 'react';
import { Space, Input } from 'antd';
import { createWithRemoteLoader } from '@kne/remote-loader';

import style from './style.module.scss';

const NodeTitle = createWithRemoteLoader({
  modules: ['Icon']
})(({ remoteModules, node, ...props }) => {
  const [Icon] = remoteModules;
  const inputRef = useRef();
  const [toggle, setToggle] = useState(false);
  const [title, setTitle] = useState(node?.title);
  const onUpdateNodeTitle = value => {
    setTitle(value);
  };
  useEffect(() => {
    setTitle(node.title);
  }, [node.title]);
  useEffect(() => {
    if (toggle) {
      inputRef.current && inputRef.current.focus();
    }
  }, [toggle]);
  return (
    <>
      {toggle ? (
        <span style={{ flex: '1' }}>
          <Input
            ref={inputRef}
            style={{ width: '100%' }}
            size="small"
            value={title}
            onChange={e => {
              e.preventDefault();
              e.stopPropagation();
              setTitle(e.target.value);
            }}
            onPressEnter={e => {
              e.preventDefault();
              e.stopPropagation();
              onUpdateNodeTitle(e.target.value);
              setToggle(false);
            }}
            onBlur={e => {
              e.preventDefault();
              e.stopPropagation();
              onUpdateNodeTitle(e.target.value);
              setToggle(false);
            }}
          />
        </span>
      ) : (
        <Space size={4}>
          <span className={style['ellipse']}>{title}</span>
          <span
            className={style['node-edit']}
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              setToggle(true);
            }}
          >
            <Icon type="icon-bianji" />
          </span>
        </Space>
      )}
    </>
  );
});

export default NodeTitle;
