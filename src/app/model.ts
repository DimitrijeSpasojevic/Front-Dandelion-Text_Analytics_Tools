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
