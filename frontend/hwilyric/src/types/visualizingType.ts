export interface INewSongTypes {
  startDate: string;
  endDate: string;
}

export interface IAnnualGenreChartData {
  id: string;
  label: string;
  value: number;
}

export interface IAnnaulKeywordOptions {
  rotations: number;
  rotationAngles: [number, number];
  fontSizes: [number, number];
}

export interface IAnnualKeywordData {
  word: string;
  count: number;
}

export interface IGenreRatio {
  annual?: number;
  name: string;
  ratio: number;
}

interface IGenreRatioSong extends IGenreRatio {
  songs: [];
}

export interface IAnnualGenreChart {
  genres: IGenreRatio[];
}

export interface IAnnualGenreRatio {
  [key: string]: IAnnualGenresChart[];
}

export interface IAnnualGenresChart {
  name: string;
  ratio: number;
  songs: string[];
}

export interface IWeeklyReportKeyword {
  name: string;
  count: number;
}

export interface IAnnualKeywordCloud {
  [key: string]: IAnnualKeywordData[];
}
