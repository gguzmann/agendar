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
  '8 am',
  '9 am',
  '10 am',
  '11 am',
  '12 pm',
  '13 pm',
  '14 pm',
  '15 pm',
  '16 pm',
  '17 pm',
  '18 pm',
  '19 pm'
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
