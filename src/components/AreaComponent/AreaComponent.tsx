import React from 'react';
import AreaList from './AreaList';
import CreateArea from './CreateArea';
import EditArea from './EditArea';
import useAreaHandlers from '../../hooks/useAreaHandlers';
import AreaSelect from './AreaSelect';

const AreaComponent: React.FC = () => {
  const {
    areas,
    selectedArea,
    loading,
    error,
    setSelectedArea,
    handleCreateArea,
    handleUpdateArea,
    handleDeleteArea
  } = useAreaHandlers();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div> 
     <AreaSelect areas={areas}/>
      <AreaList areas={areas} onEdit={setSelectedArea} onDelete={handleDeleteArea} />
      <CreateArea onCreate={handleCreateArea} />
      
      {selectedArea && (
        <EditArea
          area={selectedArea}
          onUpdate={handleUpdateArea}
          onChange={setSelectedArea}
        />
      )}
    </div>
  );
};

export default AreaComponent;
