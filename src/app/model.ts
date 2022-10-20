import * as url from "url";

export interface ResponseExtraction {
  timestamp: string,
  lang: string,
  annotations: Annotation[]
}

export interface Annotation {
  spot: string,
  image: Image,
  abstract: string,
  categories: string[]
}

export interface Image {
  full: string,
}

export interface SimilarityResponse {
  similarity: number
}

export interface LanguageDetectionResponse {
  detectedLangs: Language[]
}

export interface Language {
  lang: string,
  confidence: number,
}

export interface SentimentResponse {
  sentiment: Sentiment
}

export interface Sentiment {
  score: number,
  type: string
}

export interface Color {
  R: number,
  G: number,
  B: number,
  A: number
}

export class RequestStruct {
  constructor(public date: Date, public method: string, public url: string) {}
}


