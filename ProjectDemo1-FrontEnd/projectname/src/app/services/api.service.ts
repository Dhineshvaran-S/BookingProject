import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:5046/swagger/index.html'; // .NET API URL

  constructor(private http: HttpClient) {}

  // Example method to fetch data from the API
  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}your-controller-endpoint`);
  }

  // Example method to send data to the API
  postData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}your-controller-endpoint`, data);
  }

  // Fetch all date pickers from the API
}
