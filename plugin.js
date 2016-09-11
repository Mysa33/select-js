function getSelect(){
	var valArray = [];
	var allOptionValArray = [];
	var options = $('select:first option');
	var allOptionValArray = $.map(options,function(option) {
	    return option.value;
	});
	console.log("allOptionValArray",allOptionValArray);
	var i = 0;
	$( "select" ).each(function( index ) {
		var selectVal = $( this ).val();
		valArray.push(selectVal);
		console.log(valArray);
		return valArray;
	});
	for(i=0;i<allOptionValArray.length;i++){
		if(valArray[i] != 0){
			var selectId = $(this).val();
			$('select option[value='+selectId+']').css("color", "#aaa"); 	
		}
		if( $.inArray(allOptionValArray[i], valArray) == -1 ){
			//console.log(allOptionValArray[i]);
			$('select option[value='+allOptionValArray[i]+']').css("color","#666");
		}  							
	}	 
}
$(document).ready(function() {
	$('select').on("change",getSelect);
});
