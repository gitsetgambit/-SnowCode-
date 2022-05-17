var newIncident = new GlideRecord('incident');
newIncident.newRecord();
newIncident.short_description = 'test 345';
gs.print(newIncident.short_description);
newIncident.insert();
gs.info("hello");