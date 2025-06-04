import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserInfoCard = ({userId}:{userId:string}) => {
  return (
     <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
            {/* TOP */}
            <div className='flex justify-between items-center font-medium'>
                <span className='text-gray-500'>User Media</span>
                <Link href="/" className='text-blue-500 text-sm'>See all</Link>
            </div>
            {/* BOTTOM */}
            <div className='flex flex-col gap-4 text-gray-500'>
                <div className='flex items-center gap-2'>
                    <span className='text-xl text-black'>Berkay Ekebas</span>
                    <span className='text-sm'>@jossac</span>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque inventore amet suscipit ipsam reiciendis fugiat odit nam quia labore, omnis saepe eius eum ullam fuga provident sit possimus voluptatibus similique?</p>
                <div className='flex items-center gap-2'>
                    <Image src="/map.png" alt='' width={16} height={16}/>
                    <span>Living in <b>Seoul</b></span>
                </div>
                <div className='flex items-center gap-2'>
                    <Image src="/school.png" alt='' width={16} height={16}/>
                    <span>Went to <b>Kyungbok</b></span>
                </div><div className='flex items-center gap-2'>
                    <Image src="/work.png" alt='' width={16} height={16}/>
                    <span>Works at <b>Biomedista</b></span>
                </div>
                <div className='flex items-center justify-between'>
                    <div className=' flex gap-1 items-center'>
                        <Image src="/link.png" alt='' width={16} height={16}/>
                        <Link href="/" className='text-blue-500 font-medium'>duyurular.org</Link>
                    </div>
                    <div className='flex gap-1 items-center'>
                         <Image src="/date.png" alt='' width={16} height={16}/>
                         <span>Joined November 2024</span>
                    </div>
                </div>
                <button className='bg-blue-500 text-white text-sm rounded-md p-2'>Follow</button>
                <span className='text-red-400 self-end text-xs cursor-pointer'>Block User</span>
            </div>
        </div>
  )
}

export default UserInfoCard