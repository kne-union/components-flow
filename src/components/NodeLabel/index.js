import { useEffect, useState, useRef } from 'react';
import { Space, Input } from 'antd';
import { createWithRemoteLoader } from '@kne/remote-loader';

import style from './style.module.scss';

const NodeLabel = createWithRemoteLoader({
  modules: ['Icon']
})(({ remoteModules, data }) => {
  const [Icon] = remoteModules;
  const inputRef = useRef();
  const [toggle, setToggle] = useState(false);
  const [title, setTitle] = useState(data?.label);
  const onUpdateNodeLabel = value => {
    setTitle(value);
  };
  useEffect(() => {
    setTitle(data.label);
  }, [data.label]);
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
              onUpdateNodeLabel(e.target.value);
              setToggle(false);
            }}
            onBlur={e => {
              e.preventDefault();
              e.stopPropagation();
              onUpdateNodeLabel(e.target.value);
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

export default NodeLabel;
