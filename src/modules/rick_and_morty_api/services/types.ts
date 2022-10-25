// models gral. api

export interface iApiInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface iApiDescription {
  name: string;
  url: string;
}

// models Character Api
export interface iCharacterApiResult {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: iApiDescription;
  location: iApiDescription;
  image: string;
  episode: string[];
  string: string;
  created: string;
}

export interface iCharactersApiResult {
  info: iApiInfo;
  results: iCharacterApiResult[];
}
