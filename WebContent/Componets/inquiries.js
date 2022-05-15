$(document).ready(function()
{
	if ($("#alertSuccess").text().trim() == "")
	 {
	 $("#alertSuccess").hide();
	 }
	 $("#alertError").hide();
});



 // SAVE ============================================
   
$(document).on("click", "#btnSave", function(event)
	{
		
		// Clear alerts---------------------
		
		 $("#alertSuccess").text("");
		 $("#alertSuccess").hide();
		 $("#alertError").text("");
		 $("#alertError").hide();
		 
		// Form validation-------------------
	
		var status = validateItemForm();
		if (status != true)
	  {
		 $("#alertError").text(status);
		 $("#alertError").show();
		 return;
	   }
	
		
	var type = ($("#hidItemIDSave").val() == "") ? "POST" : "PUT";
	
	$.ajax( 
			{ 
				 url : "InquiresAPI", 
				 type : type, 
				 data : $("#formItem").serialize(), 
				 dataType : "text", 
				 complete : function(response, status) 
			 { 
				 onItemSaveComplete(response.responseText, status); 
			 } 
		});
		
	});
	
	
	
	//itemssavecomplefunction
	

	function onItemSaveComplete(response, status) 
	{ 
	  if (status == "success") 
	   { 
				 var resultSet = JSON.parse(response); 
				 
				 if (resultSet.status.trim() == "success") 
				 
				 { 
					 $("#alertSuccess").text("Successfully saved."); 
					 $("#alertSuccess").show(); 
					 $("#divItemsGrid").html(resultSet.data); 
					 
				 } else if (resultSet.status.trim() == "error") 
				 
				 { 
					 $("#alertError").text(resultSet.data); 
					 $("#alertError").show();
					  
				 } 
		 
		 } else if (status == "error") 
		 
		 { 
			 $("#alertError").text("Error while saving."); 
			 $("#alertError").show(); 
			 
		 } else
		 
		 { 
			 $("#alertError").text("Unknown error while saving.."); 
			 $("#alertError").show(); 
			 
		 } 
		
	
		 $("#hidItemIDSave").val(""); 
		 $("#formItem")[0].reset(); 
	}
	

	
	
// update
	
	$(document).on("click", ".btnUpdate", function(event) 
	{ 
		 $("#hidItemIDSave").val($(this).closest("tr").find('td:eq(0)').text()); 
		 
		 $("#inquiryID").val($(this).closest("tr").find('td:eq(0)').text()); 
		 $("#inquiryType").val($(this).closest("tr").find('td:eq(1)').text()); 
		 $("#inquiryDate").val($(this).closest("tr").find('td:eq(2)').text()); 
		 $("#inquiryDescription").val($(this).closest("tr").find('td:eq(3)').text()); 
	});
	
	
	
//delete
	
$(document).on("click", ".btnRemove", function(event) 
	{ 
		 $.ajax( 
			 { 
					 url : "InquiresAPI", 
					 type : "DELETE", 
					 data : "id=" + $(this).data("id"),
					 dataType : "text", 
					 complete : function(response, status) 
				 { 
			     onItemDeleteComplete(response.responseText, status); 
			     } 
		 }); 
	});
	


//deletecompletion

function onItemDeleteComplete(response, status) 
{ 
	  if (status == "success") 
	 { 
		 var resultSet = JSON.parse(response); 
		 
			 if (resultSet.status.trim() == "success") 
				 { 
					 $("#alertSuccess").text("Successfully deleted."); 
					 $("#alertSuccess").show(); 
					 
					 $("#divItemsGrid").html(resultSet.data); 
			 } else if (resultSet.status.trim() == "error") 
				 
			 { 
				 $("#alertError").text(resultSet.data); 
				 $("#alertError").show(); 
			 } 
			 
	} else if (status == "error") 
			 
	{ 
	     $("#alertError").text("Error while deleting."); 
		 $("#alertError").show(); 
	} else
			 
	 { 
	     $("#alertError").text("Unknown error while deleting.."); 
		 $("#alertError").show(); 
	 } 
		
		
	}	
		
		
	// CLIENT-MODEL================================================================
	
	function validateItemForm()
	{
	
 
	
	if ($("#inquiryID").val().trim() == "")
	 {
		 return "Insert Inquiry ID.";
	 }
 
	
	if ($("#inquiryType").val().trim() == "")
	 {
	 	return "Insert Inquiry Type.";
	 }
	 
	 if ($("#inquiryDate").val().trim() == "")
	 {
		 return "Insert Inquiry Date.";
	 }
 
	
	if ($("#inquiryDescription").val().trim() == "")
	 {
	 	return "Insert Inquiry Description.";
	 }
	 
	
	return true;
	


}	

