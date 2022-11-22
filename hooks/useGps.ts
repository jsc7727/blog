import { useEffect, useState } from 'react';

const useGps = () => {
  const [coords, setCoords] = useState<GeolocationCoordinates | null>(null);
  useEffect(() => {
    if (!('geolocation' in navigator)) return;
    const watchID = navigator.geolocation.watchPosition((position) => {
      setCoords(position.coords);
    });
    return () => {
      navigator.geolocation.clearWatch(watchID);
    };
  }, []);
  return { coords };
};
export default useGps;
