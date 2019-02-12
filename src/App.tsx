import * as React from 'react';
import './App.css';
import logo from './logo.svg';
import MyRadar from './components/Radar/Layout/Radar';

const dataRadar = [
  { rank: '国語', value: 120 },
  { rank: '数学', value: 85 },
  { rank: '理科', value: 65 },
  { rank: '社会', value: 35 },
  { rank: '英語', value: 35 },
];

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <MyRadar grades={dataRadar} />
      </div>
    );
  }
}

export default App;
