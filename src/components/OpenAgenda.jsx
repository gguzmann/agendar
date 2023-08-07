import { useState } from 'react'
import { ModalAgenda } from './ModalAgenda'

export const OpenAgenda = ({ setContent, indexDay, day }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className='border h-[720px] flex justify-center items-center'>
        <button onClick={() => setOpen(true)} className='border-2 border-gray-400 px-2 rounded bg-gray-200 hover:bg-opacity-50'>Abrir agenda</button>
      </div>
      <ModalAgenda open={open} setOpen={setOpen} setContent={setContent} indexDay={indexDay} day={day} />
    </>
  )
}
