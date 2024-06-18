import { useState, useCallback } from 'react';
import { ApiService } from '../services/ApiServices';

interface ApiMethods<T> {
  getAll: () => Promise<T[]>;
  getById: (id: number) => Promise<T | undefined>;
  create: (item: T) => Promise<T>;
  update: (id: number, item: T) => Promise<void>;
  delete: (id: number) => Promise<void>;
  loading: boolean;
  error: string | null;
}

export function useApiService<T>(baseUrl: string): ApiMethods<T> {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const apiService = useCallback(() => new ApiService<T>(baseUrl), [baseUrl]);

  const getAll = useCallback(async (): Promise<T[]> => {
    setLoading(true);
    try {
      const data = await apiService().getAll();
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      setError(error.message || 'Error fetching data');
      throw error;
    }
  }, [apiService]);

  const getById = useCallback(async (id: number): Promise<T | undefined> => {
    setLoading(true);
    try {
      const data = await apiService().getById(id);
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      setError(error.message || 'Error fetching data');
      throw error;
    }
  }, [apiService]);

  const create = useCallback(async (item: T): Promise<T> => {
    setLoading(true);
    try {
      await apiService().create(item);
      setLoading(false);
      return item;
    } catch (error) {
      setLoading(false);
      setError(error.message || 'Error creating data');
      throw error;
    }
  }, [apiService]);

  const update = useCallback(async (id: number, item: T): Promise<void> => {
    setLoading(true);
    try {
      await apiService().update(id, item);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message || 'Error updating data');
      throw error;
    }
  }, [apiService]);

  const deleteItem = useCallback(async (id: number): Promise<void> => {
    setLoading(true);
    try {
      await apiService().delete(id);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message || 'Error deleting data');
      throw error;
    }
  }, [apiService]);

  return {
    getAll,
    getById,
    create,
    update,
    delete: deleteItem,
    loading,
    error,
  };
}
