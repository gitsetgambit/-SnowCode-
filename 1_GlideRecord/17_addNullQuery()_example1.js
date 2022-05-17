var incidentGr = new GlideRecord('incident');
incidentGr.addNullQuery('caller_id'); // nullQuery() checks all the null fields
incidentGr.query();
while (incidentGr.next()) {
    gs.print(incidentGr.number);
}