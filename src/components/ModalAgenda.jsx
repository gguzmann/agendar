import { useState } from 'react'

export const ModalAgenda = () => {
  const [step, setStep] = useState(300)
  const [inputs, setInputs] = useState(true)
  const [times, setTimes] = useState(['', ''])
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
    // if (e.target[0].value > e.target[1].value) {
    //   console.log('start tiene q ser menor a end')
    //   return false
    // }

    const blocks = 1440 / e.target[2].value
    const arr = new Array(blocks).fill('').map((x, i) => {
      const hoy = new Date(new Date().setHours(0, 0, 0, 0))
      const newDate = new Date(hoy.setMinutes(hoy.getMinutes() + (i * e.target[2].value)))
      const hour = newDate.getHours().padStart(2, '0')
      return `${hour}:${newDate.getMinutes()}`
    })

    console.log(arr)
  }

  const handleChange = (e) => {
    const blocks = 1440 / e.target.value
    const arr = new Array(blocks).fill('').map((x, i) => {
      const hoy = new Date(new Date().setHours(0, 0, 0, 0))
      const newDate = new Date(hoy.setMinutes(hoy.getMinutes() + (i * e.target[2].value)))
      const hour = newDate.getHours().toString().padStart(2, '0')
      return `${hour}:${newDate.getMinutes()}`
    })

    setTimes([...arr])
  }
  return (
    <div className='fixed z-[999] w-full flex items-start justify-center bg-black bg-opacity-40 min-h-screen'>
      <div className='bg-white max-w-sm w-full m-5 p-5'>
        <h1 className='text-center mb-2'>Day</h1>
        <hr />
        <form onSubmit={handleSubmit} className='p-5'>
          <div className='mb-2 flex justify-between'>
            Time Block
            <select className='rounded border px-2' name='' id='' onChange={handleChange}>
              <option value='0'>Select Time Block</option>
              <option value='15'>15 min</option>
              <option value='30'>30 min</option>
              <option value='45'>45 min</option>
              <option value='60'>1 hour</option>

            </select>
          </div>
          {
            inputs &&
              <>
                <div className='mb-2 flex justify-between'>
                  Time Start:
                  <select name='' id=''>
                    {
                      times.map((x, i) => <option key={i} value='120'>{x}</option>)
                    }
                  </select>
                  {/* <input className='rounded border px-2' type='time' step={step} name='' id='' /> */}
                </div>
                <div className='mb-2 flex justify-between'>
                  Time End:
                  <input className='rounded border px-2' type='time' step={step} name='' id='' />
                </div>
              </>
          }
          <div className='text-center mt-5'>
            <button className='border px-2 bg-sky-200 rounded'>Open Day</button>
          </div>
        </form>
      </div>
    </div>
  )
}
