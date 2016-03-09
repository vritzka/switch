
var app = {
  "initialize": function() {
		
  $.each($(".do"), function() {
		var sensorSelect = $(app.drawMainBoxSensorSelect()).change(function() {
			ga('send', 'event', 'Interaction', 'Sensor Set', $(this).val())
		})
		$(this).append(sensorSelect)
	})	
	
	
	$('a[href="#rules"]').on('show.bs.tab', function (e) {
		ga('send', 'event', 'Tab', '#rules')
  	app.saveSensors();
		if(app.countSensors() < 1) {
			ga('send', 'event', 'Error', 'First choose some Sensors')
			alert('But first, please choose some Sensors!');
			return false;
		}
	})
	$('a[href="#device"]').on('show.bs.tab', function () {
		ga('send', 'event', 'Tab', '#device')
	})	

	$('#tutorialButton').click(function() {
		ga('send', 'event', 'Button', '#tutorialButton')
		app.startTutorial()
	})	

	$('#newRule').click(function() {
		ga('send', 'event', 'Button', '#newRule')
		app.drawRuleA()
	})
		    
},
	"sensors": {
		"Temperature": {
			"unit": "ºF",
			"minValue": 32,
			"maxValue": 212,
			"granularity": 3,
			"values": []
		},
		"Humidity": {
			"unit": "%",
			"minValue": 0,
			"maxValue": 100,
			"granularity": 5,
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
	"connectedSensors":["0","0","0","0","Time of Day"],
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
	"saveSensors": function() {
		$('#device select.sensorSelect').each(function(index,value) {
				app.connectedSensors[index] = $(this).val();
		});
	},
	"countSensors": function() {
		var count = 0;
		$.each(app.connectedSensors, function(index,value) {
			if(value != '0') {
				count += 1;
			}
		})
		return parseInt(count);
	},
  "drawMainBoxSensorSelect": function() {
    
    var out = '<select class="sensorSelect"><option value="0">Choose your Sensor</option>';
    $.each(this.sensors, function(index,value) {
			if(index != 'Time of Day') {
				out = out+"<option value=\""+index+"\">"+index+"</option>";
			}
    })
    out = out+"</select>";
    
    return out;
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
		
		if(!$(triggerElement).siblings('.operandSelect').is(':visible')) {
			$(triggerElement).siblings('.operandSelect').show();
		}
    
    var out = '<select class="unitSelect"><option value="-1">What?</option>';
		
		if(app.sensors[sensorName].values.length > 0) {
			
			$(triggerElement).siblings('.operandSelect').hide();
			
			$.each(app.sensors[sensorName].values, function( index, value ) {
  			out += '<option value="'+index+'">'+value+'</option>'
			});
			
		} else if( app.sensors[sensorName].function == 'timepicker' ) {
			
			$(triggerElement).siblings('.operandSelect').hide();
			
			$(triggerElement).parent('div').append($('<input class="time">'));
			
			$(triggerElement).parent('div').children('input.time').timepicker({ useSelect: true, step: 15 }).on('changeTime', function(e) {
    		app.drawRuleB(e);
			});

			return '';
			
		} else {
			
			var currentValue = app.sensors[sensorName].minValue;
			
			while( currentValue <= app.sensors[sensorName].maxValue) {
				
				out += '<option value="'+currentValue+'">'+currentValue+' '+app.sensors[sensorName].unit+'</option>';
				
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
		
		var out = '';
    
    out = '<div class="ruleContainer"><span class="glyphicon glyphicon-remove-circle deleteRule" aria-hidden="true"></span><div class="rule a">';
		
		out += 'If '+this.drawSensorSelect()+'<select class="operandSelect"><option value="exceeds">exceeds ></option><option value="isBelow">is below < </option><option value="equalsOrExceeds">equals or exceeds >=</option><option value="equalsOrBelow">equals or is below <= </option><option value="equals">equals =</option></select></div>';
    
		out += '</div>';
		
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
  "drawRuleB1": function() {
    
    var out = '<div class="rule b">'+app.drawOutputSelect();
		
		out += '</div>';
    
    return out;

  },
  "drawRuleB2": function(e) {
		
		var triggerElement = e.delegateTarget;
    
    var out = '<select><option>On</option><option>Off</option><option>to percent</option><option>delay</option></select>';
    
    return out;

  },
	"drawRuleA": function() {
		
		if(app.countSensors() < 1) {
			alert('First go back and connect at least one sensor');
			return false;
		}		
		
		var a1 = $(app.drawRuleA1());
		
		$(a1).children('span.deleteRule').click(app.deleteRule);
  
  	$('#newRule').before(a1);
    
  	$('#editor .rule:last-of-type > .sensorSelect').change(function(e) {
			
			ga('send', 'event', 'Editor', 'selected Sensor', $(this).val())
			
			var triggerElement = e.delegateTarget;
			
			$(triggerElement).siblings('.unitSelect, .ui-timepicker-select, .time').remove();
    	
			var sensorName = $(e.delegateTarget).val();
    
    	$(triggerElement).next().after($(app.drawUnitSelect(e,sensorName)).change(function(e) {
				ga('send', 'event', 'Editor', 'selected Unit', $(this).val())
				app.drawRuleB(e);
			}));
  
		});
	
	},
	"drawRuleB": function(e) {
		
		var triggerElement = e.delegateTarget;
		
		if($(triggerElement).val() == '-1') {
			$(triggerElement).parent('div').siblings('div.b, button').remove();
			
			return false;
		}
		
		if($(triggerElement).parent('div').next('div.b').length > 0 ) {
			return false;
		}
			
		var b1 = $(app.drawRuleB1());
		
		b1.children().first().change(function(e) {
			
			ga('send', 'event', 'Editor', 'selected Output', $(this).val())
			
			b1.children('.actionSelect, .hours, .minutes, .percentSelect').remove();
			b1.next('button.btn-then').remove();
			
			var actionSelect = $(app.drawActionSelect(e)).change(function() {
				ga('send', 'event', 'Editor', 'selected Action', $(this).val())
				b1.children('.percentSelect').remove();
				if($(this).val() == 'percent') {
					$(this).after(app.drawPercentSelect());
				}
			});
			
			b1.append(actionSelect)
			
			var thenButton = $('<button type="button" class="btn btn-primary btn-xs btn-then"><span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span> then..</button>').click(function(e) {
				ga('send', 'event', 'Editor', 'clicked then button')
				app.drawRuleB(e)
			});
			
			b1.after(thenButton);
		
		});
		
		if($(triggerElement).hasClass('btn-then')) {
			var deleteButton = $('<span class="glyphicon glyphicon-remove-circle deleteRuleB" aria-hidden="true"></span>').click(app.deleteRuleB);
			b1.append(deleteButton);
			$(triggerElement).after(b1);
		} else {
			$(triggerElement).parent('div').after(b1);
		}

	},
	"deleteRule": function(e) {
		
		if(!confirm('Delete this Rule?')) {
			return false;
		}
		
		ga('send', 'event', 'Button', 'deleteRule')
		
		var triggerElement = e.delegateTarget;
		$(triggerElement).parent('div.ruleContainer').remove();
	},
	"deleteRuleB": function(e) {
		
		if(!confirm('Delete this Rule?')) {
			return false;
		}
		
		ga('send', 'event', 'Button', 'deleteRuleB')
		
		var triggerElement = e.delegateTarget;
		$(triggerElement).parent('div.b').next('button').remove();
		$(triggerElement).parent('div.b').remove();
		
	},
	"startTutorial": function() {
		
		document.cookie="tutorialStarted=true; expires=Thu, 18 Dec 2018 12:00:00 UTC";
		
		ga('send', 'event', 'Tutorial', 'started');

		introJs().onchange(function(targetElement) {

  		if($(targetElement).attr('id') == 'input1') {
				$('#input1 div.do select').val('Temperature');
				$('#input2 div.do select').val('Humidity');
			}
			
			if($(targetElement).attr('href') == '#rules') {
				$('ul.nav-tabs li a[href="#rules"]').tab('show')
			}
			
			if($(targetElement).attr('id') == 'newRule') {
				$(targetElement).trigger('click');
				$('div.a > select.sensorSelect').val('Temperature');
				$('div.a > select.sensorSelect').trigger('change');
				
				$('div.a > select.unitSelect').val('83');
				$('div.a > select.unitSelect').trigger('change');
				
				$('div.b > select.outputSelect').val('1');
				$('div.b > select.outputSelect').trigger('change');
				
				$('div.b > select.actionSelect').val('1');
				$('div.b > select.actionSelect').trigger('change');				
				
				
			}			
			
			
		}).oncomplete(function() {
				$('ul.nav-tabs li a[href="#device"]').tab('show');
				ga('send', 'event', 'Tutorial', 'completed');
		}).onexit(function() {
  			ga('send', 'event', 'Tutorial', 'exited');
		}).start();
			
	}
  
}


$( document ).ready(function() {
    app.initialize();
});
  