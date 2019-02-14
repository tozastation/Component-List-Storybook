import * as React from "react";
import { Tooltip, ComposedChart, XAxis, YAxis, CartesianGrid, Legend, Area, Bar } from 'recharts';
import ISales from '../Data/GraphProps';

const MyGraph: React.SFC<ISales> = ({sales}: ISales) => {
    return (
        <ComposedChart // グラフ全体のサイズや位置、データを指定。場合によってmarginで上下左右の位置を指定する必要あり。
            width={600}  // グラフ全体の幅を指定
            height={280}  // グラフ全体の高さを指定
            data={sales} // ここにArray型のデータを指定
            margin={{ top: 20, right: 60, bottom: 0, left: 0 }}  // marginを指定
        >
            <XAxis
                dataKey="month"  // Array型のデータの、X軸に表示したい値のキーを指定
            />
            <YAxis />
            <Tooltip /> //hoverした時に各パラメーターの詳細を見れるように設定
            <Legend />  // 凡例を表示(図の【売上】【総売上】)
            <CartesianGrid // グラフのグリッドを指定
                stroke="#f5f5f5" // グリッド線の色を指定
            />
            <Area // 面積を表すグラフ
              type="monotone"  // グラフが曲線を描くように指定。default値は折れ線グラフ
              dataKey="totalSale" // Array型のデータの、Y軸に表示したい値のキーを指定
              stroke="#00aced" // グラフの線の色を指定
              fillOpacity={1}  // グラフの中身の薄さを指定
              fill="rgba(0, 172, 237, 0.2)"  // グラフの色を指定
            />
            <Bar // 棒グラフ
                dataKey="sale"　// Array型のデータの、Y軸に表示したい値のキーを指定
                barSize={20}  // 棒の太さを指定
                stroke="rgba(34, 80, 162, 0.2)" // レーダーの線の色を指定 
                fillOpacity={1}  // レーダーの中身の色の薄さを指定
                fill="#2250A2" // レーダーの中身の色を指定
            />
        </ComposedChart>
    );
}

export default MyGraph