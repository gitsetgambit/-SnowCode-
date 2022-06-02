var TASKcreatingCustomAPIs = Class.create();
TASKcreatingCustomAPIs.prototype = {
    initialize: function() {
    },

    getLastestIncidents: function(num){
        var limit = num || 5;
        var result =[];
        var incidentGR = new GlideRecord('incident');
        incidentGR.orderByDesc('sys_created_on');
        incidentGR.setLimit(limit);
        incidentGR.query();
        while(incidentGR.next()) {
            result.push(incidentGR.number.getDisplayValue());
        }
        return result;
    },
    
    type: 'TASKcreatingCustomAPIs'
};

//i'll write note sometime but its working fine and it return the latest creted records