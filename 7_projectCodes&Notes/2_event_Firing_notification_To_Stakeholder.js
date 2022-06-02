// TASK 
// send email to the stakeholders present under the pm_project table when the state changes

// APPROACH
//- register a event
//- in bisuness rule set condion to "state changes" and in advance wirte script and find all the emails by using glide records and make a event queue 
//- make notification record and click advance and set param 1 as recipient 
//- and change the state of in record of pm_project table    


//todo: BUSINESS RULES CODE 
// Add your code here
var stakeholderGR = new GlideRecord('pm_m2m_project_stakeholder');
stakeholderGR.addEncodedQuery('project='+current.sys_id);
stakeholderGR.query();

while (stakeholderGR.next()) {
    gs.eventQueue('incident.state.change', current, stakeholderGR.stakeholder.user, current.state);
}