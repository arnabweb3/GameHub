import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data, error } = usePlatforms();
  return data?.results.find((p) => p.id === id);
};

export default usePlatform;
