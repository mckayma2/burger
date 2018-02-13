
//testing javascript
console.log('javascript ready');



// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "jquery ready!" );


// main handlebars tempalte
 $.get("/hb", function(data, status){
   console.log(data);

  	 var template = data;
  	 var compiled = Handlebars.compile(template);
    		// JSON file dt.json
			$.get("/json", function(dataJSON, status){
			          console.log(dataJSON);
			          var compliledResult = compiled(dataJSON);
					  console.log(compliledResult);
			      	 $("#pet").html(compliledResult);  
			       
			  });

    

     });
	
	
});