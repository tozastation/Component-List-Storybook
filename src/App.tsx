import * as React from 'react';
import './App.css';
// import logo from './logo.svg';
import MyRadar from './components/Radar/Layout/Radar';
import MyGraph from './components/Graph/Layout/Graph';
import MyVerticalGraph from './components/VerticalGraph/Layout/VerticalGraph';
import MyCircleGraph from './components/CircleGraph/Layout/CircleGraph';

// Test Data
const dataRadar = [
  { rank: '国語', value: 120 },
  { rank: '数学', value: 85 },
  { rank: '理科', value: 65 },
  { rank: '社会', value: 35 },
  { rank: '英語', value: 35 },
];

const dataGraph = [
  {month: '1月', sale: 800, totalSale: 1400},
  {month: '2月', sale: 967, totalSale: 1506},
  {month: '3月', sale: 1098,totalSale: 989},
  {month: '4月', sale: 1200,totalSale: 1228},
  {month: '5月', sale: 1108,totalSale: 1100},
  {month: '6月', sale: 680, totalSale: 1700}
];

const dataEvent = [
  { name: '国語', point: 1500 },
  { name: '数学', point: 868 },
  { name: '理科', point: 1397 },
  { name: '社会', point: 1480 },
  { name: '英語', point: 1520 },
]

const dataGendar = [
  { name: '男性', amount: 532 },
  { name: '女性', amount: 232 },
  { name: '中性', amount: 232 }
];

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={null} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <MyRadar grades={dataRadar} />
        <MyGraph sales={dataGraph} />
        <MyVerticalGraph testGrades={dataEvent} />
        <MyCircleGraph genders={dataGendar} />
      </div>
    );
  }
}

export default App;
