import type { devstackType } from "./Type";
import { Suspense, useState } from "react";
import Technologies from "./Technologies";
import YourStack from "./YourStack";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const devStackPromise=async():Promise<devstackType[]>=>{
const res = await fetch('../data.json')
const data = await res. json()
  return data;
}

function App(){
  const [stack,setStack]=useState <devstackType[]> ([])
  
 return (
  <div className="min-h-screen bg-gray-50">
    <Suspense fallback={<p>Loading....</p>}>
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* Technologies */}
          <div className="lg:col-span-2">
            <Technologies
              devStackPromise={devStackPromise()}
              stack={stack}
              setStack={setStack}
            />
          </div>

          {/* Your Stack */}
          <div className="lg:col-span-1">
            <YourStack
              stack={stack}
              setStack={setStack}
            />
          </div>

        </div>
      </div>
      <Footer />
    </Suspense>
    <ToastContainer
      
    />

  </div>

);
}

export default App;