import platforms from "../data/platforms";
import platformService from "../services/platformService";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: ms("24h"), //24hr
    initialData: platforms,
  });
};

export default usePlatforms;
