import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor(private http: Http) { }
  consultar(): Promise<any> {
    return this.http.get('http://localhost:3000/cidades')
      .toPromise()
      .then(response => response.json());
  }
}
