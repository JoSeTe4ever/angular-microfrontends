import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscoveryService {

  private environmentUrl = "";

  constructor(private _httpClient: HttpClient) {

  }

  discover() {
    return this._httpClient.get('')
  }
}
