import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MicroFrontendRuntime } from '@mf-app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DiscoveryService {

  private environmentUrl = "http://localhost:3333/api";

  constructor(private _httpClient: HttpClient) {
  }

  discover(): Observable<Array<MicroFrontendRuntime>> {
    return this._httpClient.get<Array<MicroFrontendRuntime>>(`${this.environmentUrl}/micros`)
  }
}
