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
        <span className="text-pink-600">Technologies</span>
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        Explore technologies and build your perfect development stack.
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