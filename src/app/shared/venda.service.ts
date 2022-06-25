import { Injectable } from '@angular/core';
import { Venda } from './model/venda.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class VendaService {

    urlDatabase = environment.firebase.databaseURL;
    dataPath = 'vendas'
    token = null;

    constructor(private http: HttpClient) { }

    buildUrlAuth(): string {
        if (this.token)
            return `?auth=${this.token}`

        return "";
    }

    listarVendas(): Observable<Venda[]> {
        return this.http.get<Venda[]>(`${this.urlDatabase}/${this.dataPath}.json${this.buildUrlAuth()}`).pipe(
            map(result => {
                //Nao retorna como array - Verificar se há forma melhor de tratar
                const array: Venda[] = [];
                for (var itemId in result) {
                    let banner = {
                        id: itemId,
                        ...result[itemId]
                    }
                    array.push(banner);
                }
                return array;
            })
        );
    }

    get(id: string): Observable<Venda> {
        return this.http.get<Venda>(`${this.urlDatabase}/${this.dataPath}/${id}.json${this.buildUrlAuth()}`).pipe(
            map(data => {
                return data;
            })
        );
    }

    adicionarVenda(object: Venda): Observable<Venda> {
        return this.http.post<Venda>(`${this.urlDatabase}/${this.dataPath}.json${this.buildUrlAuth()}`, object)
            .pipe(
                take(1)
            );
    }

    alterarVenda(id: string, object: Venda): Observable<Venda> {
        return this.http.put<Venda>(`${this.urlDatabase}/${this.dataPath}/${id}.json${this.buildUrlAuth()}`, object)
            .pipe(
                take(1)
            );
    }

    excluirVenda(id: string) {
        return this.http.delete(`${this.urlDatabase}/${this.dataPath}/${id}.json${this.buildUrlAuth()}`)
            .pipe(
                take(1)
            );
    }
}