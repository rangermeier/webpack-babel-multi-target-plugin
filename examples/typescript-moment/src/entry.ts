import { Dependency }  from './dependency';
import { makeItGreen } from './make.it.green';

const things: string[] = [
    'thing 1',
    'thing 2',
    'thing 3',
    'thing 4',
    'thing 5',
];

const dep = new Dependency();
const logger = dep.log(...things, things);
logger();

makeItGreen();
