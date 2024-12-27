import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { Link,useNavigate } from 'react-router-dom';
export default function Feature(props) {
  const navigate=useNavigate();
  const list = "px-1.5 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-700 md:w-fit w-[20rem] text-zinc-200";

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center ">
        <div className="mt-32 md:mt-16 md:w-4/5 w-full mx-2 min-h-4/5 h-fit grid shadow-xl dark:shadow-gray-800 border md:grid-cols-2 border-slate-200 rounded-lg">
          <div className="h-fit w-full flex flex-col items-center justify-center mb-4 md:col-span-2">
            <h1 className="text-zinc-700 text-4xl md:text-5xl mt-6 mb-1 font-mono text-center">{props.title}</h1>
            <div className="dash w-11/12 md:w-4/5 h-0.5 mt-2 bg-zinc-500"></div>
          </div>
          <img className="md:h-96 md:w-96 justify-self-center w-[22rem] h-96 rounded-lg shadow-xl mt-4 mb-4 md:ml-8 dark:shadow-gray-800 relative" src={props.img} alt="description"/>
          <ul className="md:text-xl justify-self-center flex flex-col gap-2 md:mt-0 mt-4 md:list-disc items-center justify-center md:items-start marker:text-emerald-900"><p className="font-mono text-2xl text-zinc-800">Key features</p>
            <div className="dash md:w-36 md:mb-2 h-0.5 bg-zinc-500 relative w-64 md:bottom-1 md:right-1"></div>
            <li className={list}>{props.data[0]}</li>
            <li className={list}>{props.data[1]}</li>
            <li className={list}>{props.data[2]}</li>
            <li className={list}>{props.data[3]}</li>
            <li className={list}>{props.data[4]}</li>
          </ul>
          <p to='/cart' className="justify-self-end mr-8 rounded-md font-mono bg-slate-800 py-2 px-4 w-24 md:justify-self-end flex  justify-between items-center border border-transparent cursor-pointer text-center text-sm text-white transition-all tracking-tight mb-6 mt-4 md:col-span-2" onClick={()=>{
            if(localStorage.getItem('token')){
              navigate('/cart');
            }
            else{
              navigate('/login');
            }
          }}>
            Shop<FaCartShopping />
          </p>
        </div>
      </div>
    </>
  )
}

