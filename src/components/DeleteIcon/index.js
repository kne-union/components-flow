import style from './style.module.scss';
import { createWithRemoteLoader } from '@kne/remote-loader';

const DeleteIcon = createWithRemoteLoader({
  modules: ['Icon', 'Tooltip']
})(({ remoteModules, ...props }) => {
  const [Icon] = remoteModules;
  return (
    <span
      className={style['node-delete']}
      onClick={event => {
        event.preventDefault();
        event.stopPropagation();
        console.log('on node delete...');
      }}
    >
      <Icon type="icon-close-thin" size="16" />
    </span>
  );
});

export default DeleteIcon;
