import axios from "axios";
import useSWR from "swr";
import { Neo, NeoData } from "../interfaces/neo";

const getNeos = (url: string) =>
  axios
    .get(url)
    .then((res) => res.data)
    .then((res) => {
      let list: NeoData[] = [];
      Object.keys(res.near_earth_objects).forEach((date) => {
        res.near_earth_objects[date].forEach((neo: NeoData) => {
          list.push({
            ...neo,
            date: date,
          });
        });
      });
      return {
        ...res,
        list: list,
      };
    });

const useNeos = () => {
  const { data, error } = useSWR<Neo>(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-09-01&end_date=2022-09-02&api_key=${
      process.env.REACT_APP_API_KEY || "DEMO_KEY"
    }`,
    getNeos
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useNeos;
