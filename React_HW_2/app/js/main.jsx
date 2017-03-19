'use strict';

require('../css/style.css');

import Component1 from './components/component_1';
import Component2 from './components/component_2';

let component_1 = document.getElementById('component_1');
let component_2 = document.getElementById('component_2');

ReactDom.render(< Component1 />, component_1);
ReactDom.render(< Component2 />, component_2);