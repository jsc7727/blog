import { useEffect, useState } from 'react';
const useWeather = (coords: GeolocationCoordinates | null) => {
  const [weather, setWeather] = useState<any | null>(null);
  useEffect(() => {
    (async () => {
      if (coords === null) return;
      const { latitude, longitude } = coords;
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&cnt=1&units=metric&lang=kr&appid=8d9c212c8d7336aa1d38875218732878`,
      );
      const json = await res.json();
      console.log(json);
      setWeather(json);
    })();
  }, [coords]);
  return { weather };
};
export default useWeather;
