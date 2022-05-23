//////////////////////////////////////////////////////// /* 💻CLIENT SCRIPT💻 */ ///////////////////////////////////////////////////////////////////////////

//todo:  Rule-1
//fixme: [always check the sysnatx]
/* watch the syntax carefully and always compare the sysntax with some working reference code 
   u can tinker the code with valid practices but doing common, recommended and tested practices are advised*/

//todo:  Rule-2
//fixme: [sysparm_nameOfFunction in the script include is nessary and its part of syntax]
/* sysparm_nameOfFunction has a name of the function after the sysparm_ should be same name we made inside script include*/

//todo:  Rule-3 
//fixme: [sysparm_nameOfParameterWeAreSending is not needed to be writteb this way]
/* the second addParam() methods which is used for sending the parameter to the function of script include does't need "sysparm_"
   before sending parameter u can use any variable and keep the name similar in the "this.getParameter()" in the script include */

//todo:  Rule-4 
//fixme: [getXML & getXMLanswer has good diffrence]
/*  getXML:- brings the whole xml file and then we have to do the dot walking to the "answer" property whihc is hard to write and slow
            slow to process syntax kinda looks like this 
 
            GA.getXML(ajaxProcessor);
            function ajaxProcessor(response) {
                var answer = response.responseXML.documentElement.getAttribute("answer");
                g_form.setValue('u_email', answer);
            }
 

    getXMAnswer:- this directly brings us the answer and easier to write and read, it uses function as argument in the parameter of 
                  getXMLAnswer() syntax kinda looks lke this
                
            ajax.getXMLAnswer(function(answer) {
                    if (answer.length > 0) {
                    alert('aditya' + answer);
                    }
            }); */


////////////////////////////////////////////////////// /* 👩‍💻SCRIPT INCLUDE👨‍💻 */ ///////////////////////////////////////////////////////////////////////////////////

//todo:  Rule-1
//fixme: [make function as value of the property]
/* here we don't create function directly beacuse we are alrady inside a function and when client script 
   ask for the function name we created that return the value client script is asking for...
   syntax looks kinda like this
                
                emailValue: function() {
        var parameterReceived = this.getParameter('callersEmail');
        var incidentGR = new GlideRecord('sys_user');
        incidentGR.addQuery('sys_id', parameterReceived);
        incidentGR.query();
        if (incidentGR.next()) {
            var e = incidentGR.email;
            return e;
        }*/

//todo:  Rule-2
//fixme: [always check the getParameter]
/* get parameter line always have "this" keyword before it and parameter looks like this
   var parameterReceived = this.getParameter('callersEmail');*/

//todo: rule-3
//fixme: [always check if its returning something]
/* always break your code into the peices and check if its working check the client script in javascript executer 
   wherever u are applying your script for javascirpt executer ctrl+shift+j on the page where u want to apply it 
   
   for script include you can use both fix script and background script to test part of your code coming from script include 
   
   always make sure your script inclide is returning something */