import { fixedSemana, weekday } from '../utils/agenda'
import { Day } from './Day'

export const ColumnDays = () => {
  return (
    <>
      {fixedSemana().map((dia, i) => (
        <div key={i} className='w-full text-center m-1'>
          {weekday[dia.getDay()]}
          <br />
          {new Intl.DateTimeFormat('es').format(dia)}
          <Day dia={dia} />
        </div>
      ))}
    </>
  )
}
