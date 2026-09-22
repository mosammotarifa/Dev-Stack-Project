import type { devstackType } from "./Type";
import Technology from './Technology';
import  { use } from 'react';

export interface technologiesProps{
    devStackPromise:Promise <devstackType[]>
    stack:devstackType[]
    setStack:(value:devstackType[])=>void
}

const Technologies = ({devStackPromise,stack,setStack}:technologiesProps) => {
    const technologics=use (devStackPromise)
    return (
  <div className="h-full">

    <div className="mb-5">
     <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
  Explore the{" "}
  <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
    Technologies
  </span>
</h2>

<p className="text-sm text-gray-500 mt-2">
  Pick one technology per category to build your ideal stack.
</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {technologics.map((technology) => (
        <Technology
          key={technology.id}
          technology={technology}
          stack={stack}
          setStack={setStack}
        />
      ))}
    </div>

  </div>
);
};

export default Technologies;