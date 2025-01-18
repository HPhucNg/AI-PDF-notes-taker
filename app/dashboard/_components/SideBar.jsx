import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Layout } from 'lucide-react'

function SideBar() {
  return (
    <div className='shadow-md h-screen p-7'>
        <Image src={'/logo.svg'} alt='logo' width={80} height={80}/>
        <div className='mt-10'>
            <Button className="w-full">+ Upload PDF</Button>

            <div className='flex gap-2 items-center'>
                <Layout/>
                <h2>Workspace</h2>
            </div>
        </div>
    </div>
  )
}

export default SideBar