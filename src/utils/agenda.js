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

export const agenda = {
  horario: [
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
  ],
  agenda_semanal: [
    {
      day: 'lunes',
      active: false,
      horario: {
        hora_8: false,
        hora_9: true,
        hora_10: true,
        hora_11: true,
        hora_12: true,
        hora_13: false,
        hora_14: true,
        hora_15: true,
        hora_16: true,
        hora_17: true,
        hora_18: true,
        hora_19: true
      }
    },
    {
      day: 'martes',
      active: true,
      horario: {
        hora_8: true,
        hora_9: true,
        hora_10: true,
        hora_11: true,
        hora_12: true,
        hora_13: false,
        hora_14: true,
        hora_15: true,
        hora_16: true,
        hora_17: true,
        hora_18: true,
        hora_19: true,
        hora_20: true,
        hora_21: true,
        hora_22: true,
        hora_23: true,
        hora_24: true
      }
    },
    {
      day: 'miercoles',
      active: false,
      horario: {
        hora_8: true,
        hora_9: true,
        hora_10: true,
        hora_11: true,
        hora_12: true,
        hora_13: false,
        hora_14: true,
        hora_15: true,
        hora_16: true,
        hora_17: true,
        hora_18: true,
        hora_19: true
      }
    },
    {
      day: 'jueves',
      active: false,
      horario: {
        hora_8: true,
        hora_9: true,
        hora_10: true,
        hora_11: true,
        hora_12: true,
        hora_13: false,
        hora_14: true,
        hora_15: true,
        hora_16: true,
        hora_17: true,
        hora_18: true,
        hora_19: true
      }
    },
    {
      day: 'viernes',
      active: true,
      horario: {
        hora_8: true,
        hora_9: true,
        hora_18: true,
        hora_19: true
      }
    },
    {
      day: 'sabado',
      active: false,
      horario: {
        hora_8: true,
        hora_9: true,
        hora_10: true,
        hora_11: true,
        hora_12: true,
        hora_13: false,
        hora_14: true,
        hora_15: true,
        hora_16: true,
        hora_17: true,
        hora_18: true,
        hora_19: true
      }
    },
    {
      day: 'domingo',
      active: false,
      horario: {
        hora_8: false,
        hora_9: true,
        hora_10: true,
        hora_11: true,
        hora_12: true,
        hora_13: false,
        hora_14: true,
        hora_15: true,
        hora_16: true,
        hora_17: true,
        hora_18: true,
        hora_19: true
      }
    }
  ]
}
