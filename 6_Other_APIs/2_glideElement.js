//direct access
var incidentGR = new GlideRecord('incident');
incidentGR.get('9c573169c611228700193229fff72400');   
gs.print(incidentGR.caller_id);                       //this will print directly the caller_id

//toString
var incidentGR2 = new GlideRecord('incident');
incidentGR.get('9c573169c611228700193229fff72400');
gs.print(incidentGR.caller_id.toString());            //this will print directly the caller_id string 

//getDisplayValue()
var incidentGR3 = new GlideRecord('incident');
incidentGR.get('9c573169c611228700193229fff72400');
gs.print(incidentGR.caller_id.getDisplayValue());      //this will print directly the caller field vlaue 

//getHTMLValue()
var kbArticalGR = new GlideRecord('kb_knowledge');     //this will bring the HTML 
kbArticalGR.get('sys_id');
gs.print(kbArticalGR.text.getHTMLValue());

//getJouralEntry()
var incidentGR2 = new GlideRecord('incident');
incidentGR.get('9c573169c611228700193229fff72400');
gs.print(incidentGR.comments.getJouralEntry(-2));      //this will print directly the caller_id string 

