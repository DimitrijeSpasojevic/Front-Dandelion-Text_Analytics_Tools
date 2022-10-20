import { Component, OnInit } from '@angular/core';
import {DandelionService} from "../services/dandelion.service";
@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  sentimentLevel: number;
  sentimentLevelNormalized: number = 0;
  sentimentType: string = '';
  text : string;
  language: string = 'auto';
  color: string = '0, 55, 100'
  R: number = 0
  G: number = 0
  constructor(private dandelionService: DandelionService) {
    this.sentimentLevel = 0;
    this.text = '';
  }

  ngOnInit(): void {
  }

  doSentimentAnalysis(): void{
    this.dandelionService.doSentimentAnalysis(this.text,this.language).subscribe((response)=>{
      this.sentimentLevel = response.sentiment.score
      this.sentimentType = response.sentiment.type
      this.sentimentLevelNormalized = (this.sentimentLevel + 1)/2;
      this.R = this.sentimentLevelNormalized * (-255) + 255
      this.G = 255 * this.sentimentLevelNormalized
      this.color = this.R.toString() + ',' + this.G.toString() + ',0'
    })
  }
}
