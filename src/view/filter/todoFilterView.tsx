import classNames from 'classnames';

export function TodoFilterView({ value, onChange }: { value: string; onChange: (key: string) => void }) {
  const handleClick = (key: string, e: any) => {
    e.preventDefault();
    onChange(key);
  };

  return (
    <div className="panel-tabs">
      <a href="#" onClick={handleClick.bind(null, 'ALL')} className={classNames({ 'is-active': value === 'ALL' })}>
        All
      </a>
      <a href="#" onClick={handleClick.bind(null, 'TODO')} className={classNames({ 'is-active': value === 'TODO' })}>
        ToDo
      </a>
      <a href="#" onClick={handleClick.bind(null, 'DONE')} className={classNames({ 'is-active': value === 'DONE' })}>
        Done
      </a>
    </div>
  );
}
