'use client'

import { createDocument } from '@/lib/actions/room.actions'
import { Button } from './ui/button'
import Image from 'next/image' 

function AddDocumentButton({ userId, email }: AddDocumentBtnProps) {
  
    const router = useRouter();
  
    const addDocumentHandler = async () => {

    try {
        const room = await createDocument({userId, email});

        if(room) router.push(`/documents/${room.id}`)
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <Button
      type="button"
      onClick={addDocumentHandler}
      className="bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-2 px-5 py-2 rounded-lg shadow-md transition-colors"
    >
     <Image
     src="/assets/icons/add.svg"
     alt="add"
     width={24}
     height={24}
     />
      <span className="hidden sm:inline">Add Document</span>
    </Button>
  )
}
import { useRouter } from 'next/navigation'

export default AddDocumentButton
