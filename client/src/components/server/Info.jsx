import { IoIosArrowBack, IoMdStar } from "react-icons/io";
import MainInfo from "./MainInfo";
import MapInfo from "./MapInfo";

export default function Info() {
  return (
    <div className="flex flex-col text-white">
      <div className="mb-10">
        <div className="flex flex-row space-x-2 rajdhani-regular text-md uppercase">
          <div>
            <IoIosArrowBack />
          </div>
          <div>multiplayer / server browser /</div>
        </div>
        <div className="rajdhani-semibold text-3xl uppercase">server info</div>
      </div>

      <div className="rajdhani-medium text-2xl">
        #1| NASA | Noobs Welcome | Conquest 40Hz
      </div>
      <div className="rajdhani-light capitalize my-1">
        🏴 conquest large - siege of shanghai - normal - 40 hz
      </div>
      <div className="rajdhani-light capitalize my-1">
        Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request,
        Appeal, Visit us: www.epg.gg | Discord https://discord.gg/3r5NK4d
      </div>
      <div className="flex flex-row space-x-2 rajdhani-regular">
        <button className="border  border-gray-500 uppercase px-6 py-1 text-white">
          Join
        </button>
        <button className="border  border-gray-500 uppercase px-6 py-1 text-white">
          Spectate
        </button>
        <button className="border  border-gray-500 uppercase px-6 py-1 text-white">
          Join as Commander
        </button>
        <button className="border  border-gray-500 uppercase px-6 py-1 text-white flex flex-row space-x-2 items-center">
          <IoMdStar color="white" /> <span>13672</span>
        </button>
      </div>

      <MainInfo />
      <MapInfo />
    </div>
  );
}
