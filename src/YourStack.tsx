// import Technology from "./Technology";
import type { devstackType } from "./Type";
import { toast } from "react-toastify";

// import React from 'react';
export interface yourStackProps{
    stack:devstackType[]
    setStack:(value:devstackType[])=>void
    
}

const YourStack = ({stack,setStack}:yourStackProps) => {
    
const handletechRemove = (id: number) => {
    const removedTech = stack.find((techo) => techo.id === id);

    const remainingtech = stack.filter((techo) => techo.id !== id);

    setStack(remainingtech);

    toast.info(`${removedTech?.name} removed from your stack.`);
};

    const handleRemoveAll=()=>{
        setStack([])
          toast.success("All technologies removed from your stack.")
    }
   return (
  <div className="h-full">

    <div className="lg:sticky lg:top-24">

      <div className="border border-gray-200 bg-white shadow-sm rounded-2xl p-5">

        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-bold text-xl text-gray-800">
              Your Stack
            </h2>

            <p className="text-xs text-gray-400 mt-1">
              {stack.length} {stack.length === 1 ? "technology" : "technologies"} selected
            </p>
          </div>

          
        </div>

        {/* Empty state */}
        {stack.length === 0 ? (
          <div className="mt-5 border border-dashed border-gray-200 rounded-2xl p-8 text-center bg-gray-50">

            <div className="w-12 h-12 mx-auto rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400">
              <i className="fa-solid fa-layer-group"></i>
            </div>

            <p className="text-sm font-medium text-gray-500 mt-3">
              Your stack is empty
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Add technologies from the list to build your stack.
            </p>

          </div>
        ) : (
          <div className="mt-5 space-y-3">

            {stack.map((techno) => (
              <div
                key={techno.id}
                className="flex justify-between items-center border border-gray-100 rounded-xl p-3 hover:bg-pink-50 transition duration-200"
              >

                <div className="flex gap-3 items-center min-w-0">

                  <div className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                    <img
                      className="w-7 h-7 object-contain"
                      src={techno.icon}
                      alt={techno.name}
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-700 truncate">
                      {techno.name}
                    </p>

                    <p className="text-xs text-gray-400">
                      {techno.category}
                    </p>
                  </div>

                </div>

                <button
                  className="w-8 h-8 shrink-0 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 cursor-pointer transition duration-200"
                  onClick={() => handletechRemove(techno.id)}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>

              </div>
            ))}

          </div>
        )}

        {/* Remove All */}
        {stack.length > 0 && (
          <button
            onClick={handleRemoveAll}
            className="mt-5 w-full rounded-xl py-3 bg-gray-100 border border-gray-200 text-gray-600 hover:bg-red-50 hover:text-red-500 hover:border-red-200 cursor-pointer transition duration-200"
          >
            <i className="fa-solid fa-trash mr-2"></i>
            Remove All
          </button>
        )}

      </div>

    </div>

  </div>
);
};

export default YourStack;