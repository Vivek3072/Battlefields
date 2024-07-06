import Join from "../../assets/Join.svg";
import Online from "../../assets/Online.svg";
import Offline from "../../assets/Offline.svg";

const data = [
  {
    id: 1,
    image: Join,
  },
  {
    id: 2,
    image: Online,
  },
  {
    id: 3,
    image: Offline,
  },
];
export default function RightBar() {
  return (
    <div className="flex flex-row md:flex-col items-center py-20 space-y-6">
      {data?.map((item) => {
        return (
          <div key={item.id}>
            <img className="h-16 w-full rounded" src={item.image} />
          </div>
        );
      })}
    </div>
  );
}
