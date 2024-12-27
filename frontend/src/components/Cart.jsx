import React, { useState,useContext } from 'react'
import CartContext from '../context/CartContext.js';
import { useNavigate } from 'react-router-dom';
import ConfirmBox from './ConfirmBox';

export default function Cart() {
  const context=useContext(CartContext);
  const navigate=useNavigate();
    const {info,setInfo,addCart}=context;
    const [error,setError]=useState(false);
    const [view,setView]=useState(false);
    

  return (
    <>
      <section
        className=" relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
          <div className="grid grid-cols-12">
            <div
              className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
              <div className="flex items-center justify-between pb-8 border-b border-gray-300">
                <h2 className="font-manrope font-bold text-3xl leading-10 text-black">Shopping Cart</h2>
                <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">4 Items</h2>
              </div>
              <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
                <div className="col-span-12 md:col-span-7">
                  <p className="font-normal text-lg leading-8 text-gray-400">Product Details</p>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <div className="grid grid-cols-5">
                    <div className="col-span-3">
                      <p className="font-normal text-lg leading-8 text-gray-400 text-center">Quantity</p>
                    </div>
                    <div className="col-span-2">
                      <p className="font-normal text-lg leading-8 text-gray-400 text-center">Total</p>
                    </div>
                  </div>
                </div>
              </div>
              
              
              
              <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                <div className="w-full md:max-w-[126px]">
                  <img src="https://m.media-amazon.com/images/I/7196ULyJnaL._AC_UF1000,1000_QL80_.jpg" alt="paper bag"
                    className="mx-auto rounded-xl object-cover" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                  <div className="md:col-span-2">
                    <div className="flex flex-col max-[500px]:items-center gap-3">
                      <h6 className="font-semibold text-base leading-7 text-black">Paper Bags</h6>
                      <h6 className="font-normal text-base leading-7 text-gray-500">Paper Packaging</h6>
                      <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">₹220.00/Kg</h6>
                    </div>
                  </div>
                  <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                    <div className="flex items-center h-full">
                      <button
                        className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300" onClick={()=>{
                            if(info.count1>0 && info.price1>0){
                         setInfo({...info,price1:info.price1-220,count1:info.count1-1})
                        }}}>
                        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                          xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                          viewBox="0 0 22 22" fill="none">
                          <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6"
                            strokeLinecap="round" />
                          <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                            strokeLinecap="round" />
                          <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                            strokeLinecap="round" />
                        </svg>
                      </button>
                      <input type="text"
                        className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                        value={info.count1} />
                      <button
                        className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300" onClick={()=>{setInfo({...info,price1:info.price1+220,count1:info.count1+1})}}>
                        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                          xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                          viewBox="0 0 22 22" fill="none">
                          <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeWidth="1.6"
                            strokeLinecap="round" />
                          <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2"
                            strokeWidth="1.6" strokeLinecap="round" />
                          <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2"
                            strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                    <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">₹{info.price1}</p>
                  </div>
                </div>
              </div>
              
              
              
              <div
                className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                <div className="w-full md:max-w-[126px]">
                  <img src="https://www.upack.in/media/catalog/product/cache/434b5723752bfe2768a169417576f99a/p/a/paperwrap1.jpg" alt="paper bag"
                    className="mx-auto rounded-xl object-cover" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                  <div className="md:col-span-2">
                    <div className="flex flex-col max-[500px]:items-center gap-3">
                      <h6 className="font-semibold text-base leading-7 text-black">Honeycomb wrap</h6>
                      <h6 className="font-normal text-base leading-7 text-gray-500">Filler material</h6>
                      <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">₹450.00/Kg</h6>
                    </div>
                  </div>
                  <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                    <div className="flex items-center h-full">
                      <button
                        className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300" onClick={()=>{
                          if(info.count2>0 && info.price2>0){
                       setInfo({...info,price2:info.price2-450,count2:info.count2-1})
                      }}}>
                        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                          xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                          viewBox="0 0 22 22" fill="none">
                          <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6"
                            strokeLinecap="round" />
                          <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                            strokeLinecap="round" />
                          <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                            strokeLinecap="round" />
                        </svg>
                      </button>
                      <input type="text"
                        className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                        value={info.count2} />
                      <button
                        className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300" onClick={()=>{setInfo({...info,price2:info.price2+450,count2:info.count2+1})}}>
                        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                          xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                          viewBox="0 0 22 22" fill="none">
                          <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeWidth="1.6"
                            strokeLinecap="round" />
                          <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2"
                            strokeWidth="1.6" strokeLinecap="round" />
                          <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2"
                            strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                    <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">₹{info.price2}</p>
                  </div>
                </div>
              </div>
              
              

              <div
                className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                <div className="w-full md:max-w-[126px]">
                  <img src="https://m.media-amazon.com/images/I/61-lEkrh5VL.jpg" alt="paper tag"
                    className="mx-auto rounded-xl object-cover" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                  <div className="md:col-span-2">
                    <div className="flex flex-col max-[500px]:items-center gap-3">
                      <h6 className="font-semibold text-base leading-7 text-black">Adhesive paper-tapes</h6>
                      <h6 className="font-normal text-base leading-7 text-gray-500">Accessories</h6>
                      <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">₹120.00/Pc</h6>
                    </div>
                  </div>
                  <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                    <div className="flex items-center h-full">
                      <button
                        className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300" onClick={()=>{
                          if(info.count3>0 && info.price3>0){
                       setInfo({...info,price3:info.price3-120,count3:info.count3-1})
                      }}}>
                        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                          xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                          viewBox="0 0 22 22" fill="none">
                          <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6"
                            strokeLinecap="round" />
                          <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                            strokeLinecap="round" />
                          <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                            strokeLinecap="round" />
                        </svg>
                      </button>
                      <input type="text"
                        className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                        value={info.count3} />
                      <button
                        className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300" onClick={()=>{setInfo({...info,price3:info.price3+120,count3:info.count3+1})}}>
                        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                          xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                          viewBox="0 0 22 22" fill="none">
                          <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeWidth="1.6"
                            strokeLinecap="round" />
                          <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2"
                            strokeWidth="1.6" strokeLinecap="round" />
                          <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2"
                            strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                    <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">₹{info.price3}</p>
                  </div>
                </div>
              </div>



              
              <div
                className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                <div className="w-full md:max-w-[126px]">
                  <img src="https://image.made-in-china.com/202f0j00ywNVjnPtSHgb/Food-Grade-Disposable-Kraft-Paper-Salad-Bowl-Takeaway-Food-Packaging-From-China.jpg" alt="Food packaging"
                    className="mx-auto rounded-xl object-cover" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                  <div className="md:col-span-2">
                    <div className="flex flex-col max-[500px]:items-center gap-3">
                      <h6 className="font-semibold text-base leading-7 text-black">Food-grade Paper-package</h6>
                      <h6 className="font-normal text-base leading-7 text-gray-500">Food packaging</h6>
                      <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">₹250.00/Pack</h6>
                    </div>
                  </div>
                  <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                    <div className="flex items-center h-full">
                      <button
                        className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300" onClick={()=>{
                          if(info.count4>0 && info.price4>0){
                       setInfo({...info,price4:info.price4-250,count4:info.count4-1})
                      }}}>
                        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                          xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                          viewBox="0 0 22 22" fill="none">
                          <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6"
                            strokeLinecap="round" />
                          <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                            strokeLinecap="round" />
                          <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                            strokeLinecap="round" />
                        </svg>
                      </button>
                      <input type="text"
                        className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                        value={info.count4} />
                      <button
                        className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300" onClick={()=>{setInfo({...info,price4:info.price4+250,count4:info.count4+1})}}>
                        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                          xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                          viewBox="0 0 22 22" fill="none">
                          <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeWidth="1.6"
                            strokeLinecap="round" />
                          <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2"
                            strokeWidth="1.6" strokeLinecap="round" />
                          <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2"
                            strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                    <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">₹{info.price4}</p>
                  </div>
                </div>
              </div>


              
            </div>
            <div
              className=" col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
              <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
                Order Summary</h2>
              <div className="mt-8">
                <div className="flex items-center justify-between pb-6">
                  <p className="font-normal text-lg leading-8 text-black">{(info.count1)+(info.count2)+(info.count3)+(info.count4)} Items</p>
                  <p className="font-medium text-lg leading-8 text-black">₹{(info.price1)+(info.price2)+(info.price3)+(info.price4)}</p>
                </div>
                
                <label className="flex items-center mb-1.5 text-gray-400 text-sm font-medium">Address
                  </label>
                  <div className="flex pb-4 w-full">
                    <div className="relative w-full ">
                      <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300">

                      </div>
                      <input type="text"
                        className="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                        placeholder="Enter Your address" />
                      
                      
                    </div>
                  </div>
                  <label className="flex items-center mb-1.5 text-gray-400 text-sm font-medium">Promo Code
                  </label>
                  <div className="flex pb-4 w-full">
                    <div className="relative w-full ">
                      <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300">

                      </div>
                      <input type="text"
                        className="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                        placeholder="xxxx xxxx xxxx" />
                      
                      
                    </div>
                  </div>
                  <div className="flex items-center border-b border-gray-200">
                    <button
                      className="rounded-lg w-full bg-black py-2.5 px-4 text-white text-sm font-semibold text-center mb-8 transition-all duration-500 hover:bg-black/80">Apply</button>
                  </div>
                  
                  <div className="flex items-center justify-between py-8">
                    <p className="font-medium text-xl leading-8 text-black">{info.count1+info.count2+info.count3+info.count4} Items</p>
                    <p className="font-semibold text-xl leading-8 text-indigo-600">₹{info.price1+info.price2+info.price3+info.price4}</p>
                    
                  </div>
                     {error && <p className='text-red-700 mb-1'>Please select atleast one item</p>} 
                  <button
                    className="w-full text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700" onClick={()=>{
                      if((info.count1+info.count2+info.count3+info.count4)!==0){
                        setError(false);
                        addCart(info.count1,info.count2,info.count3,info.count4);
                        
                        setInfo({price1:0,count1:0,price2:0,count2:0,price3:0,count3:0,price4:0,count4:0});
                        setView(true);
                        
                      }
                      else{
                          setError(true);
                      }
                      
                    }}>Checkout</button>
                
              </div>
            </div>
          </div>
        </div>
      </section>
        {view && <ConfirmBox onclose={()=>setView(false)}/>}
    </>
  )
}
