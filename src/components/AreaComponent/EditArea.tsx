import React from 'react';
import { Area } from './types';

interface EditAreaProps {
  area: Area;
  onUpdate: (id: number, updatedArea: Area) => void;
  onChange: (updatedArea: Area) => void;
}

const EditArea: React.FC<EditAreaProps> = ({ area, onUpdate, onChange }) => (
  <div>
    <h2>Edit Area</h2>
    <input
      type="text"
      placeholder="Title"
      value={area.title}
      onChange={(e) => onChange({ ...area, title: e.target.value })}
    />
    <input
      type="number"
      placeholder="Percentage"
      value={area.percentage}
      onChange={(e) => onChange({ ...area, percentage: parseFloat(e.target.value) })}
    />
    <button onClick={() => onUpdate(area.id, area)}>Update</button>
  </div>
);

export default EditArea;
