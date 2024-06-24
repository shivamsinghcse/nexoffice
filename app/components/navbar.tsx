export function Navbar(){
    return(
        <div className="max-w-screen-xl h-10 left-[50%] translate-x-[-50%] rounded-lg backdrop-blur-sm fixed my-5 flex gap-4 justify-between items-center px-4">
        <div className="font-semibold text-xl mr-8">logo</div>
        <div className="px-2 py-1 rounded-lg hover:bg-gray-800">Products</div>
        <div className="px-2 py-1 rounded-lg hover:bg-gray-800">Method</div>
        <div className="px-2 py-1 rounded-lg hover:bg-gray-800">Customers</div>
        <div className="px-2 py-1 rounded-lg hover:bg-gray-800">Company</div>
        <div className="px-2 py-1 rounded-lg hover:bg-gray-800">Contact</div>
            <button className="bg-gray-800 text-white px-2 py-1 w-20 rounded-lg hover:bg-gray-800/80">Log in</button>
            <button className="bg-white text-gray-800 px-2 py-1 w-20 rounded-lg hover:bg-white/80">Sign up</button>
    </div>
    )
}