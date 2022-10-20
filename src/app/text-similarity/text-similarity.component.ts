import { Component, OnInit } from '@angular/core';
import {DandelionService} from "../services/dandelion.service";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  text1: string;
  text2: string;
  similarity: number;

  constructor(private dandelionService: DandelionService) {
    this.text1 = '';
    this.text2 = '';
    this.similarity = 0.0;
  }

  ngOnInit(): void {
  }

  compare():void {
    this.dandelionService.compareSemantic(this.text1, this.text2).subscribe((response) => {
      this.similarity = response.similarity;
    })
  }
}
