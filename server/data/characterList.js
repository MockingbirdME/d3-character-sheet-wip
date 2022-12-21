import Character from '../classes/Character.js';

import buckyData from './characters/bucky.js';
import lidiaData from './characters/lidia.js';
import renData from './characters/ren.js';
import simuData from './characters/simu.js';

const bucky = (new Character(buckyData)).toJSON();
const lidia = (new Character(lidiaData)).toJSON();
const ren = (new Character(renData)).toJSON();
const simu = (new Character(simuData)).toJSON();

export default [
  bucky,
  lidia,
  ren,
  simu
]