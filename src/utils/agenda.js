export const fixedSemana = () => {
  const arr = []
  for (let i = 0; i < 7; i++) {
    const hoy = new Date()
    arr.push(hoy.setDate(hoy.getDate() + i))
  }
  return arr.map(x => new Date(x))
}

export const weekday = [
  'domingo',
  'lunes',
  'martes',
  'miercoles',
  'jueves',
  'viernes',
  'sabado'
]
export const horario = [
  '8-9',
  '9-10',
  '10-11',
  '11-12',
  '12-13',
  '13-14',
  '14-15',
  '15-16',
  '16-17',
  '17-18',
  '18-19',
  '19-20'
]
export const agenda = {
  agenda_semanal: [
    {
      day: 'domingo',
      dayNum: 0,
      active: false,
      horario: {

      }
    },
    {
      day: 'lunes',
      dayNum: 1,
      active: false,
      horario: {

      }
    },
    {
      day: 'martes',
      dayNum: 2,
      active: false,
      horario: {

      }
    },
    {
      day: 'miercoles',
      dayNum: 3,
      active: false,
      horario: {

      }
    },
    {
      day: 'jueves',
      dayNum: 4,
      active: false,
      horario: {

      }
    },
    {
      day: 'viernes',
      dayNum: 5,
      active: false,
      horario: {

      }
    },
    {
      day: 'sabado',
      dayNum: 6,
      active: false,
      horario: {

      }
    }
  ]
}
