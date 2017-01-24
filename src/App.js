import React, { Component } from 'react';
import './App.css';

const List = ({ items, active, onChange = () => null }) => (
  <ul>
  {items && items.map && items.map((item, i) => (
    <li key={i} className={i === active ? 'active' : ''} onClick={() => onChange(i)}>{item}</li>
  ))}
  </ul>
);

class Lists extends Component {
  state = {
    activeOne: 0,
    activeTwo: 0
  };

  changeOne(i) {
    this.setState({ activeOne: i, activeTwo: 0 });
  }

  changeTwo(i) {
    this.setState({ activeTwo: i });
  }

  render() {
    const { one, two } = this.props;
    const { activeOne, activeTwo } = this.state;
    return (
      <div>
        <List items={one} active={activeOne} onChange={i => this.changeOne(i)} />
        <List items={two[one[activeOne]]} active={activeTwo} onChange={i => this.changeTwo(i)} />
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Lists
          one={['US', 'UK', 'UA']}
          two={{ US: ['New York', 'Washington'], UA: ['Kyiv', 'Lviv']}}
        />
      </div>
    );
  }
}

export default App;
