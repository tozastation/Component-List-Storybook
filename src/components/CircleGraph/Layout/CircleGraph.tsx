import * as React from "react";
import {Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import IGenders from '../Data/CircleGraphProps';

// 円グラフの各領域の色を定義
const COLORS = [
  '#2250A2',
  '#da50a2',
];

const MyCircleGraph: React.SFC<IGenders> = ({genders}: IGenders) => {
    return (
      <ResponsiveContainer>
        <PieChart // 円グラフのhoverの設定などをする
          // onMouseEnter={} // hoverした時に。。。
        >
        <Pie // 円グラフの位置や大きさ、データやラベルの内容を指定
          data={genders}  // Array型のデータを指定
          nameKey="name" // データで表示させるタイトルを指定
          dataKey="amount" // データで表示させる値(数値)を指定
          cx="50%"  // 要素の左を基準に全体の50%移動
          cy="50%"  // 要素の上を基準に全体の50%移動
          labelLine={false}  // ラベルの線の表示を消す
          // label={renderCustomizedLabel} // ラベルの中身を指定。何も指定しなければパラメーターの値が表示される
        >
          { // 円グラフの色を各領域ごとに分けるように指定
          genders.map((entry, index) =>
            // tslint:disable-next-line:jsx-key
            <Cell fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Tooltip /> // hoverさせた時に具体的な値を表示させるように指定
      </PieChart>
    </ResponsiveContainer>
    );
}

export default MyCircleGraph