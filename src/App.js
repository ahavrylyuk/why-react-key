import React, { Component } from 'react';
import { withState } from 'recompose';
import './App.css';

const List = withState('active', 'change', 0)(
  ({ items = [], active, change, onChange }) => {
    const handle = (i) => {
      change(i);
      if (onChange) onChange(i);
    }
    return (
      <ul>
      {items.map((item, i) => (
        <li
          key={i}
          className={i === active ? 'active' : ''}
          onClick={() => handle(i)}
        >{item}</li>
      ))}
      </ul>
    )
  }
);

const Lists = withState('active', 'onChange', 0)(
  ({ one, two, active, onChange }) => (
    <div>
      <List items={one} onChange={onChange} />
      <List key={active} items={two[one[active]]} />
    </div>
  )
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Lists
          one={['US', 'UK', 'UA']}
          two={{
            US: ['New York', 'Washington'],
            UK: ['London'],
            UA: ['Kyiv', 'Lviv']
          }}
        />
      </div>
    );
  }
}

export default App;
