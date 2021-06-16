import React from 'react';
import { TodoItem } from '../model/item/todoItem';
import { TodoFilterView } from './filter/todoFilterView';
import { TodoInputView } from './input/todoInputView';
import { TodoItemView } from './item/todoItemView';

export function TodoView() {
  const getKey = () => Math.random().toString(32).substring(2);

  const [items, setItems] = React.useState<TodoItem[]>([]);
  const [filter, setFilter] = React.useState('ALL');

  const handleCheck = (checked: TodoItem) => {
    const newItems = items.map(item => {
      if (item.key === checked.key) {
        item.done = !item.done;
      }
      return item;
    });
    setItems(newItems);
  };

  const handleAdd = (text: string) => {
    setItems([...items, { key: getKey(), text, done: false }]);
  };

  const handleFilterChange = (value: string) => setFilter(value);

  const displayItems = items.filter(item => {
    if (filter === 'ALL') return true;
    if (filter === 'TODO') return !item.done;
    if (filter === 'DONE') return item.done;
  });

  return (
    <div className="panel">
      <div className="panel-heading">⚛️ React ToDo</div>
      <TodoInputView onAdd={handleAdd} />
      <TodoFilterView value={filter} onChange={handleFilterChange} />
      {displayItems.map(item => (
        <TodoItemView key={item.key} item={item} onCheck={handleCheck} />
      ))}
      <div className="panel-block">{displayItems.length} items</div>
    </div>
  );
}
