//your JS code here. If required.
const ulElmt=document.getElementsByTagName("ul")[0];
let displayText;


for(let i=0;i<ulElmt.children.length;i++){
	let node=ulElmt.children[i];
	if(node.id=='level'){

		
	displayText="The level of the element is: "+(i+1)
}
}
alert(displayText);