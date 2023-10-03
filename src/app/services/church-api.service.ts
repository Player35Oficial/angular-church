import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITransaction } from '../components/pages/transaction/deposit/deposit.component';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ChurchApiService {
  private baseApiUrl = environment.baseApiUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  login(email: string, senha: string): Observable<any> {
    const url = `${this.baseApiUrl}/entrar`;
    const body = { email, senha };

    return this.http.post(url, body);
  }

  createTransaction(
    id_tipos_transacao: string,
    id_usuario: number,
    valor: number
  ) {
    const url = `${this.baseApiUrl}/transacao/`;

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('authorization', `Bearer ${localStorage.getItem('access_token')}`);

    console.log('Chamou');
    return this.http.post<ITransaction>(
      url,
      {
        id_tipos_transacao,
        id_usuario: Number(`${this.authService.decodeAccessToken().uid}`),
        valor,
      },
      { headers }
    );
  }
}
