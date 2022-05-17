//todo: getValue()
// getValue will bring the value from the category field 
var fieldValue = g_form.getValue('category');
alert(fieldValue);
// alert will simply carry that value and alert in the screen

//todo: setValue()
g_form.setValue('category', 'hardware'); //obvious stuff

//todo: clearValue()
g_form.clearValue('category', 'software'); //obvious stuff

//todo: save()
g_form.save() //obvious stuff (it save the form btw)

//todo: setDisabled()
g_form.setDisabled('category', true); //it makes any field disable
// false will make it enable again

//todo: hideRelatedList() & showRelatedList()
g_form.hideRelatedList(); //obvious stuff
g_form.showRelatedList();
// will hide and show the related list of any form

//todo: isMandatory()
alert(g_form.isMandatory('category')); // it checks if the field is mandatory or not
// it works with alert because it shows in the screen if its mandatory or not

//todo: setMandatory()
g_form.setMandatory('category', true); // setting it to the mandatory 
alert(g_form.isMandatory('category')); // checking it if its mandatory

//todo: isNewRecord()
var isNewRecord = g_form.isNewRecord(); // this check if the record is new or not 
alert('Is this a new Record?' + isNewRecord); // this gives simple alert

//todo: addInfoMessage() & addErrorMessage()
g_form.addInfoMessage('this is a gform info message'); // does not require alert  
g_form.addErrorMessage('this is a gform Error message'); // does not require alert 

//todo: clearMessages() 
g_form.clearMessages(); 

//todo: getLAbeloff()
alert(g_form.getLabelOf('caller_id')); //this gets the label of the given field

//todo: getTableName()
var tablename = g_form.getTableName(); //brings the table name and it needs alert
alert(tablename);

