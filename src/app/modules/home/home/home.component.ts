import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenResponseInterface } from '../../../models/interfaces/login-interfaces/login-interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.test().subscribe(el => console.log(el));

    setInterval(() => {
      this.test().subscribe(el => console.log(el));
    }, 20000);
  }

  test() {
    return this.httpClient.post<TokenResponseInterface>(
      '/rest/test',
      { ddd: 'ddd' },
      {
        responseType: 'json',
      }
    );
  }
}
