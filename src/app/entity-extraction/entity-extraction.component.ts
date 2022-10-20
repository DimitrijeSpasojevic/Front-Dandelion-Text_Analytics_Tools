import { Component, OnInit } from '@angular/core';
import {DandelionService} from "../services/dandelion.service";
import {Annotation} from "../model";

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {

  minConfidence: number;
  annotations: Annotation[] = [];
  textForExtraction: string;
  imageEnabled: boolean = false;
  abstractEnabled: boolean = false;
  categoriesEnabled: boolean = false;
  includePart: string;
  constructor(private dandelionService: DandelionService) {
    this.textForExtraction = '';
    this.minConfidence = 0.6;
    this.includePart = '';
  }

  ngOnInit(): void {
  }

  extractEntity(): void{
    this.includePart = '';
    if(this.imageEnabled || this.abstractEnabled || this.categoriesEnabled){
      this.includePart = '&include='
      if(this.imageEnabled) this.includePart += 'image%2C'
      if(this.abstractEnabled) this.includePart += 'abstract%2C'
      if(this.categoriesEnabled) this.includePart += 'categories%2C'
      if(this.includePart.endsWith('%2C')) this.includePart = this.includePart.slice(0, -3);
    }
    this.dandelionService.extractEntity(this.textForExtraction,this.minConfidence,this.includePart).subscribe((response)=>{
    this.annotations = response.annotations
    })
  }

}
