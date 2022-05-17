var incGR = new GlideRecord('incident');
incGR.addNotNullQuery('short_description'); // this checks all the not null fields 
incGR.query();

while (incGR.next()) {
    gs.print(incGR.short_description);
}