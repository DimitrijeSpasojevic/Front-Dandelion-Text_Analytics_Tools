import { Component, OnInit } from '@angular/core';
import {DandelionService} from "../services/dandelion.service";
import {RequestStruct} from "../model";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  reqStructs: RequestStruct[] = []

  constructor(private dandelionService: DandelionService) { }

  ngOnInit(): void {
    this.reqStructs = this.dandelionService.getHistory()
  }

}
