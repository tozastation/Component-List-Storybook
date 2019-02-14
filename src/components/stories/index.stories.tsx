import * as React from 'react'
import { storiesOf } from '@storybook/react'
import MyRadar from '../Radar/Layout/Radar';
import MyGraph from '../Graph/Layout/Graph';
import MyVerticalGraph from '../VerticalGraph/Layout/VerticalGraph';
import {withKnobs} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';

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

storiesOf('ReChart', module)
  .addDecorator(withKnobs)
  .add('Rader Chart', () => (
    <MyRadar grades={dataRadar}/>
  ))
  .add('Graph', () => (
    <MyGraph sales={dataGraph}/>
  ))
  .add('Vertical Graph', withInfo('横グラフ') (()=> (
    <MyVerticalGraph testGrades={dataEvent}/>
  )));
