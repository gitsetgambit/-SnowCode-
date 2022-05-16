var incidentGR = new GlideRecord('incident');
incidentGR.addQuery('priority', '0');
incidentGR.query();
gs.print(incidentGR.hasNext());

// priority 0 does not exist so we can expect false here