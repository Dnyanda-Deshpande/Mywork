$(document).ready(function(){
   
        $.getJSON("test.json", function(result){
            $.each(result, function(i, field){
                $("div").append(field.age + " ");
            });
        });
    
});