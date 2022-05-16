var incidentGR = new GlideRecord('incident');
incidentGR.addEncodedQuery('short_descriptionENDSWITHtest'); //its working with 'copyquery'
incidentGR.deleteMultiple();