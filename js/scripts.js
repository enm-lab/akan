var set = function(){
   var dd = parseInt(document.getElementById("myForm").elements.namedItem("date").value);
   var mm = parseInt(document.getElementById("myForm").elements.namedItem("month").value);
   var yob = parseInt(document.getElementById("myForm").elements.namedItem("year").value);
   var gender = document.getElementById("myForm").elements.namedItem("gender").value;
   var dob =new Date(yob + "/" + mm + "/" + dd);
   var weekDay = date.getDay();