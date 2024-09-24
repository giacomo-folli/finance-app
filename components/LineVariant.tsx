import React from "react";
import { format } from "date-fns";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { CustomTooltip } from "./CustomTooltip";

type Props = {
  data: {
    date: string;
    income: number;
    expenses: number;
  }[];
};

export const LineVariant = ({ data }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="date"
          tickFormatter={(value) => format(value, "dd MMM")}
          style={{ fontSize: "12px" }}
          tickMargin={16}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line dot={false} dataKey="income" strokeWidth={2} stroke="#3d82f6" className="drop-shadow-sm" />
        <Line dot={false} dataKey="expenses" strokeWidth={2} stroke="#f43f5e" className="drop-shadow-sm" />
      </LineChart>
    </ResponsiveContainer>
  );
};
