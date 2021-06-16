import React from 'react';

export function TodoInputView({ onAdd }: { onAdd: (text: string) => void }) {
  const [text, setText] = React.useState('');

  const handleChange = (e: any) => setText(e.target.value);

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      onAdd(text);
      setText('');
    }
  };

  return (
    <div className="panel-block">
      <input
        className="input"
        type="text"
        placeholder="Enter to add"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
