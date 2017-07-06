 var cssModel=require("./style.css")
require("./index.less") 			
var json=require("./list.json")
 console.log(cssModel)
function create(){
	var ele=document.createElement('div')
	ele.id="active"
	ele.innerHTML="json.arr[0].name+json.arr[0].age"

	return ele
}
let a=10;
const b=20;
document.body.appendChild(create())