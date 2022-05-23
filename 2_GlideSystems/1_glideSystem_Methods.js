//todo:
gs.print('hello world'); //it simply print the string n print it in the screen

//todo:
gs.log('hello world', 'marks_logs'); //it actually logs the message in the system log table 
// gs.log accepts two arguments message and source, source can be any string and will be shown in source column of 
// system log table

//todo:
gs.error('its an error message'); //it goes in the sytem logs Error 

//todo:
gs.warn('i am a warn msg'); //this gives a simple warn msg in the warn logs under the system logs

//todo:
//go to the bussiness rule
// this works best in bussiness rule
// and this is a bussiness rule function and then we coded inside it
(function executeRule(current, previous /*null when async*/ ) {

    gs.addInfoMessage('welcome to servicenow 201: developement! this is an info message'); //this is a info message
    gs.addErrorMessage('welcome to servicenow 201: developement! this is an Error message'); //this provides a red colored error message

})(current, previous);

//todo:
gs.print(gs.beginningOfLastMonth()); // this prints the obvious stuff u can see on the screen

//todo:
gs.print(gs.beginningOfNextMonth()); //this prints the obvious stuff u can see on the screen

//todo:
gs.print(gs.generateGUID()); //it obviously generate the GUID 

//todo:
gs.setProperty('servicenow.201.hello.world', 'testing'); //this set the property

//todo:
gs.print('hellow ' + gs.getProperty('servicenow.201.hello.world')); //this get the property

//todo:
gs.print(gs.getUser()); //this brings us the user

//todo:
gs.print(gs.getUserName()); //this brings the user name 

//todo:
gs.print(gs.getUser().getDisplayName()); //this also bring the userNAme 

//todo:
gs.print(gs.getUser().FirstName()); //get only FirstName

//todo:
gs.print(gs.getUser().getLocation()); //get the location cuz location is a reference field we get the sys ID back

//todo:
gs.print(gs.getUser().getUserRoles()); //gets the user roles which assigned to the user account

//todo:
gs.print(gs.getUserID()); //gets the user id basically the sys ID 
// it can be used with the queries as well

//todo:
if (gs.hasRole('itil')) || gs.hasRole('admin')) { //it will run if user have both the roles ITIL and admin
    gs.print('it has the role needed')
}

//todo:
gs.print(gs.getSession().isLoggedIn());

//todo:
var incidentGR = new GlideRecord('incident');
incidentGR.query();
while (incidentGR.next()) {
    // gs.nill will check the field we've entered and try to find if it has anything or not
    // basically it will find if its nill or null or not
    if (gs.nil(incidentGR.short_description)) {
        gs.print('this incident has no short_description' + incidentGR.short_description);
    }
}

//todo: 
gs.print(gs.tableExists('incident')); //it checks if table exist obvious stuff

//todo: 
var xmlString = '<root><test>Some XML</test></root>';
var json = gs.xmlToJSON('xmlString');
gs.print(json.root.test);

//todo:
gs.eventQueue('name of the event'); //it logs the event in the system logs

//fixme: ETC