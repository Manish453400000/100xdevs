import google from './google.png'
import coofee from './coffee-cup.png'
import code from './code.png'
import dinner from './banquet.png'
import training from './training.png'
import reading from './reading.png'
import game from './console.png';
import playing from './playing.png';
import nap from './relaxing.png'

// "CODE",
//         "COFFEE",
//         "MEAL",
//         "TRAINING",
//         "STUDY",
//         "GAME",
//         "SPORTS",
//         "REST"

const taskIcon = [
  {
    lebel: "COFFEE",
    png: coofee
  },
  {
    lebel: "CODE",
    png: code
  },
  {
    lebel: "TRAINING",
    png: training
  },
  {
    lebel: "MEAL",
    png: dinner
  },
  {
    lebel: "STUDY",
    png: reading
  },
  {
    lebel: "GAME",
    png: game
  },
  {
    lebel: "SPORTS",
    png: playing,
  },
  {
    lebel: "REST",
    png: nap
  }
]

export { google, taskIcon }

export {training}