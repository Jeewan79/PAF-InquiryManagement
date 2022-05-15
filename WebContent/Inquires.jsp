
<%@ page import="model.inquiries"%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
 pageEncoding="ISO-8859-1"%>
 
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Items Management</title>

<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Componets/jquery-3.2.1.min.js"></script>
<script src="Componets/inquiries.js"></script>

</head>
<body>
<h1><b>Inquires Management</b></h1>
   <form id="formItem" name="formItem" method="post" action="Inquires.jsp">
		 Inquiry ID:
		<input id="inquiryID" name="inquiryID" type="text"
		 class="form-control form-control-sm"><br> 
		 Inquiry Type:
		<input id="inquiryType" name="inquiryType" type="text"
		 class="form-control form-control-sm"><br> 
		Inquiry Date:
		<input id="inquiryDate" name="inquiryDate" type="text"
		 class="form-control form-control-sm"><br> 
		Inquiry Description:
		<input id="inquiryDescription" name="inquiryDescription" type="text"
		 class="form-control form-control-sm"><br>
		<input id="btnSave" name="btnSave" type="button" value="Save"
		 class="btn btn-primary">
		 
		<input type="hidden" id="hidItemIDSave" name="hidItemIDSave" value="">
  </form>

	<div id="alertSuccess" class="alert alert-success"></div>
    <div id="alertError" class="alert alert-danger"></div>
	
		<br> 
		<div id="divItemsGrid">
		 <%
		 inquiries inquiryObj = new inquiries();
		 		 out.print(inquiryObj.readInquiries());
		 %>
		</div>

 
    </div>

</div>


<% out.print(session.getAttribute("statusMsg")); %>
</body>
</html>
