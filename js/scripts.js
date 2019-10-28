var set = function(){
   var dd = parseInt(document.getElementById("myForm").elements.namedItem("date").value);
   var mm = parseInt(document.getElementById("myForm").elements.namedItem("month").value);
   var yob = parseInt(document.getElementById("myForm").elements.namedItem("year").value);
   var gender = document.getElementById("myForm").elements.namedItem("gender").value;
   var dob =new Date(yob + "/" + mm + "/" + dd);
   var weekDay = date.getDay();

   if (mm < 1 || mm > 12 || mm == 2 && dd > 29) {
      return document.getElementById("alert2").innerHTML = ("Invalid Month ,Please Try Again")
   ​
      }
      else if (dd < 1 || dd > 31) {
         return document.getElementById("alert2").innerHTML = ("Invalid Date ,Please Try Again")
      }
      else if(yob=== NaN || yob<1990 || yob>2019){
         document.getElementById("alert2").innerHTML = ("Invalid year please try Again");
      }