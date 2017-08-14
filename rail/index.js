import {CFCMRailwayCalendar} from './src/Plugins_es6_railcalendar.babel.min.js'
export default {
 	install: function(Vue) {
	 Object.defineProperty(Vue.prototype, '$Railc', { value: CFCMRailwayCalendar });
  }
}