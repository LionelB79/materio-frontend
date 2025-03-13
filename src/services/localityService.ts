import apiClient from '../api/apiClient';
import { Locality } from '../types/models';

export const localityService = {
  
  getAll: async (): Promise<Locality[]> => {
    const response = await apiClient.get<Locality[]>('/localities');
    return response.data;
  },

  getByName: async (name: string): Promise<Locality> => {
    const response = await apiClient.get<Locality>(`/locality/${name}`);
    return response.data;
  }
};