//todo: onLoad of the incident form we need to display "alert" of the the current priority of the loaded form 
// we need to fetch the priority value of the current form from script include with glideRecord and 
// client script will be used for the alert of data coming from script include 

//fixme: FISRT ITERATION TO DO THIS 
//CLIENT SCRIPT💻
function onLoad() {
    var ga = new GlideAjax('TASKqueryOnIncidentTable');
    ga.addParam('sysparm_name', 'priorityValue');
    ga.addParam('sysparm_RecNum', g_form.getValue('number'));
    ga.getXML(showDetails);

    function showDetails(response) {
        var answer = response.responseXML.documentElement.getAttribute("answer");
        alert('aditya ' + answer);
    }
}

//SCRIPT INCLUDE👨‍💻
var TASKqueryOnIncidentTable = Class.create();
TASKqueryOnIncidentTable.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    priorityValue: function() {
        var RecNum = this.getParameter('sysparm_RecNum');
        var grINC = new GlideRecord('incident');
        grINC.addQuery('number', RecNum);
        grINC.query();
        if (grINC.next()) {
            var label = grINC.getDisplayValue('priority');
            return label;
        }
    },
    type: 'TASKqueryOnIncidentTable'
});



//FIXME: SECOND ITERATION TO DO THIS 
//CLIENT SCRIPT💻
//this is someone elses code and he used if else in script include for return  
function onLoad() {
    var ga = new GlideAjax('TASKqueryOnIncidentTableScriptIncludeNEW');
    ga.addParam('sysparm_name', 'priorityValue');
    ga.addParam('sysparm_RecNum', g_form.getValue('number'));
    ga.getXML(showDetails);

    function showDetails(response) {
        var a = response.responseXML.documentElement.getAttribute("answer");
        alert('priority is:- ' + a);
    }
}

//SCRIPT INCLUDE👨‍💻
var TASKqueryOnIncidentTableScriptIncludeNEW = Class.create();
TASKqueryOnIncidentTableScriptIncludeNEW.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    priorityValue: function() {
        var label = '';
        var RecNum = this.getParameter('sysparm_RecNum');
        var grINC = new GlideRecord('incident');
        grINC.addQuery('number', RecNum);
        grINC.query();
        if (grINC.next()) {
            label = grINC.priority.getDisplayValue();
        }
        if (label)
            return label;
        else
            return 'Not applicable on new Record';
    },
    type: 'TASKqueryOnIncidentTableScriptIncludeNEW'
});



//fixme: THIRD ITERATION TO DO THIS 
//CLIENT SCRIPT💻
//this is someone elses code and he used getXML answer  
function onLoad() {
    var ajax = new GlideAjax('TASKqueryOnIncidentTableScriptIncludeNEWT');
    ajax.addParam('sysparm_name', 'priorityValue');
    ajax.addParam('sysparm_RecNum', g_form.getValue('number'));
    ajax.getXMLAnswer(function(answer) { 
        if (answer.length > 0) {
            alert('aditya' + answer);
        }
    });
}

//SCRIPT INCLUDE👨‍💻
var TASKqueryOnIncidentTableScriptIncludeNEWT = Class.create();
TASKqueryOnIncidentTableScriptIncludeNEWT.prototype = Object.extendsObject(AbstractAjaxProcessor, {
    priorityValue: function() {
        var RecNum = this.getParameter('sysparm_RecNum');
        var grINC = new GlideRecord('incident');
        if (grINC.get('number', RecNum)) {
            return grINC.getDisplayValue('priority');
        }
    },
    type: 'TASKqueryOnIncidentTableScriptIncludeNEWT'
});