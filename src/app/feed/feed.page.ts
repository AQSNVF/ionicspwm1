import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public nome_user:string = "Nelson Viana Freire"
  public data_nasc_user:string = "08/12/1960"
  constructor() { }

  ngOnInit() {
  }

}
