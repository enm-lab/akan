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

      var maleName = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi", "Kwame"];
      ​
       var femaleName =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
      ​
       var daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      ​
      if(weekDay===0 &&gender === "male"){
         return document.getElementById("alert").innerHTML = ("Your Akan name is : ")+ maleName[weekDay]+("  .You were born on a : "+ daysOfTheWeek[weekDay]);
      ​
       }
       else if(weekDay=== 1 &&gender === "male"){
         return document.getElementById("alert").innerHTML = ("Your Akan name is : ")+ maleName[weekDay]+("  .You were born on a : "+ daysOfTheWeek[weekDay]);
      ​
       }
       else if(weekDay===2 && gender === "male"){
         return document.getElementById("alert").innerHTML = ("Your Akan name is : ")+ maleName[weekDay]+("  .You were born on a : "+ daysOfTheWeek[weekDay]);
      ​
       }
       else if(weekDay===3 &&gender === "male"){
         return document.getElementById("alert").innerHTML = ("Your Akan name is : ")+ maleName[weekDay]+("  .You were born on a : "+ daysOfTheWeek[weekDay]);
      ​
       }
       else if(weekDay===4 &&gender === "male"){
         return document.getElementById("alert").innerHTML = ("Your Akan name is : ")+ maleName[weekDay]+("  .You were born on a : "+ daysOfTheWeek[weekDay]);
      ​
       }
       else if(weekDay===5 &&gender === "male"){
         return document.getElementById("alert").innerHTML = ("Your Akan name is : ")+ maleName[weekDay]+("  .You were born on a : "+ daysOfTheWeek[weekDay]);
      ​
       }
       else if(weekDay===6 &&gender === "male"){
         return document.getElementById("alert").innerHTML = ("Your Akan name is : ")+ maleName[weekDay]+("  .You were born on a : "+ daysOfTheWeek[weekDay]);
      ​
       }
      ​
      if(weekDay===0 &&gender === "female"){
         return document.getElementById("alert").innerHTML = ("Your Akan name is : ")+ femaleName[weekDay]+("  .You were born on a : "+ daysOfTheWeek[weekDay]);
      ​
       }
       else if(weekDay=== 1 &&gender === "female"){
         return document.getElementById("alert").innerHTML = ("Your Akan name is : ")+ femaleName[weekDay]+("  .You were born on a : "+ daysOfTheWeek[weekDay]);
      ​
       }
       else if(weekDay===2 && gender === "female"){
         return document.getElementById("alert").innerHTML = ("Your Akan name is : ")+ femaleName[weekDay]+("  .You were born on a : "+ daysOfTheWeek[weekDay]);
      ​
       }
       else if(weekDay===3 &&gender === "female"){
         return document.getElementById("alert").innerHTML = ("Your Akan name is : ")+ femaleName[weekDay]+("  .You were born on a : "+ daysOfTheWeek[weekDay]);
      ​
      ​
       }
       else if(weekDay===4 &&gender === "female"){
         return document.getElementById("alert").innerHTML = ("Your Akan name is : ")+ femaleName[weekDay]+("  .You were born on a : "+ daysOfTheWeek[weekDay]);
      ​
      ​
       }
       else if(weekDay===5 &&gender === "female"){
         return document.getElementById("alert").innerHTML = ("Your Akan name is : ")+ femaleName[weekDay]+("  .You were born on a : "+ daysOfTheWeek[weekDay]);
      ​
      ​
       }
       else if(weekDay===6 &&gender === "female"){
         return document.getElementById("alert").innerHTML = ("Your Akan name is : ")+ femaleName[weekDay]+("  .You were born on a : "+ daysOfTheWeek[weekDay]);
      ​
      ​
       }
       
           
       }
      ​