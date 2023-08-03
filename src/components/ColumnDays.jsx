import { useEffect, useState } from 'react'
import { agenda, fixedSemana, horario, weekday } from '../utils/agenda'
import { Day } from './Day'
import { getAgenda } from '../firebase'

export const ColumnDays = () => {
  const [content, setContent] = useState([])
  // const [content, setContent] = useState([])
  useEffect(() => {
    getAgenda().then(x => {
      console.log('asdasd', x)
      setContent(x)
    })
    console.log('agenda:', [agenda.agenda_semanal])
  }, [])
  return (
    <>
      <div className='min-w-[80px] text-center'>
        <div className='p-2 mb-1 bg-black text-white'>Hora</div>
        <div className='text-white'>Hora</div>

        <div className='h-full flex flex-col overflow-scroll'>
          {
            horario.map((x, i) => (
              <div className={`min-h-[60px] rounded flex justify-center items-center ${i % 2 === 0 ? 'bg-gray-200' : 'bg-gray-300'}`} key={i}>
                {x}
              </div>
            ))
          }
        </div>
      </div>
      {
      content.length > 0 &&
      fixedSemana().map((dia, i) => (
        <div key={i} className='w-full text-center'>
          <div className='p-2 bg-black text-white capitalize'>{weekday[dia.getDay()]}</div>
          <div className='text-white'>{new Intl.DateTimeFormat('es').format(dia)}</div>
          <Day dia={dia} indexDay={i} agenda={content} setContent={[content, setContent]} />
        </div>
      ))
}
    </>
  )
}
