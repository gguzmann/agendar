import { agenda, weekday } from '../utils/agenda'
import { OpenAgenda } from './OpenAgenda'

export const Day = ({ dia }) => {
  return (
    <div className='h-[550px] bg-red-200 flex flex-col'>
      {
                agenda.agenda_semanal.find(x => x.day.includes(weekday[dia.getDay()])).active
                  ? Object.values(agenda.agenda_semanal.find(x => x.day.includes(weekday[dia.getDay()])).horario).map((x, a) => (
                    <div
                      key={a} className={`overflow-hidden py-2 w-full border h-full border-black my-1 hover:bg-opacity-20 ${
                  x ? 'bg-green-200 cursor-pointer' : 'bg-red-200'
                }`}
                    >
                      {x ? agenda.horario[a] : '\u00A0'}
                    </div>
                  ))
                  : <OpenAgenda />
}
    </div>
  )
}
