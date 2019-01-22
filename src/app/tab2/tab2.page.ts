import { Component, OnInit } from '@angular/core';
//
//
import { Priere, PriereService } from './../services/priere.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  priere: Priere[];

  constructor(private priereService: PriereService) { }

  ngOnInit() {
    this.priereService.getTodos().subscribe(res => {
      this.priere = res;
    });
  }

  remove(item) {
    this.priereService.removeTodo(item.id);
  }

}
