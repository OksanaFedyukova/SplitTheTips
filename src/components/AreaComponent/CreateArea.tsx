import React, { useState } from 'react';
import { Area } from './types';

interface CreateAreaProps {
  onCreate: (area: Partial<Area>) => void;
}

const CreateArea: React.FC<CreateAreaProps> = ({ onCreate }) => {
  const [newArea, setNewArea] = useState<Partial<Area>>({ title: '', percentage: 0 });

  const handleCreateArea = () => {
    onCreate(newArea);
    setNewArea({ title: '', percentage: 0 });
  };

  return (
    <div>
      <h2>Create New Area</h2>
      <input
        type="text"
        placeholder="Title"
        value={newArea.title}
        onChange={(e) => setNewArea({ ...newArea, title: e.target.value })}
      />
      <input
        type="number"
        placeholder="Percentage"
        value={newArea.percentage}
        onChange={(e) => setNewArea({ ...newArea, percentage: parseFloat(e.target.value) })}
      />
      <button onClick={handleCreateArea}>Create</button>
    </div>
  );
};

export default CreateArea;
