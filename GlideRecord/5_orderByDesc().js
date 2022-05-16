// it is taking "incident number" as reference to make is descending

var incidentGR = new GlideRecord('incident');
incidentGR.orderByDesc('short_description');
incidentGR.query();
while (incidentGR.next()) {
    gs.print(incidentGR.number + ':' + incidentGR.short_description);
}