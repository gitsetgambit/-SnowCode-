//todo: onChange of caller in the incident form fetch the email of the current selected caller and write the value the in new email field you've created 
//in the incident form 

//fixme: 
//CLIENT SCRIPT💻
function onChange(control, oldValue, newValue, isLoading, isTemplate) { //preloaded code
    if (isLoading || newValue === '') {
        return;                                                         
    }                                                                   //till here preloaded code
    var GA = new GlideAjax('TASKcallersEmailOnTheFieldSI');             //calling glideajax 
    GA.addParam('sysparm_name', 'emailValue');                          //giving function name sysparm_name is fix syntax for asking function name 
    GA.addParam('callersEmail', g_form.getValue('caller_id'));          //here it is using g_form.getValue for getting the caller_id where caller is basically sys id in this case 
    GA.getXML(ajaxProcessor);                                           //we're using getXML to fetch the data coming from script include in the for of XML 
    function ajaxProcessor(response) {                                  //now we're processing the XML inside this function 
        var a = response.responseXML.documentElement.getAttribute("answer"); //from walking we're going inside the XML to the "answer" property 
        g_form.setValue('u_email', a);                                  //setting the value of email field 
    }

}

//SCRIPT INCLUDE👨‍💻
var TASKcallersEmailOnTheFieldSI = Class.create();                                          //preloaded code
TASKcallersEmailOnTheFieldSI.prototype = Object.extendsObject(AbstractAjaxProcessor, {      //till here preloaded code
                                                                                            
    emailValue: function() {                                                                //we created a property and function as the value of the property             
        var parameterReceived = this.getParameter('callersEmail');                          //we're getting the sys_id sent to us from g_form line 
    var incidentGR = new GlideRecord('sys_user');                                           //simple gliderecord creation
        incidentGR.addQuery('sys_id', parameterReceived);                                   //it'll ask to run query with sys_id so enter the varible carrying sys_id
        incidentGR.query();                                                                 //run query
        if (incidentGR.next()) {                                                            //it'll ask if the record exist         
            var e = incidentGR.email;
            return e;                                                                       //returning the email it can be out of the if {} common coding logics will apply
        }

    },

    type: 'TASKcallersEmailOnTheFieldSI'
});