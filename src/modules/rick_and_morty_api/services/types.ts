// models gral. api

export interface ApiInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface ApiDescription {
  name: string;
  url: string;
}

// models Character Api
export interface CharacterApiResult {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: ApiDescription;
  location: ApiDescription;
  image: string;
  episode: string[];
  string: string;
  created: string;
}

export interface CharactersApiResult {
  info: ApiInfo;
  results: CharacterApiResult[];
}
