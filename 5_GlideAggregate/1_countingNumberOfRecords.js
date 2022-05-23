//todo: addQuery
var incidentGR = new GlideAggregate('sys_user'); //basically counts all the records
incidentGR.addAggregate('COUNT');
incidentGR.query();
if (incidentGR.next()) {
    var e = incidentGR.getAggregate('COUNT');
}
gs.print("the number of users are:- " + e);

//todo: addEncodedQuery
var incidentGR = new GlideAggregate('sys_user'); //works with copy query
incidentGR.addEncodedQuery('name=Mabel Weeden');
incidentGR.addAggregate('COUNT');
incidentGR.query();
if (incidentGR.next()) {
    var e = incidentGR.getAggregate('COUNT');
}
gs.print("the number of users are:- " + e);

//todo: notNullQuery
var incidentGR = new GlideAggregate('sys_user'); 
incidentGR.addNotNullQuery('email');             //checks for all not null queries in any given fields
incidentGR.addAggregate('COUNT');
incidentGR.query();
if (incidentGR.next()) {
    var e = incidentGR.getAggregate('COUNT');
}
gs.print("the number of users are:- " + e);
//we can do same with "null query"

//todo: addNullQuery
var incidentGR = new GlideAggregate('sys_user'); 
incidentGR.addNullQuery('email');                //normal stuff it checks for the empty fields
incidentGR.addAggregate('COUNT');
incidentGR.query();
if (incidentGR.next()) {
    var e = incidentGR.getAggregate('COUNT');
}
gs.print("the number of users are:- " + e);

//todo: addquery 
var incidentGR = new GlideAggregate('sys_user'); 
incidentGR.addQuery('email', 'adam.ringle@acme.com'); //it checks for the total number of maching records
incidentGR.addAggregate('COUNT');
incidentGR.query();
if (incidentGR.next()) {
    var e = incidentGR.getAggregate('COUNT');
}
gs.print("the number of users are:- " + e);

//todo: addTrend
var incidentGR = new GlideAggregate('sys_user'); 
incidentGR.addTrend('opened_at', 'Month'); 
incidentGR.addAggregate('COUNT');
incidentGR.query();
while (incidentGR.next()) {
    gs.print(incidentGR.getValue('timeref') + " : " + incidentGR.getAggregate('COUNT'));
}
