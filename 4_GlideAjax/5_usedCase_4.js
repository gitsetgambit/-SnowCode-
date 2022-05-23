//todo: onChange of caller in the incident form fetch the email of the current selected caller and write the data of the new caller in the description

// if u don't get anything take reference from previous used cases

//fixme: 
//CLIENT SCRIPT💻
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }
    var ga = new GlideAjax('TASK_get_caller_data'); //name of the script include
    ga.addParam('sysparm_name', 'getCallerDetails'); // name of the function
   ga.addParam('sysparm_inc', g_form.getValue('caller_id')); //additional parameter (optional)
    ga.getXML(showDetails);

    function showDetails(response) {
        var answer = response.responseXML.documentElement.getAttribute("answer");
        g_form.setValue('description', answer);
        alert(answer);
    }


}

//SCRIPT INCLUDE👨‍💻
var TASK_get_caller_data = Class.create();
TASK_get_caller_data.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    getCallerDetails: function() {
        var caller_sysID = this.getParameter('sysparm_inc');
        var incidentGR = new GlideRecord('sys_user');
        incidentGR.addquery("sys_id",caller_sysID);
        incidentGR.query();
        if(incidentGR.next()){
            var name = incidentGR.name;
            var email = incidentGR.email;
        }
        
       
            var details = 'caller name: ' +name + "Caller Email is: " + email;
            return details;
        
    },
    type: 'TASK_get_caller_data'
})