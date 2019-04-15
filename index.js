const express = require('express')
const cors = require('cors')
const app = express()

const port = 8000

app.use(cors())

const events = [
  { id: 1, name: '100m' },
  { id: 2, name: 'Long Jump' },
  { id: 3, name: 'Shot Put' },
  { id: 4, name: 'High Jump' },
  { id: 5, name: '400m' },
  { id: 6, name: '110m Hurdles' },
  { id: 7, name: 'Discus Throw' },
  { id: 8, name: 'Pole Vault' },
  { id: 9, name: 'Javelin' },
  { id: 10, name: '1500m' }
]

const results = {
  8: {
    event_id: 8,
    Results: [
      {
        Rank: 1,
        Country: 'AUS',
        Athlete: 'Cedric Dubler',
        Result: '5.00',
        Points: '910'
      },
      {
				Rank: 2,
				Country: 'CAN',
				Athlete: 'Pierce Lepage',
				Result: '4.90',
				Points: '880'
      },
      {
				Rank: 3,
				Country: 'ENG',
				Athlete: 'John Lane',
				Result: '4.80',
				Points: '849'
			},
			{
				Rank: 4,
				Country: 'WAL',
				Athlete: 'Ben Gregory',
				Result: '4.80',
				Points: '849'
			},
			{
				Rank: 5,
				Country: 'GRN',
				Athlete: 'Lindon Victor',
				Result: '790',
				Points: '666'
			},
			{
				Rank: 6,
				Country: 'AUS',
				Athlete: 'Kyle Cranston',
				Result: '4.40',
				Points: '731'
			}

    ]
  },
  10: {
    event_id: 10,
    Results: [
      {
        Rank: 1,
        Country: 'JPN',
        Athlete: 'Akihiko Nakamura',
        Result: '4:18.370',
        Points: '823'
      },
      {
				Rank: 2,
				Country: 'AUS',
				Athlete: 'Cedric Dubler',
				Result: '4:32.120',
				Points: '731'
			},
      {
				Rank: 3,
				Country: 'AUT',
				Athlete: 'Dominik Distelberger',
				Result: '4:33.470',
				Points: '722'
			},
			{
				Rank: 4,
				Country: 'EST',
				Athlete: 'Karl Robert Saluri',
				Result: '4:39:400',
				Points: '684'
			},
			{
				Rank: 5,
				Country: 'POL',
				Athlete: 'Pawel Wiesiolek',
				Result: '4:42.270',
				Points: '666'
			},
			{
				Rank: 6,
				Country: 'CZE',
				Athlete: 'Jiri Sykora',
				Result: 'Did not finish',
				Points: '0'
			}

    ]
  }
}

app.get('/events', (req, res) => {
  res.json(events)
})

app.get('/results/:eventId', (req, res) => {
  if (!events.find(event => event.id === parseInt(req.params.eventId))) {
    return res.status(404).json({
      message: 'Event does not exist'
    })
  }

  res.json(results[req.params.eventId] || { event_id: req.params.eventId, Results: [] })
})

app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Route not found'
  })
})

app.listen(port, () => {
  console.log(`API listening on port ${port}`)
})
