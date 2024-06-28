'use client'
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
    const [isOpen, setOpen] = useState(false)
    function handleClick() {
        setOpen(!isOpen)
    }
    return (
        <div className="absolute z-50 ">
            <div className="max-w-screen-xl w-screen sm:w-auto h-10 left-[50%] translate-x-[-50%] rounded-lg backdrop-blur-sm fixed my-5 flex gap-4 justify-between items-center px-4">
                <div className="font-semibold text-xl mr-8">logo</div>
                <div className="px-2 py-1 rounded-lg transition delay-150 hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 duration-300 hidden md:inline">Products</div>
                <div className="px-2 py-1 rounded-lg transition delay-150 hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 duration-300 hidden md:inline">Method</div>
                <div className="px-2 py-1 rounded-lg transition delay-150 hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 duration-300 hidden md:inline">Customers</div>
                <div className="px-2 py-1 rounded-lg transition delay-150 hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 duration-300 hidden md:inline">Company</div>
                <div className="px-2 py-1 rounded-lg transition delay-150 hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 duration-300 hidden md:inline">Contact</div>
                <button className="bg-gray-800 text-white px-2 py-1 w-20 rounded-lg hover:bg-gray-800/80 hidden sm:inline">Log in</button>
                <button className="bg-white text-gray-800 px-2 py-1 w-20 rounded-lg hover:bg-white/80 hidden sm:inline">Sign up</button>
                {!isOpen &&
                    <Menu className="inline sm:hidden" onClick={handleClick}></Menu>
                }
                {isOpen && <X className="inline sm:hidden" onClick={handleClick}></X>}
            </div>
            {isOpen && <div className=" backdrop-blur-md text-white relative w-screen top-16 pl-5 py-4 z-50">
                <ul className="flex flex-col gap-2">
                    <li className=" ">Products</li>
                    <li className=" ">Method</li>
                    <li className=" ">Customers</li>
                    <li className=" ">Company</li>
                    <li className=" ">Contact</li>
                </ul>
                <div className="flex flex-wrap justify-center gap-2 my-3">
                <button className="bg-white text-black  px-2 py-1  w-[95%] sm:w-[40%] rounded-lg hover:bg-white/80 ">Sign up</button>
                <button className="bg-black bg-opacity-30 text-white  px-2 py-1  w-[95%]  sm:w-[40%] rounded-lg hover:bg-gray-800/80 ">Log in</button>
                    </div>
            </div>}

        </div>
    )
}