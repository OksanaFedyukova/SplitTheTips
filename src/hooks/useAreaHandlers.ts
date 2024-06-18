// useAreaHandlers.tsx
import { useState, useEffect, useCallback } from 'react';
import { Area } from '../components/AreaComponent/types';
import { useApiService } from './useApiService';
import { AreaService } from '../components/AreaComponent/AreaService';

const useAreaHandlers = () => {
  const { getAll, create, update, delete: deleteArea, loading, error } = useApiService<Area>(new AreaService().baseUrl);
  const [areas, setAreas] = useState<Area[]>([]);
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);

  const fetchAreas = useCallback(async () => {
    try {
      const fetchedAreas = await getAll();
      setAreas(fetchedAreas);
    } catch (error) {
      console.error('Error fetching areas:', error);
    }
  }, [getAll]);

  useEffect(() => {
    fetchAreas();
  }, [fetchAreas]);

  const handleCreateArea = async (newArea: Partial<Area>) => {
    try {
      if (newArea.title && newArea.percentage !== undefined) {
        const createdArea = await create(newArea as Area);
        setAreas(prevAreas => [...prevAreas, createdArea]);
      }
    } catch (error) {
      console.error('Error creating area:', error);
    }
  };

  const handleUpdateArea = async (id: number, updatedArea: Area) => {
    try {
      await update(id, updatedArea);
      setAreas(prevAreas => prevAreas.map(area => (area.id === id ? updatedArea : area)));
      setSelectedArea(null);
    } catch (error) {
      console.error('Error updating area:', error);
    }
  };

  const handleDeleteArea = async (id: number) => {
    try {
      await deleteArea(id);
      setAreas(prevAreas => prevAreas.filter(area => area.id !== id));
    } catch (error) {
      console.error('Error deleting area:', error);
    }
  };

  return {
    areas,
    selectedArea,
    loading,
    error,
    setSelectedArea,
    handleCreateArea,
    handleUpdateArea,
    handleDeleteArea
  };
};

export default useAreaHandlers;
