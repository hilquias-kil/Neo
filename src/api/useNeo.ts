import axios from "axios";
import useSWR from "swr";
import { Neo } from "../interfaces/neoDetail";

const getNeo = (url: string) => axios.get(url).then((res) => res.data);

const useNeo = (id?: string) => {
  const { data, error } = useSWR<Neo>(
    `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${
      process.env.REACT_APP_API_KEY || "DEMO_KEY"
    }`,
    getNeo
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useNeo;
