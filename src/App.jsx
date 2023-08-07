import { ColumnDays } from './components/ColumnDays'

function App () {
  console.log(new Date())
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  return (
    <div className='min-h-screen'>
      <div className='flex justify-center '>
        {monthNames[new Date().getMonth()]}
      </div>
      <div className='flex justify-between p-3 w-full'>
        <ColumnDays />
      </div>
    </div>
  )
}

export default App
