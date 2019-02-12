import * as React from "react";
import {Tooltip, ComposedChart, XAxis, YAxis, CartesianGrid, Bar } from 'recharts';
import ITestGrades from '../Data/VerticalGraphProps';

const MyVerticalGraph: React.SFC<ITestGrades> = ({testGrades}) => {
    return (
        <ComposedChart　　// グラフ全体のサイズや位置、データを指定。場合によってmarginで上下左右の位置を指定する必要あり。
            width={600}  // グラフ全体の幅を指定
            height={280}  // グラフ全体の高さを指定
            layout="vertical" // グラフのX軸とY軸を入れ替え
            data={testGrades}   // Array型のデータを指定
            margin={{ top: 50, right: 60, bottom: 0, left: 150 }}  // marginを指定
        >
            <XAxis  // X軸に関する設定
              type="number" // データタイプをnumberに変更。デフォルトではcategoryになっている
              domain={['dataMin - 100', 'dataMax + 10']} // 軸の表示領域を指定
            />
            <YAxis // Y軸に関する設定
              type="category" // データタイプをcategoryに変更
              dataKey="name"  // Array型のデータの、Y軸に表示したい値のキーを指定
            />
            <Tooltip /> // hoverさせた時に具体的な値を表示させるように指定
            <CartesianGrid  // グラフのグリッドを指定
              stroke="#f5f5f5"  // グリッド線の色を指定
             /> 
            <Bar
              dataKey="point"
              barSize={20}
              stroke="rgba(34, 80, 162, 0.2)"
              fillOpacity={1}
              fill="#2250A2"
            />
        </ComposedChart>
    );
}

export default MyVerticalGraph