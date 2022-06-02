//todo: current time
var gdt = new GlideDateTime();
gs.print(gdt);

//todo: various ways to print time 
var gdt = new GlideDateTime();                 //current time
gs.print(gdt);

var gdt2 = new GlideDateTime('2017-05-25 12:02:30'); //enter your own time 
gs.print(gdt2);

var someTimeAgo = '2017-05-25 12:02:30';
var gdt3 = new GlideDateTime(someTimeAgo);    //enter with a variable 
gs.print(gdt3);

//todo: typeOf of the time 
var gdt = new GlideDateTime();                //we can know the type of these dateTime
gs.print(typeOf gdt);

//todo: addDayUTC
var gdt = new GlideDateTime();                //we can use it for changing the dates(days)
gs.print(gdt);                                    
gdt.addDaysUTC(-3);                           //addDaysUTC(3) or (-3) means add 3 days in date or substract
gs.print(gdt);

//todo: addMonthsUTC
var gdt = new GlideDateTime();                 //similar with dates u can manupulate month and year
gs.print(gdt);
gdt.addMonthsUTC(3);
gs.print(gdt);

//todo: addYearsUTC
var gdt = new GlideDateTime();                  //manupulating year here
gs.print(gdt);
gdt.addYearsUTC(3);
gs.print(gdt);

//todo: before
var gdt = new GlideDateTime();                   //this return boolean that tells if its before
gs.print(gdt);
var gdt2 = new GlideDateTime();
gs.print("is gdt2 before gdt: - " + gdt.before(gdt2));

//todo: compareTo() 
var gdt = new GlideDateTime();                   //try them out 
gs.print(gdt);
var gdt2 = new GlideDateTime();
gs.print("is gdt2 before gdt: - " + gdt2);
gs.print("compare: - " + gdt2.compareTo(gdt2));

//todo: diffrence 
var gdt = new GlideDateTime('2022-06-27 19:46:39');
gs.print(gdt);
var gdt2 = new GlideDateTime();
gs.print(gdt2);
var diff = GlideDateTime.subtract(gdt, gdt2);
gs.print("diff: - " + diff.getDisplayValue());

