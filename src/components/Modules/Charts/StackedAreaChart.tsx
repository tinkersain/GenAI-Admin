import { useTheme } from "next-themes";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function StackedAreaChart() {
  const { theme } = useTheme();
  const isLightMode = theme === "light";
  const data = [
    {
      name: "Jan",
      after: 68,
      before: 66,
      amt: 1800,
    },
    {
      name: "Feb",
      after: 83,
      before: 80,
      amt: 1900,
    },
    {
      name: "Mar",
      after: 86,
      before: 84,
      amt: 2000,
    },
    {
      name: "Apr",
      after: 84,
      before: 80,
      amt: 2000,
    },
    {
      name: "May",
      after: 88,
      before: 85,
      amt: 2100,
    },
    {
      name: "Jun",
      after: 92,
      before: 90,
      amt: 2200,
    },
    {
      name: "Jul",
      after: 95,
      before: 92,
      amt: 2300,
    },
    {
      name: "Aug",
      after: 89,
      before: 87,
      amt: 2150,
    },
    {
      name: "Sep",
      after: 91,
      before: 89,
      amt: 2250,
    },
  ];

  const areaPvStroke = isLightMode ? "#000" : "#FFF";

  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#00FF6B" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#00FF6B" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#000" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#FFF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <Tooltip
          contentStyle={{
            backgroundColor: isLightMode ? "white" : "black",
          }}
        />
        <Area
          type="monotone"
          dataKey="after"
          stackId="1"
          stroke="#00FF6B"
          fill="url(#colorPv)"
        />
        <Area
          type="monotone"
          dataKey="before"
          stackId="1"
          stroke={areaPvStroke}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
