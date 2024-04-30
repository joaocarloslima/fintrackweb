"use client"

import { getTotaisPorCategorias } from '@/app/actions/movimentacoes/dashboard';
import { useEffect, useState } from 'react';
import { Bar, BarChart, Legend, XAxis, YAxis } from 'recharts';

export function BarChartCategorias() {

  const data = [
    {
      categoria: "educação",
      valor: 100.00
    },
    {
      categoria: "lazer",
      valor: 120.00
    },
    {
      categoria: "alimentação",
      valor: 55.00
    }
  ]

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   getTotaisPorCategorias().then(data => setData(data))
  // }, [])

    return (
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="categoria" />
          <YAxis />
          <Legend />
          <Bar dataKey="valor" fill="#ff0066" />
        </BarChart>
    );
}
