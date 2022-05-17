var newIncidents = [];
var incidentGR = new GlideRecord('incident');
for (var i = 1; i <= 3; i++) {
    incidentGR.newRecord();
    incidentGR.short_description = 'incident #';
    newIncidents.push(incidentGR.insert());
}
gs.print(newIncidents);