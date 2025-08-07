import React from 'react'

const CompletedTask = () => {
  return (
    <div className='h-full w-[340px] p-5 bg-violet-400 rounded-xl flex-shrink-0'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-violet-600 text-sm py-1 mt-5 px-3 rounded'>Medium</h3>
                <h4 className=''>05-Aug-2025</h4>
            </div>
            <h2 className='text-2xl font-semibold mt-5'>Make A Youtube Video</h2>
            <p className='text-sm mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ad alias, molestias eos iste distinctio, cumque eligendi vero sapiente maiores tempore! Nobis, ratione in. Non adipisci cumque alias perferendis veritatis.</p>
            <button className='bg-green-500 px-2 py-1 text-sm mt-4'>Completed</button>
        </div>
  )
}

export default CompletedTask