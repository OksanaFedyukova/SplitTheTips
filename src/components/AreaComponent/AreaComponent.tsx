import React, { useState, useEffect, useMemo } from 'react';
import { Area } from './types';
import './AreaComponent.css';
import { AreaService } from './AreaService';

const AreaComponent: React.FC = () => {
  const [areas, setAreas] = useState<Area[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const areaService = useMemo(() => new AreaService(), []);

  useEffect(() => {
    const fetchAreas = async () => {
      const data = await areaService.getAll();
      setAreas(data);
      setLoading(false);
    };

    fetchAreas();
  }, [areaService]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="area-component">
      <h2>Areas</h2>
      <ul>
        {areas.map((area) => (
          <li key={area.id}>{area.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AreaComponent;
