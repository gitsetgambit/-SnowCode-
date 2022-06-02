var aditya = new GlideRecord('incident');
aditya.addQuery('name', email.lowertcase());
aditya.query();
while (aditya.hasNext()) {
    var row = aditya.next();
    
}