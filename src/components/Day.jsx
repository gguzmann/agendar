import { useEffect, useState } from 'react'
import { weekday } from '../utils/agenda'
import { OpenAgenda } from './OpenAgenda'

export const Day = ({ dia, agenda, indexDay, setContent }) => {
  const [test, setTest] = useState(20)
  useEffect(() => {
    setTest(setContent[0][dia.getDay()].tiempo)
  }, [dia])
  const handleClick = (ind) => {
    console.log(agenda[dia.getDay()].horario[ind])
    const newArr = setContent[0][dia.getDay()].horario.map((x, i) => {
      if (i === ind) {
        return { ...x, active: true }
      }
      return x
    })
    setContent[1](setContent[0].map((a, b) => {
      if (a.dayNum === dia.getDay()) {
        return { ...a, horario: newArr }
      }
      return a
    }))
  }

  return (
    <div className='h-[720px] bg-gray-200 border-1 border-black flex flex-col m-1'>
      {agenda.length > 0 &&
                agenda.find(x => x.day.includes(weekday[dia.getDay()])).active
        ? Object.values(agenda.find(x => x.day.includes(weekday[dia.getDay()])).horario).map((x, a) => (
          <div
            onClick={() => handleClick(a)}
            key={a} className={`overflow-hidden w-full border h-[${test}px] min-h-[${test}px] h-[${test}px] max-h-[${test}px]`}
          >
            <div className={`hover:bg-opacity-40 w-full h-full flex justify-center items-center ${x.active ? 'bg-blue-400' : 'bg-gray-300'} rounded cursor-pointer`}>
              {x ? '\u00A0' : '\u00A0'}
            </div>
          </div>
        ))
        : <OpenAgenda setContent={setContent} indexDay={dia.getDay()} />}
    </div>
  )
}
