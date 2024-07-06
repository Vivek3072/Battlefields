import Menu1 from "../../assets/Menu1.svg";
import Menu2 from "../../assets/Menu2.svg";

const data = [
  {
    id: 1,
    image:
      "https://png.pngtree.com/background/20230610/original/pngtree-the-protagonist-of-the-role-playing-game-character-picture-image_3017069.jpg",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa0_3Lhnmn7_vVBof2neT_iqjyhN4IfsblZQ&s",
  },
  {
    id: 3,
    image:
      "https://pics.craiyon.com/2023-06-15/a2e5eff91ef042dea58662326d574456.webp",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnnsNQN2QWR_uQOVFTEjGTlN0O6vrjxvxqmA&s",
  },
  {
    id: 5,
    image: Menu1,
  },
  {
    id: 6,
    image: Menu2,
  },
];
export default function Sidebar() {
  return (
    <div className="flex flex-row md:flex-col items-center m-auto py-20 space-y-4">
      {data?.map((item) => {
        return (
          <div
            key={item.id}
            className={`${
              item.id === 3 ? "border-l-2" : "opacity-50"
            } border-orange-500 w-full`}
          >
            <img className="h-10 w-10 ml-2 rounded" src={item.image} />
          </div>
        );
      })}
    </div>
  );
}
