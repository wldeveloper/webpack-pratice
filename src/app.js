import Layer from './components/layer/layer.js'
// require('style-loader!css-loader!./components/layer/layer.css')
import './css/common.css'

const App = function (){
    var dom = document.getElementById('app');
    var layer = new Layer();
    dom.innerHTML = layer.tpl({
        name:'john',
        arr:['apple','xiaomi','banana']
    });
}

new App()