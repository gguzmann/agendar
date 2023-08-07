import { useEffect, useState } from 'react'
import { agenda, fixedSemana, horario, weekday } from '../utils/agenda'
import { Day } from './Day'
import { getAgenda, saveAgenda } from '../firebase'

export const ColumnDays = () => {
  const [content, setContent] = useState([])
  useEffect(() => {
    getAgenda().then(x => {
      console.log('asdasd', x)
      setContent(x)
    })
    console.log('agenda:', [agenda.agenda_semanal])
  }, [])

  const resetHandler = () => {
    setContent([...agenda.agenda_semanal])
    saveAgenda({ test: agenda.agenda_semanal })
  }

  return (
    <>
      <button className='fixed bottom-10 right-10 px-5 py-3 w-[50px] bg-green-400 rounded-full hover:bg-opacity-40' onClick={resetHandler}>R</button>
      <div className='min-w-[80px] text-center'>
        <div className='p-2 mb-1 bg-black text-white'>
          Hora
        </div>
        <div className='text-white'>Hora</div>

        <div className='h-full flex flex-col'>
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
          <div className='p-2 bg-black text-white capitalize'>{weekday[dia.getDay()]} {dia.getDate()}</div>
          <div className='text-white'>{new Intl.DateTimeFormat('es').format(dia)}</div>
          <Day dia={dia} indexDay={i} agenda={content} setContent={[content, setContent]} />
        </div>
      ))
}
    </>
  )
}
