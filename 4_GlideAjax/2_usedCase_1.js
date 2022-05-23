//todo: we need to send a text messsage from script include to client script and display it over the incident form everytime it loads

//SCRIPT INCLUDE👨‍💻
var TASKsimplestSI = Class.create();
TASKsimplestSI.prototype = Object.extendsObject(AbstractAjaxProcessor, { //this is preloaded code 
	
	sendText: function(){ // from here i wrote this 
		return 'Aditya'; // returning a string from this function
	},
	
    type: 'TASKsimplestSI' //this also preloaded
});




//CLIENT SCRIPT💻
function onLoad() { // pre loaded code
   var ga = new GlideAjax('TASKsimplestSI'); //this is calling the file of the script include 
   ga.addParam('sysparm_name', 'sendText'); //this is calling the function we created inside the script include 
	ga.getXML(processAjax); //this brings the whole xml file unlike getXMLanswer which only brings the answer 
	
	function processAjax(response){ 
		var answer = response.responseXML.documentElement.getAttribute("answer"); //this do the dot walking inside that whole XML file 
		alert(answer); //here we are simply giving alert on the client side screen
	}
}