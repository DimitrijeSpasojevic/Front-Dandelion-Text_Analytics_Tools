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
