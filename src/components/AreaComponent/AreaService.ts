import { ApiService } from '../../services/ApiServices';
import { Area } from './types';

//const BASE_URL = process.env.BASE_URL;
const BASE_URL = import.meta.env.VITE_BASE_URL;


export class AreaService extends ApiService<Area> {
  constructor() {
    if (!BASE_URL) {
      throw new Error("API base URL is not defined in environment variables");
    }
    super(`${BASE_URL}/areas`);
  }
}
