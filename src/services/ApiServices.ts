export class ApiService<T> {
    private baseUrl: string;
  
    constructor(baseUrl: string) {
      this.baseUrl = baseUrl;
    }
  
    public async getAll(): Promise<T[]> {
      const response = await fetch(this.baseUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }
  
    public async getById(id: number): Promise<T | undefined> {
      const response = await fetch(`${this.baseUrl}/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }
  
    public async create(item: T): Promise<void> {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    }
  
    public async update(id: number, item: T): Promise<void> {
      const response = await fetch(`${this.baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    }
  
    public async delete(id: number): Promise<void> {
      const response = await fetch(`${this.baseUrl}/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    }
  }
  