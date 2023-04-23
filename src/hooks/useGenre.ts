import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import genreService from "../services/genreService";
import ms from "ms";
const useGenre = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: ms("24h"), //24hr
    initialData: genres,
  });
};

export default useGenre;
