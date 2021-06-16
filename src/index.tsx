import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { TodoView } from './view/todoView';

function App() {
  return (
    <div className="container is-fluid">
      <TodoView />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
