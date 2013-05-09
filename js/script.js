$(document).ready(function(){

	//Submit form if valid
	$('#submit').on('click',function(e){
		$('#frm').form('submit');
		e.preventDefault();
	});

//-------------------------Extending Validator plugin for custom validations--------------------------------

	// compares two password fields
	$.extend($.fn.validatebox.defaults.rules, {  
	    equals: {  
	        validator: function(value,param){  
	            return value == $(param[0]).val();  
	        },  
	        message: 'Both passwords do not match.'  
	    }  
	});

	// Extend validateBox for minLength rule
	$.extend($.fn.validatebox.defaults.rules, {  
	    minLength: {
	        validator: function(value,param){
	            return value.length >= param[0];  
	        },  
	        message: 'Enter at Least {0} characters.'
	    }  
	});

	// allows alphabets only (a-zA-Z)
	$.extend($.fn.validatebox.defaults.rules, {  
	    alpha: {
	        validator: function(value){
	        	var r = /^[A-Z]+$/i;
	            return value.match(r);
	        },  
	        message: 'Enter Alphabets only.'
	    }  
	});

	// allows alphabets and special Characters only (a-zA-Z-.')
	$.extend($.fn.validatebox.defaults.rules, {  
	    name: {
	        validator: function(value){
	        	var r = /^[a-zA-Z\.\+\-_']+$/;
	            return value.match(r);
	        },  
	        message: "Enter Alphabets and -,',. only."
	    }  
	});

	// allows alphanumeric only (a-zA-Z0-9)
	$.extend($.fn.validatebox.defaults.rules, {  
	    alphanum: {
	        validator: function(value){
	        	var r = /^[A-Z0-9]+$/i;
	            return value.match(r);
	        },  
	        message: 'Enter Alphabets and Numbers only.'
	    }  
	});

	// Extend validateBox for phone nos rule
	$.extend($.fn.validatebox.defaults.rules, {  
	    contactno: {
	        validator: function(value){
	        	var r = /^\+?[0-9]{7,16}$/;
	            return value.match(r);
	        },  
	        message: 'invalid phone number.'
	    }  
	});

	// allows alphabets and special characters only (a-zA-Z._-+)
	$.extend($.fn.validatebox.defaults.rules, {  
	    alphaspecial: {
	        validator: function(value){
	        	var r = /^[a-zA-Z\.\+\-_]+$/;
	            return value.match(r);
	        },  
	        message: 'Enter Alphabets and characters like \'.-_+\' only.'
	    }  
	});

});