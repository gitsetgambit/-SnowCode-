var incidentGR = new GlideRecord('incident');
// here we are using get for one specific record but we can use combination of query and while 
incidentGR.get('number', 'INC0000002');
incidentGR.short_description = 'test short_description';
incidentGR.urgency = 2;
incidentGR.update();