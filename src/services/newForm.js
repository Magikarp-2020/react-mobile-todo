import { getId } from '../utils/utils';
import { listAddItem } from './list';

const submitNewForm = ({ title, content, endTime, startTime, push }) => {
  const id = getId();
  const saveData = {
    title: title.value,
    content: content.value,
    endTime: endTime.value.getTime(),
    startTime: startTime.value.getTime(),
    push: push.value,
    id,
  };
  window.localStorage.setItem(`todo-detail-${id}`, JSON.stringify(saveData));
  listAddItem(id);
};

export {
  submitNewForm,
};
