import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private http: HttpClient) {}

  analizarEmocion(text: string){
    const url = 'https://xoespgkaoe.execute-api.us-west-1.amazonaws.com/prod/sentimiento/';
    const headers = { 'Content-Type': 'application/json' };
    const body = { 'sentencia': text };
    this.http.post<any>(url, body, { headers }).subscribe({
        next: data => {
          setTimeout(() => {
            this.router.navigate(['/results'], {state : { data}});
          }, 2000);
        },
        error: error => {
            console.error('There was an error!', error);
        }
    });
  }
}
