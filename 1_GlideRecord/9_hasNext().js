var incidentGR = new GlideRecord('incident');
incidentGR.query();
gs.print(incidentGR.hasNext()); //it checks if something exist in the queried table