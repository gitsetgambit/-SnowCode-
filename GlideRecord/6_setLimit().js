// setLimit() brings the number of queries aasked from it 
// here addquery was not needed its just simply pulling the first 5 or 10 whatever limit set records
var problemGR = GlideRecord('problem');
problemGR.orderBy('short_description'); //we can also sort by short description or other column in the table 
problemGR.setLimit(10);
problemGR.query();
while (problemGR.next()) {
    gs.info(problemGR.number);
    gs.print(problemGR.short_description); //both works server side 'gs.print' & 'gs.info'
}