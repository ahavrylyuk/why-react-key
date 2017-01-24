import React, { Component } from 'react';
import './App.css';

class List extends Component {
  state = { active: 0 };

  handleClick(active) {
    this.setState({ active });
    const { onChange } = this.props;
    if (onChange) {
      onChange(active);
    }
  }

  render() {
    const { items } = this.props;
    const { active } = this.state;
    return (
      <ul>
      {items && items.map && items.map((item, i) => (
        <li key={i} className={i === active ? 'active' : ''} onClick={() => this.handleClick(i)}>{item}</li>
      ))}
      </ul>
    )
  }
}

class Lists extends Component {
  state = {
    currentOne: this.props.one[0]
  };

  handleChange(i) {
    this.setState({ currentOne: this.props.one[i] });
  }

  render() {
    const { one, two } = this.props;
    const { currentOne } = this.state;
    return (
      <div>
        <List items={one} onChange={i => this.handleChange(i)} />
        <List items={two[currentOne]} />
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
