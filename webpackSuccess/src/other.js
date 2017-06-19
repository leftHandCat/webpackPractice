import common from './css/common.css';
import test from './css/test.scss';

import Layer from './commponents/layer/layer.js'

(()=>{
	alert("abcdefg")
})();

const ABE = 'ABE';

alert(ABE)

const App = function(){
	let dom = document.getElementById('app');
	let layer = new Layer();

	dom.innerHTML = layer.template;
}

new App();