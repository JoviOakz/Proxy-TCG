export function Navbar() {
    return (
        <header className='w-full px-8 py-4 flex items-center justify-between bg-transparent absolute top-0 left-0 z-10'>
            <div className='flex items-center gap-8'>
                <h1 className='text-xl font-black tracking-widest text-white cursor-pointer'>
                    PROXYMTG
                </h1>

                <nav className='flex gap-6 text-sm font-medium text-gray-300'>
                    <a href='#' className='hover:text-white transition-colors'>Home</a>
                    <a href='#' className='hover:text-white transition-colors'>Explore</a>
                    <a href='#' className='hover:text-white transition-colors'>Help</a>
                </nav>
            </div>

            <div className='flex items-center gap-6 text-sm font-medium text-gray-300'>
                <button className='hover:text-white transition-colors'>Sign in</button>
                <button className='hover:text-white transition-colors'>Register</button>
            </div>
        </header>
    )
}

export default Navbar