
var app = {
  "initialize": function() {
  $(".do").each(function() {
    $(this).html(app.drawSensorSelect());
  })
	
	$('#newRule').click(app.drawRuleA);
    
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
		},
		"Time of Day": {
			"unit": null,
			"minValue": null,
			"maxValue": null,
			"granularity": null,
			"values": [],
			"function": "timepicker"
		}
	},
	"outputs": {
			"1": {
				"name": "Output 1",
				"capabilities": {
					"1":"On",
					"0":"Off",
					"percent":"Set to %"
				}
			},
			"2": {
				"name": "Output 2",
				"capabilities": {
					"1":"On",
					"0":"Off",
					"percent":"Set to %"
				}
			},
			"3": {
				"name": "Output 3",
				"capabilities": {
					"1":"On",
					"0":"Off",
					"percent":"Set to %"
				}
			},
			"4": {
				"name": "Output 4",
				"capabilities": {
					"1":"On",
					"0":"Off",
					"percent":"Set to %"
				}
			}
	},
  "drawSensorSelect": function() {
    
    var out = '<select class="sensorSelect"><option value="0">Which Sensor?</option>';
    $.each(this.sensors, function(index,value) {
      out = out+"<option value=\""+index+"\">"+index+"</option>";
    })
    out = out+"</select>";
    
    return out;
  },
  "drawOutputSelect": function() {
    
    var out = '<select class="outputSelect"><option value="0">Do what?</option>';
    $.each(this.outputs, function(index,value) {
      out = out+"<option value=\""+index+"\">Switch "+value.name+"</option>";
    })
			out = out+"<option value=\"delay\">Wait for ...</option>";
    out = out+"</select>";
    
    return out;
  },		
  "drawUnitSelect": function(e,sensorName) {
		
		var triggerElement = e.delegateTarget;
    
    var out = '<select class="unitSelect">';
		
		if(app.sensors[sensorName].values.length > 0) {
			
			$.each(app.sensors[sensorName].values, function( index, value ) {
  			out += '<option value="'+index+'">'+value+'</option>'
			});
			
		} else if( app.sensors[sensorName].function == 'timepicker' ) {
			
			$(triggerElement).parent('div').append($('<input class="time">'));
			
			$(triggerElement).parent('div').children('input.time').timepicker({ useSelect: true }).on('changeTime', function(e) {
    		app.drawRuleB(e);
			});
			
			

			return '';
			
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
  "drawActionSelect": function(e) {
		
		var triggerElement = e.delegateTarget;
		
		var outputId = $(triggerElement).val();
    
    var out = '';
		
		if(outputId == 'delay') {
			
			out = out+'<select class="hours">';
			
			var h = 0;
			while( h < 24 ) {
				out = out+ '<option>'+h+' hours</option>';
				h += 1;
			}
			out = out+ '</select>';
			
			
			out = out+'<select class="minutes">';
			
			var m = 0;
			while(m < 60) {
				out = out+ '<option>'+m+' minutes</option>';
				m += 1;
			}
			out = out+ '</select>';
			
			
		} else {
			
			out = out+'<select class="actionSelect">';
			
			$.each(this.outputs[outputId].capabilities, function(index,value) {
			 out = out+"<option value=\""+index+"\">"+value+"</option>";
			})			
			
			out = out+"</select>";
		}
    return out;
  },		
  "drawRuleA1": function(e) {
    
    var out = '<div class="rule a">If '+this.drawSensorSelect()+'<select><option>exceeds ></option><option>is less than < </option><option>equals or exceeds >=</option><option>equals or is less than <= </option><option>equals =</option></select></div>';
    
    return out;

  },
	"drawPercentSelect": function() {
		
		var out = '<select class="percentSelect">';
		var percent = 5;
		while(percent <= 95) {
			out = out+'<option value="'+percent+'">'+percent+'%</option>';
			percent += 5;
		}
		
		out = out+"</select>";
		
		return out;
		
	},
  "drawRuleB1": function(e) {
    
    var out = '<div class="rule b">'+this.drawOutputSelect();
		
		out += '</div>';
    
    return out;

  },
  "drawRuleB2": function(e) {
		
		var triggerElement = e.delegateTarget;
    
    var out = '<select><option>On</option><option>Off</option><option>to percent</option><option>delay</option></select>';
    
    return out;

  },
	"drawRuleA": function() {
		
		var a1 = $(app.drawRuleA1());
  
  	$('#newRule').before(a1);
    
  	$('#editor .rule:last-of-type > .sensorSelect').change(function(e) {
			
			var triggerElement = e.delegateTarget;
			
			$(triggerElement).siblings('.unitSelect').remove();
    	
			var sensorName = $(e.delegateTarget).val();
    
    	$(triggerElement).next().after($(app.drawUnitSelect(e,sensorName)).change(function(e) {
				app.drawRuleB(e);
			}));
  
		});
	
	},
	"drawRuleB": function(e) {
		
		var triggerElement = e.delegateTarget;
		
		$(triggerElement).parent('div').next('div.b').remove();
			
		var b1 = $(this.drawRuleB1());
		
		b1.children().first().change(function(e) {
			
			b1.children('.actionSelect').remove();
			b1.children('.hours').remove();
			b1.children('.minutes').remove();
			b1.children('.percentSelect').remove();
			
			var actionSelect = $(app.drawActionSelect(e)).change(function() {
				b1.children('.percentSelect').remove();
				if($(this).val() == 'percent') {
					$(this).after(app.drawPercentSelect());
				}
			});
			
			b1.append(actionSelect);
		
		});
  
  	$(triggerElement).parent('div').after(b1)

		
	}
  
}


$( document ).ready(function() {
    app.initialize();
});
  