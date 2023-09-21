import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChurchApiService {
  private baseApiUrl = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  login(email: string, senha: string): Observable<any> {
    const url = `${this.baseApiUrl}/entrar`;
    const body = { email, senha };

    return this.http.post(url, body);
  }
}
