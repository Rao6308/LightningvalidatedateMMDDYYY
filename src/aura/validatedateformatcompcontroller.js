({
	validatedate : function(component, event, helper) {
		var date_val = component.find("dateField").get("v.value");
        var date_formatter = new Date(date_val);
        if(!moment(date_formatter, 'MM/DD/YYYY', true).isValid()){
             alert("invalid date please enter in MM/DD/YYYY format");
            component.find("dateField").set("v.value","2014-01-30");
        }
	}
})