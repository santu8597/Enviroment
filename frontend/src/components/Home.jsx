import React from 'react'
import Card from './Card';
import data from '../data/items.json';
import Review from './Review';
export default function Home() {
  const list = "px-2 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-700 w-fit text-zinc-100";
  return (
    <>
      <div className="main">
        <div className="flex justify-center items-center w-screen h-32 md:h-64 bg-center bg-no-repeat bg-cover flex-col bg-[url('https://as1.ftcdn.net/v2/jpg/05/04/42/26/1000_F_504422641_FRTJu1TtIWkuy0SsgECYDcCLBwlSdGOk.jpg')]">
          <h1 className="text-zinc-50 md:text-6xl text-2xl font-mono text-center">Environment Friendly packaging</h1>
          <h1 className="text-zinc-200 md:text-3xl font-mono md:ml-96 mt-2">The need for our GLobe</h1>
        </div>
        <div className="p1 flex flex-col justify-center items-center">

          <h1 className="text-zinc-600 md:text-5xl text-3xl mt-4 font-mono">Why do we need
          </h1>
          <h1 className="text-zinc-600 md:text-5xl text-3xl text-center font-mono">Enviromental Friendly packaging

          </h1>
          <div className="dash md:w-4/5 w-11/12 h-0.5 mt-3 bg-zinc-500"></div>
        </div>
        <h1 className="text-zinc-900 md:text-3xl text-2xl mt-8 ml-8 md:mt-16 font-mono md:ml-32">Problems caused by covnentional plastic packaging</h1>
        <div className="p2 flex justify-between items-center md:flex-row flex-col w-full flex-wrap">

          <ul className="md:text-xl flex flex-col gap-2 md:ml-48 mt-4 ml-6 mb-2 list-disc marker:text-emerald-900">
            <li className={list}>Single use plastic are not recycled</li>
            <li className={list}>Increases carbon footprint</li>
            <li className={list}>Damages Ecosystem</li>
            <li className={list}>Causes health hazards in form of microplastics</li>
            <li className="px-2 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-700 text-zinc-200 w-fit">Does not decompost easily</li>
          </ul>
          <div className="flex justify-center items-center md:mr-8 md:w-72 md:h-64 h-[22rem] w-[22rem] md:mt-0 mt-4 md:ml-0 bg-[url('https://img.freepik.com/free-vector/plastic-pollution-concept-illustration_114360-20848.jpg')] bg-center bg-no-repeat bg-cover rounded-lg shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"></div>


        </div>


        <div className="p-1 flex flex-col justify-center items-center">
          <div className="dash md:w-11/12 w-full h-0.5 mt-8 mb-2 bg-zinc-400"></div>
          <h1 className="text-zinc-700 md:text-5xl text-3xl md:mt-8 mt-4 font-mono">Our range of products</h1>
          <div className="dash md:w-1/2 w-11/12 h-0.5 mt-3 bg-zinc-500"></div>
        </div>
        <div className="flex items-center md:justify-evenly md:flex-wrap md:w-screen overflow-x-scroll w-full md:overflow-hidden gap-2 no-scrollbar md:gap-0">
          {data.map((ele) => {
            return <Card title={ele.title} img={ele.img} description={ele.description} link={ele.link} />
          })}
        </div>
        
      </div>
     
    </>
  )
}
