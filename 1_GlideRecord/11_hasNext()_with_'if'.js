var incidentGR = new GlideRecord('incident');
incidentGR.query();
if (incidentGR.hasNext()) { //it will give output with next() method  
    gs.print(incidentGR.number);
}

// has next - just return a true or false value
// where Next - is do the actual iteration for if the value exist or 