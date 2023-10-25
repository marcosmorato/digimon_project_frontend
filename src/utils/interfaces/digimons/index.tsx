export interface IFields {
  field: string;
  image: string;
  _id: string;
}

export interface IDigimonData {
  name: string;
  xAntibody: boolean;
  levels: string[] | [];
  attributes: string[] | [];
  fields: IFields[] | [];
}

export interface IDigimonReducer {
  digimonsFilters: IDigimonData[];
}

export interface IDigimonFavorite {
  _id: string;
  name: string;
  xAntibody: boolean;
  levels: string[] | [];
  types: string[] | [];
  attributes: string[] | [];
  fields: IFields[] | [];
  images: {
    href: string;
    transparent: boolean;
  }[];
  releaseDate: string;
  descriptions?:
    | {
        origin: string;
        language: string;
        description: string;
      }[]
    | [];
  priorEvolutions?:
    | {
        digimon: string;
        condition: string;
        image: string;
      }[]
    | [];
  nextEvolutions?:
    | {
        digimon: string;
        condition: string;
        image: string;
      }[]
    | [];
}

export interface IDigimonFavorites {
  favorite: IDigimonFavorite[];
}

export interface IDigimonFilter {
  _id: string;
  name: string;
  xAntibody: boolean;
  images?: {
    href: string;
    transparent: boolean;
  }[];
  levels?: string[] | [];
  types?: string[] | [];
  attributes?: string[] | [];
  fields?: { field: string; image: string }[] | [];
  releaseDate: string;
  descriptions?:
    | {
        origin: string;
        language: string;
        description: string;
      }[]
    | [];
  skills?:
    | {
        skill: string;
        translation: string;
        description: string;
      }[]
    | [];
  priorEvolutions?:
    | {
        digimon: string;
        condition: string;
        image: string;
      }[]
    | [];
  nextEvolutions?:
    | {
        digimon: string;
        condition: string;
        image: string;
      }[]
    | [];
}
