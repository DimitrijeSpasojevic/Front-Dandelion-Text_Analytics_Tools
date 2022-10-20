import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ConfigService} from "./config.service";
import {
  LanguageDetectionResponse,
  RequestStruct,
  ResponseExtraction,
  SentimentResponse,
  SimilarityResponse
} from "../model";

@Injectable({
  providedIn: 'root'
})
export class DandelionService {

  private readonly apiUrl = environment.dandelionApi + 'nex/v1/?'
  private readonly apiUrlSemantic = environment.dandelionApi + 'sim/v1/?'
  private readonly apiUrlLanguageDetection = environment.dandelionApi + 'li/v1/?'
  private readonly apiUrlSentiment = environment.dandelionApi + 'sent/v1/?'
  private reqStructs: RequestStruct[] = [];

  constructor(private httpClient: HttpClient, private configService: ConfigService) { }

  extractEntity(text: string, minConfidence: number, includePart: string): Observable<ResponseExtraction> {
    this.reqStructs.push(new RequestStruct(new Date(),"GET",`${this.apiUrl}text=${text}${includePart}&min_confidence=${minConfidence}&token=${this.configService.getToken()}`));
    return this.httpClient.get<ResponseExtraction>(`${this.apiUrl}text=${text}${includePart}&min_confidence=${minConfidence}&token=${this.configService.getToken()}`);
  }

  compareSemantic(text1: string, text2: string): Observable<SimilarityResponse> {
    this.reqStructs.push(new RequestStruct(new Date(),"GET",`${this.apiUrlSemantic}text1=${text1}&text2=${text2}&token=${this.configService.getToken()}`));
    return this.httpClient.get<SimilarityResponse>(`${this.apiUrlSemantic}text1=${text1}&text2=${text2}&token=${this.configService.getToken()}`)
  }

  detectLanguage(text: string, clean: boolean): Observable<LanguageDetectionResponse> {
    this.reqStructs.push(new RequestStruct(new Date(),"GET",`${this.apiUrlLanguageDetection}text=${text}&clean=${clean}&token=${this.configService.getToken()}`));
    return this.httpClient.get<LanguageDetectionResponse>(`${this.apiUrlLanguageDetection}text=${text}&clean=${clean}&token=${this.configService.getToken()}`)
  }

  doSentimentAnalysis(text: string, ln: string): Observable<SentimentResponse> {
    this.reqStructs.push(new RequestStruct(new Date(),"GET",`${this.apiUrlSentiment}lang=${ln}&text=${text}&token=${this.configService.getToken()}`));
    return this.httpClient.get<SentimentResponse>(`${this.apiUrlSentiment}lang=${ln}&text=${text}&token=${this.configService.getToken()}`)
  }

  getHistory(): RequestStruct[]{
    return this.reqStructs
  }
}
