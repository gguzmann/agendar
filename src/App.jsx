import { ColumnDays } from './components/ColumnDays'
import { ModalAgenda } from './components/ModalAgenda'

function App () {
  return (
    <>
      <ModalAgenda />
      <h1 className='text-center'>Agenda</h1>

      <div className='flex justify-between p-3 w-full '>
        <ColumnDays />
      </div>
    </>
  )
}

export default App
