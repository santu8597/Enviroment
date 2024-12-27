import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
export default function ConfirmBox({onclose}) {
   
    const navigate=useNavigate();
    const modal=useRef(1);
    
    const outClick=(e)=>{
        if(modal.current!==(e.target)){
            onclose();
        }
    }
  return (
    <>
      
      <div className="overflow-y-auto overflow-x-hidden flex fixed top-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-opacity-30 backdrop-blur-sm" onClick={outClick}>
    <div className="relative p-4 w-full max-w-md max-h-full">
        <motion.div className="relative bg-white rounded-lg shadow dark:bg-gray-700" ref={modal}
         initial={{opacity:0,scale:0}}
         animate={{opacity:1,scale:1}}
         transition={{
               duration:"0.2"
           }}
        >
            <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal" onClick={onclose}>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                
            </button>
            <div className="p-4 md:p-5 text-center">
                <svg fill="#3ddb6d"  className="ml-36 mb-3" height="80px" width="80px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490.05 490.05" xml:space="preserve" stroke="#3ddb6d"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M418.275,418.275c95.7-95.7,95.7-250.8,0-346.5s-250.8-95.7-346.5,0s-95.7,250.8,0,346.5S322.675,513.975,418.275,418.275 z M157.175,207.575l55.1,55.1l120.7-120.6l42.7,42.7l-120.6,120.6l-42.8,42.7l-42.7-42.7l-55.1-55.1L157.175,207.575z"></path> </g> </g> </g></svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Your Order has been Succesfully Placed</h3>
                <button data-modal-hide="popup-modal" type="button" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center" onClick={()=>{
                    navigate('/');
                    
                }}>
                    Back to home
                </button>
                <button data-modal-hide="popup-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={()=>{
                    onclose();
                    
                }}>Back to Shop</button>
            </div>
        </motion.div>
    </div>
</div>

    </>
  )
}
