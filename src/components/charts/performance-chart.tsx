"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { month: "Jan", runs: 36, wickets: 12 },
  { month: "Feb", runs: 41, wickets: 10 },
  { month: "Mar", runs: 52, wickets: 13 },
  { month: "Apr", runs: 48, wickets: 16 },
  { month: "May", runs: 60, wickets: 18 },
];

export function PerformanceChart() {
  return (
    <Card className="border-white/10 bg-white/5">
      <CardHeader>
        <CardTitle>Team performance trend</CardTitle>
      </CardHeader>
      <CardContent className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="runsFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#d4af37" stopOpacity={0.45} />
                <stop offset="95%" stopColor="#6f46a7" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip contentStyle={{ background: "#07111b", border: "1px solid rgba(255,255,255,0.1)" }} />
            <Area type="monotone" dataKey="runs" stroke="#d4af37" fill="url(#runsFill)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
