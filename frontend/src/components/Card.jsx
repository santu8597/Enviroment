import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {
   
    return (
        <>
            <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg md:w-80 min-w-[calc(100%-2rem)] md:min-w-64 ml-2 md:ml-0">
                <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md shadow-md">
                    <img src={props.img} alt="card-image" />
                </div>
                <div className="p-4">
                    <h6 className="mb-1 text-slate-800 text-xl font-mono">
                        {props.title}
                    </h6>
                    <div className="dash w-full h-[0.1rem] mt-1 mb-2 bg-zinc-500"></div>
                    <p className="text-slate-600 leading-normal font-light">
                        {props.description}
                    </p>
                </div>
                <div className="px-4 pb-4 pt-0 mt-2">
                    <Link to={props.link} className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all " type="button">
                        Read more
                    </Link>
                </div>
            </div>
        </>
    )
}
