var json = require("./list.json");
console.log(json);
module.exports=function() {
	var el = document.createElement('div')
	el.innerHTML = json.mytext
	return el
}