import layerCss from "./layer.scss";
import template from "./layer.html";

function layer(){
	return {
		name: 'layer',
		layerCss: layerCss,
		template: template
	}
}


(() => {
	alert('layer covering')
})()

export default layer;