import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { radarData } from '../data.js';

export default function SkillsRadar({ animated }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={radarData} outerRadius="72%">
        <PolarGrid stroke="rgba(255,255,255,0.08)" />
        <PolarAngleAxis dataKey="skill" tick={{ fill: '#a8a6a0', fontSize: 11, fontFamily: 'Inter' }} />
        <Radar
          dataKey="value"
          stroke="#c9a86a"
          fill="#c9a86a"
          fillOpacity={0.18}
          strokeWidth={2}
          isAnimationActive={animated}
          animationDuration={1400}
          animationEasing="ease-out"
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
