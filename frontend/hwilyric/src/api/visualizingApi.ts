import { axios } from "./https";
import { INewSongTypes } from "../types/visualizingType";

export async function weeklyNewSong(param: INewSongTypes) {
  try {
    const res = await axios.get(
      `api/trend/weekly?startDate=${param.startDate}&endDate=${param.endDate}`
    );
    const data = res.data;
    return data;
  } catch (err) {
    return err;
  }
}

export async function annualGenre() {
  try {
    const res = await axios.get("api/trend/annual");
    const data = res.data;
    return data;
  } catch (err) {
    return err;
  }
}

export async function annualData(years: string) {
  try {
    const res = await axios.get(`api/trend/annual/${years}`);
    const data = res.data;
    return data;
  } catch (err) {
    return err;
  }
}
