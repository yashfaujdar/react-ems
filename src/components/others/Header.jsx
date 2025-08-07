import React from 'react'

const Header = ({data}) => {
    
    return (
        <div className='flex items-end justify-between px-11 py-7'>
            <h1 className='text-2xl font-bold'>Hii <br /> <span className='text-4xl font-bold'>{data?.firstName} 👋</span></h1>
            <div className='flex items-center gap-5'>
                <button className='bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 text-white px-4 py-2 rounded-md'>Logout</button>
            </div>
        </div>
    )
}
export default Header