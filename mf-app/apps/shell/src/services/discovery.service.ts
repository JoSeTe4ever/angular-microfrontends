import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscoveryService {

  private environmentUrl = "http://localhost:3333/api";

  constructor(private _httpClient: HttpClient) {
  }

  discover(): Observable<any> {
    return this._httpClient.get<any>(`${this.environmentUrl}/micros`)
  }
}
