import { useInfiniteQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import gameService, { Game } from "../services/gameService";
import ms from "ms";
import useGameQueryStore from "../store";

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameService.getAll({
        params: {
          genres: gameQuery.genreId,
          platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"), //24 h
  });
};

// const useGames = (gameQuery: GameQuery) =>
//   useInfiniteQuery<FetchResponse<Game>, Error>({
//     queryKey: ["games", gameQuery],
//     queryFn: ({ pageParam = 1 }) =>
//       gameService.getAll({
//         params: {
//           genres: gameQuery.genreId,
//           platforms: gameQuery.platformId,
//           ordering: gameQuery.sortOrder,
//           search: gameQuery.searchText,
//           page: pageParam,
//         },
//       }),
//     getNextPageParam: (lastPage, allPages) => {
//       return lastPage.next ? allPages.length + 1 : undefined;
//     },
//     staleTime: ms("24h"), //24 h
//   });

export default useGames;
