import platforms from "../data/platforms";
import platformService from "../services/platformService";
import { useQuery } from "@tanstack/react-query";

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hr
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatforms;
