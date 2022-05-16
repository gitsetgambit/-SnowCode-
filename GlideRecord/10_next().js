var incidentGR = new GlideRecord('incident');
incidentGR.query();
gs.print(incidentGR.next());
//next method do the actual iteration 