import React from 'react';
import { Area } from './types';

interface AreaSelectProps {
  areas: Area[];
}

const AreaSelect: React.FC<AreaSelectProps> = ({ areas }) => (
  <div>
    <h2>Select Area</h2>
    <select>
      {areas.map(area => (
        <option key={area.id} value={area.id}>
          {area.title} - {area.percentage}%
        </option>
      ))}
    </select>
  </div>
);

export default AreaSelect;
