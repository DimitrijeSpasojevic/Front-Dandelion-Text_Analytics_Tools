import { Component, OnInit } from '@angular/core';
import {Language} from "../model";
import {DandelionService} from "../services/dandelion.service";

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {

  languages: Language[] = [];
  text : string;
  cleanEnabled: boolean = false

  constructor(private dandelionService: DandelionService) {
    this.text = '';
  }

  ngOnInit(): void {
  }

  detectLanguage():void{
    this.dandelionService.detectLanguage(this.text,this.cleanEnabled).subscribe((response)=>{
      this.languages = response.detectedLangs
    })
  }

}
