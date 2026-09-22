
import type { devstackType } from './Type';
import { toast } from "react-toastify";
export interface technologyProps{
    technology:devstackType
    stack:devstackType[]
    setStack:(value:devstackType[])=>void
}

const Technology = ({technology,stack,setStack}:technologyProps) => {
    // const[stackButton,setStackButton]=useState(false)
    const isadd=stack.some((tech)=>tech.id===technology.id)
    const handleStackButton=()=>{
        setStack([...stack,technology])
        toast.success(`${technology.name} added to your stack!`);
        // setStackButton(true)
    }
   return (
  <div className="h-full flex flex-col border border-gray-200 rounded-2xl p-5 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">

    {/* Icon + Badge */}
    <div className="flex justify-between items-center">
      <div className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
        <img
          className="w-8 h-8 object-contain"
          src={technology.icon}
          alt={technology.name}
        />
      </div>

      <p className="border rounded-full py-1 px-3 bg-pink-50 border-pink-100 text-pink-600 text-xs font-medium">
        {technology.badge}
      </p>
    </div>

    {/* Name */}
    <h2 className="text-xl font-bold mt-4 text-gray-800">
      {technology.name}
    </h2>

    {/* Description */}
    <p className="text-gray-500 mt-2 leading-6 text-sm">
      {technology.description}
    </p>

    {/* Category + Difficulty + Rating */}
    <div className="grid grid-cols-3 gap-2 mt-5">
      <p className="border text-center py-2 px-1 border-gray-200 text-xs text-gray-600 rounded-full bg-gray-50 truncate">
        {technology.category}
      </p>

      <p className="border text-center py-2 px-1 border-gray-200 text-xs text-gray-600 rounded-full bg-gray-50 truncate">
        {technology.difficulty}
      </p>

      <p className="border text-center py-2 px-1 border-gray-200 text-xs text-gray-600 rounded-full bg-gray-50">
        ⭐ {technology.rating}
      </p>
    </div>

    {/* Button */}
    <button
      disabled={isadd}
      onClick={handleStackButton}
      className={`mt-3 text-white py-3 mt-5 w-full rounded-xl font-medium transition duration-200
        ${
          isadd
            ? "cursor-not-allowed bg-gray-400"
            : "cursor-pointer bg-black hover:bg-gray-800"
        }
      `}
    >
      {isadd ? (
        <>
          <i className="fa-solid fa-check mr-2 "></i>
          Added to Stack
        </>
      ) : (
        "Add to Stack"
      )}
    </button>

  </div>
);
};

export default Technology;
