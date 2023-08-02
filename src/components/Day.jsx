import { weekday } from '../utils/agenda'
import { OpenAgenda } from './OpenAgenda'

export const Day = ({ dia, agenda, indexDay, setContent }) => {
  const handleClick = (ind) => {
    console.log(agenda[dia.getDay()].horario[ind])
    const newArr = setContent[0][dia.getDay()].horario.map((x, i) => {
      if (i === ind) {
        return { ...x, active: 0 }
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

  const handleRightClick = (ind) => {
    event.preventDefault()
    console.log('asd')
    const newArr = setContent[0][dia.getDay()].horario.map((x, i) => {
      if (i === ind) {
        return { ...x, active: 1 }
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
    <div className='h-[720px] bg-gray-200  border-black flex flex-col overflow-hidden m-1'>
      {agenda.length > 0 &&
                agenda.find(x => x.day.includes(weekday[dia.getDay()])).active
        ? Object.values(agenda.find(x => x.day.includes(weekday[dia.getDay()])).horario).map((x, a) => (
          <div
            onClick={() => handleClick(a)}
            onContextMenu={() => handleRightClick(a)}
            key={a} className={`overflow-hidden w-full border h-full min-h-[${setContent[0][dia.getDay()].tiempo}px] max-h-[${setContent[0][dia.getDay()].tiempo}px]`}
          >
            <div className={`hover:bg-opacity-40 w-full h-full flex justify-center items-center 
            ${x.active === 2 && 'bg-gray-300'}
            ${x.active === 1 && 'bg-red-400'}
            ${x.active === 0 && 'bg-blue-400'}
               rounded cursor-pointer`}
            >
              {x ? '\u00A0' : '\u00A0'}
            </div>
          </div>
        ))
        : <OpenAgenda setContent={setContent} indexDay={dia.getDay()} />}
    </div>
  )
}
