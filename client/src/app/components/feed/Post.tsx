import Image from 'next/image'
import React from 'react'
import Comments from './Comments'

const Post = () => {
    return (
        <div className='flex flex-col gap-4'>
            {/* USER */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <Image src='https://images.pexels.com/photos/31829776/pexels-photo-31829776/free-photo-of-canli-bahar-bahcesinde-yalniz-sari-lale.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                        width={40}
                        height={40}
                        className='w-10 h-10 rounded-full' />
                    <span className='font-medium'>Hasan Mutlu</span>
                </div>
                <Image src='/more.png'
                    alt=''
                    width={16}
                    height={16} />
            </div>
            {/* DESC */}
            <div className='flex flex-col gap-4'>
                <div className='w-full min-h-96 relative'>
                    <Image src='https://images.pexels.com/photos/29213973/pexels-photo-29213973/free-photo-of-sisli-sabah-manzarasiyla-pitoresk-koy.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                        fill
                        className='object-cover rounded-md' />
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem excepturi ducimus quisquam earum, totam itaque voluptatibus natus porro. Sequi possimus nihil distinctio. Minima in veritatis quidem mollitia inventore! Ducimus, aut?</p>
            </div>
            {/* INTERACTION */}
            <div className='flex items-center justify-between text-sm my-4'>
                <div className='flex gap-8'>
                    <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                        <Image src='/like.png'
                            alt=''
                            width={16}
                            height={16}
                            className='cursor-pointer' />
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-500'>123 <span className='hidden md:inline'> Likes</span></span>
                    </div>
                    <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                        <Image src='/comment.png'
                            alt=''
                            width={16}
                            height={16}
                            className='cursor-pointer' />
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-500'>123 <span className='hidden md:inline'> Comments</span></span>
                    </div>
                </div>
                <div className=''>
                    <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                        <Image src='/share.png'
                            alt=''
                            width={16}
                            height={16}
                            className='cursor-pointer' />
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-500'>123 <span className='hidden md:inline'> Shares</span></span>
                    </div>
                </div>
            </div>
            <Comments/>
        </div>
    )
}

export default Post