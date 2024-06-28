import { ArrowRight } from "lucide-react";
import { Navbar } from "../components/navbar";
import Image from "next/image";
import img1 from "@/public/futurism-perspective-digital-nomads-lifestyle.jpg"

export default function Signin(){
    return(
        <div className="bg-gradient-to-r from-slate-900 to-slate-700">
        <Navbar></Navbar>
        
        <div className="w-screen flex absolute top-[20%] justify-evenly">
            <div><Image src={img1} alt={"Future us"} className="w-[400px] aspect-square object-cover hover:scale-110 transition duration-300 rounded-xl"></Image></div>
            <div className="w-[400px]">
                <h2 className="text-center text-2xl font-bold">Sign In</h2>
                <form  className="mt-8">
                    <div className="space-y-5">
       
                        <div>
                            <label htmlFor="" className="text-base font-medium text-gray-900 dark:text-white">
                                {' '}
                                Email address{' '}
                            </label>
                            <div className="mt-2">
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="email"
                                    placeholder="Email"
                                ></input>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="" className="text-base font-medium text-gray-900 dark:text-white">
                                    {' '}
                                    Password{' '}
                                </label>
                                <a
                                    href="#"
                                    title=""
                                    className="text-sm font-semibold text-black dark:text-white hover:underline"
                                >
                                    {' '}
                                    Forgot password?{' '}
                                </a>
                            </div>
                            <div className="mt-2">
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="password"
                                    placeholder="Password"
                                ></input>
                            </div>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="inline-flex w-full items-center justify-center rounded-md bg-zinc-800 opacity px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-zinc-800/80"
                            >
                                Get started <ArrowRight className="ml-2" size={16} />
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
    )
}