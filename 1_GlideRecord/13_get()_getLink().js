var incidentGR = new GlideRecord('incident');
incidentGR.get('number', 'INC0010087'); //get method does not need query() 
gs.print(incidentGR.number);
gs.print(incidentGR.getLink()); //this getLink() brings the URL of the incident