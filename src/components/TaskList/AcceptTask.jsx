import React from 'react'

const AcceptTask = () => {
  return (
    <div className='h-full w-[340px] p-5 bg-red-400 rounded-xl flex-shrink-0'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm py-1 mt-5 px-3 rounded'>High</h3>
                <h4 className=''>05-Aug-2025</h4>

            </div>
            <h2 className='text-2xl font-semibold mt-5'>Make A Youtube Video</h2>
            <p className='text-sm mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ad alias, molestias eos iste distinctio, cumque eligendi vero sapiente maiores tempore! Nobis, ratione in. Non adipisci cumque alias perferendis veritatis.</p>
            <div className='flex justify-between mt-5'>
                <button className='bg-green-500 px-2 py-1 text-sm'>Mark as Completed</button>
                <button className='bg-red-500 px-2 py-1 text-sm'>Mark as Failed</button>
            </div>
            
        </div>
  )
}

export default AcceptTask