import { useState } from 'react'

export const ModalAgenda = ({ open, setOpen, setContent, indexDay }) => {
  const [step, setStep] = useState(300)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
    if (e.target[0].value === '0') return false
    // if (e.target[0].value > e.target[1].value) {
    //   console.log('start tiene q ser menor a end')
    //   return false
    // }
    // const dateStart = e.target[1].value
    // const dateEnd = e.target[2].value
    const dateStart = '08:00'
    const dateEnd = '20:00'
    console.log(dateStart, dateEnd)

    const getDate = (value) => {
      const horaMinutos = value.split(':')
      const fechaActual = new Date()
      fechaActual.setHours(horaMinutos[0])
      fechaActual.setMinutes(horaMinutos[1] - 4)
      return fechaActual
    }
    const tiempo = e.target[0].value
    const start = getDate(dateStart)
    console.log('start:', start)
    const end = getDate(dateEnd) ?? new Date(new Date().setHours(21, 0, 0, 0))
    console.log(end)
    const arr = []
    console.log(e.target[0].value)
    const blocks = 1440 / e.target[0].value
    new Array(blocks).fill('').forEach((x, i) => {
      const hoy = new Date(new Date().setHours(0, 0, 0, 0))
      const newDate = new Date(hoy.setMinutes(hoy.getMinutes() + (i * e.target[0].value)))
      const hour = newDate.getHours().toString().padStart(2, '0')
      const minutes = newDate.getMinutes().toString().padStart(2, '0')
      // return `${hour}:${newDate.getMinutes()}`
      if (newDate > start && newDate < end) { arr.push({ time: `${hour}:${minutes}`, date: newDate, tiempo }) }
    })
    const newArr = setContent[0].map((x, i) => {
      if (x.dayNum === indexDay) {
        return { ...x, active: true, horario: arr, start, end, tiempo: e.target[0].value }
      }
      return x
    })
    setContent[1]([...newArr])
    console.log(arr)
    console.log(setContent[0])
    setOpen(false)
  }

  const handleChange = (e) => {
    const blocks = 1440 / e.target.value
    setStep(blocks)
  }

  const cerrar = (e) => {
    if (e.target.classList.contains('fonde')) {
      setOpen(false)
    }
  }
  return (
    <div onClick={cerrar} className={`fonde fixed top-0 left-0 z-50 w-full flex items-start justify-center bg-black bg-opacity-40 min-h-screen ${!open && 'hidden'}`}>
      <div onClick={() => console.log('modal')} className='relative z-[1050] bg-white max-w-sm w-full m-5 p-5'>
        <h1 className='text-center mb-2'>Day</h1>
        <hr />
        <form onSubmit={handleSubmit} className='p-5'>
          <div className='mb-2 flex justify-between'>
            Time Block
            <select className='rounded border px-2' name='' id='' onChange={handleChange}>
              <option value='0'>Select Time Block</option>
              <option value='15'>15 min</option>
              <option value='30'>30 min</option>
              {/* <option value='45'>45 min</option> */}
              <option value='60'>1 hour</option>
              <option value='120'>2 hour</option>

            </select>
          </div>
          {/* <div className='mb-2 flex justify-between'>
            Time Start:

            <input onChange={(e) => console.log(e.target.value)} className='rounded border px-2' type='time' name='' id='' />
          </div>
          <div className='mb-2 flex justify-between'>
            Time End:
            <input className='rounded border px-2' type='time' name='' id='' />
          </div> */}
          <div className='text-center mt-5'>
            <button className='border px-2 bg-sky-200 rounded'>Open Day</button>
          </div>
        </form>
      </div>
    </div>
  )
}
