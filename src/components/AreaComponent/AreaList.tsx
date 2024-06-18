import React from 'react';
import { Area } from './types';

interface AreaListProps {
  areas: Area[];
  onEdit: (area: Area) => void;
  onDelete: (id: number) => void;
}

const AreaList: React.FC<AreaListProps> = ({ areas, onEdit, onDelete }) => (
 <>
 <h2>AreaList</h2>
 <ul>
    {areas.map(area => (
      <li key={area.id}>
        {area.title} - {area.percentage}%
        <button onClick={() => onEdit(area)}>Edit</button>
        <button onClick={() => onDelete(area.id)}>Delete</button>
      </li>
    ))}
  </ul> </>
 
);

export default AreaList;
