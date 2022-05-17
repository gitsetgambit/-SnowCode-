var incidentGR = new GlideRecord('incident');
incidentGR.addQuery('urgency', 3); //here we are just running a qery
incidentGR.query(); //initializing the query and storing the values in incidentGR
while (incidentGR.next()) {
    gs.print(incidentGR.numbetr);
    incidentGR.urgency = 2; //setting value 
    incidentGR.update(); //updating it
}