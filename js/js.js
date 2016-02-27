
var app = {
  "initialize": function() {
  $(".do").each(function() {
    $(this).html(app.drawSensorSelect());
  })
    
},
	"sensors": {
		"Temperature": {
			"unit": "ºF",
			"minValue": 0,
			"maxValue": 212,
			"granularity": 3,
			"values": []
		},
		"Humidity": {
			"unit": "%",
			"minValue": 0,
			"maxValue": 100,
			"granularity": 1,
			"values": []
		},
		"Water Level": {
			"unit": "inch",
			"minValue": 0,
			"maxValue": 10,
			"granularity": 1,
			"values": []
		},
		"Light": {
			"unit": "",
			"minValue": null,
			"maxValue": null,
			"granularity": null,
			"values": ["On", "Off"]
		},
		"CO2": {
			"unit": "PMM",
			"minValue": 0,
			"maxValue": 9999,
			"granularity": 500,
			"values": []
		},
		"PH": {
			"unit": "",
			"minValue": 0,
			"maxValue": 14,
			"granularity": 0.5,
			"values": []
		}
	},
	"outputs": {
			"1": {
				"name": "Out 1"
			},
			"2": {
				"name": "Out 2"
			},
			"3": {
				"name": "Out 3"
			},
			"4": {
				"name": "Out 4"
			}		
	},
  "drawSensorSelect": function() {
    
    var out = '<select class="sensorSelect"><option value="0">Select Sensor</option>';
    $.each(this.sensors, function(index,value) {
      out = out+"<option value=\""+index+"\">"+index+"</option>";
    })
    out = out+"</select>";
    
    return out;
  },
  "drawOutputSelect": function() {
    
    var out = '<select class="outputSelect"><option value="0">Select Output</option>';
    $.each(this.outputs, function(index,value) {
      out = out+"<option value=\""+index+"\">"+value.name+"</option>";
    })
    out = out+"</select>";
    
    return out;
  },		
  "drawUnitSelect": function(e,sensorName) {
    
    var out = '<select class="unitSelect">';
		
		if(app.sensors[sensorName].values.length > 0) {
			
			$.each(app.sensors[sensorName].values, function( index, value ) {
  			out += '<option value="'+index+'">'+value+'</option>'
			});
			
		} else {
			
			var currentValue = app.sensors[sensorName].minValue;
			
			while( currentValue <= app.sensors[sensorName].maxValue) {
				
				out += '<option>'+currentValue+' '+app.sensors[sensorName].unit+'</option>';
				
				currentValue += app.sensors[sensorName].granularity;
				
			}
			
		}
		
		out += '</select>';
		
		return out;
 
  },
  "drawOutputConfig": function(outputId) {
    
    var out = '<select class="outputSelect"><option value="0">Select</option>';
    $.each(this.outputs.outputId.capabilities, function(index,value) {
      out = out+"<option value=\""+index+"\">"+value+"</option>";
    })
    out = out+"</select>";
    
    return out;
  },		
  "drawRuleA1": function(e) {
    
    var out = '<div class="rule a">If '+this.drawSensorSelect()+'<select><option>exceeds ></option><option>is less than < </option><option>equals or exceeds >=</option><option>equals or is less than <= </option><option>equals =</option></select></div>';
    
    return out;

  },
  "drawRuleB1": function(e) {
    
    var out = '<div class="rule b">switch '+this.drawOutputSelect()+'<select><option>On</option><option>Off</option><option>to percent</option><option>delay</option></select>';
		
		out += '</div>';
    
    return out;

  },
  "drawRuleB2": function(e) {
		
		var triggerElement = e.delegateTarget;
    
    var out = '<select><option>On</option><option>Off</option><option>to percent</option><option>delay</option></select>';
    
    return out;

  },
	"drawRuleA": function() {
		
		var a1 = $(this.drawRuleA1());
  
  	$('#editor').append(a1);
    
  	$('#editor .rule:last-of-type > .sensorSelect').change(function(e) {
			
			var triggerElement = e.delegateTarget;
			
			$(triggerElement).siblings('.unitSelect').remove();
    	
			var sensorName = $(e.delegateTarget).val();
    
    	$(triggerElement).next().after($(app.drawUnitSelect(e,sensorName)).change(function() {
				app.drawRuleB();
			}));
  
		});
	
	},
	"drawRuleB": function() {
			
		var b1 = $(this.drawRuleB1());
  
  	$('#editor').append(b1);
		
	}
  
}


$( document ).ready(function() {
    app.initialize();
});
  