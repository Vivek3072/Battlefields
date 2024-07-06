import { useEffect, useState } from "react";

export default function MapInfo() {
  const [maps, setMaps] = useState([]);

  const fetchMaps = async () => {
    const resp = await fetch("https://battlefields-backend.onrender.com/maps");
    const data = await resp.json();
    setMaps(data);
    console.log(data);
  };

  useEffect(() => {
    fetchMaps();
  }, []);

  return (
    <div className="my-10">
      <div className="rajdhani-medium uppercase flex flex-row items-center space-x-10 my-5">
        <div className="uppercase">Map rotation</div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px]">
        {maps.map((map, index) => (
          <div key={index} className="relative col-span-1 overflow-hidden rounded h-40">
            <img
              src={map.thumbnail}
              alt={map.name}
              className="w-full hover:scale-110 transition-all duration-300"
            />
            <div className="w-full min-h-16 rajdhani-medium text-xl bg-[#101010] bg-opacity-80 absolute bottom-0 uppercase p-2">
              {map.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
