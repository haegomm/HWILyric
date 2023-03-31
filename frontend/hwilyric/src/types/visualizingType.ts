export interface INewSongTypes {
  startDate: Date;
  endDate: Date;
}

export interface IAnnualGenreChartData {
  id: string;
  label: string;
  value: number;
}

export interface IAnnaulKeywordOptions {
  rotations: number;
  rotationAngles: [number, number];
}

export interface IAnnualKeywordData {
  text: string;
  value: number;
}

interface IGenreRatio {
  name: string;
  ratio: number;
}

export interface IAnnualGenreChart {
  genres?: IGenreRatio[];
}

export interface IAnnualGenreRatio {
  [key: string]: IGenreRatio[];
}
