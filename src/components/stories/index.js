import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import MyRadar from '../Radar/Layout/Radar';

const dataRadar = [
  { rank: '国語', value: 120 },
  { rank: '数学', value: 85 },
  { rank: '理科', value: 65 },
  { rank: '社会', value: 35 },
  { rank: '英語', value: 35 },
];

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <MyRadar grades={dataRadar}/>
  ));
