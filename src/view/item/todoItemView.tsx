import classNames from 'classnames';
import React from 'react';
import { TodoItem } from '../../model/item/todoItem';

export function TodoItemView({ item, onCheck }: { item: TodoItem; onCheck: (item: TodoItem) => void }) {
  const handleChange = () => {
    onCheck(item);
  };

  return (
    <label className="panel-block">
      <input type="checkbox" checked={item.done} onChange={handleChange} />
      <span
        className={classNames({
          'has-text-grey-light': item.done,
        })}
      >
        {item.text}
      </span>{' '}
    </label>
  );
}
