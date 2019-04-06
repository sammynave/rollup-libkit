import { greeting } from '../../src/index';

const hi = document.createElement('div');
hi.textContent = greeting;
document.body.append(hi);
