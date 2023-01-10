/* Lab:exp_9_Precise Traversing in a Duct using Pitot Tube
	 File name: checkob.js
   Author:Prakriti Dhang
*/
var checkrng;

function checkobn(){
 checkrng = document.getElementById('inpob').value;
 
 if (   1 <= checkrng && checkrng <=5  ){
     document.getElementById('measure').style.display='block';
     document.getElementById('obokbtn').disabled=true;
     document.getElementById('obbtn').disabled=true;
    
 } 
 else if(checkrng == ''){
  //alert("Enter value between 4 and 20")
    document.getElementById("checkobsn").style.display = "block";
    document.getElementById("checkobsn").classList.add("show");
    document.getElementById("alertmsg").innerHTML="You cannot keep empty. Enter value between 1 and 5";

    
 } 
else if(checkrng<6){
    document.getElementById("checkobsn").style.display = "block";
    document.getElementById("checkobsn").classList.add("show");
    document.getElementById("alertmsg").innerHTML="Enter greater than 4";
}

else if(checkrng>1){
    document.getElementById("checkobsn").style.display = "block";
    document.getElementById("checkobsn").classList.add("show");
    document.getElementById("alertmsg").innerHTML="Enter lesser than 20";
}

else{
   // alert("Take any value between 4 and 20");
   document.getElementById("checkobsn").style.display = "block";
    document.getElementById("checkobsn").classList.add("show");
    document.getElementById("alertmsg").innerHTML="Enter any value between 1 and 5";
    //document.getElementById('measure').style.display='none';
}

document.getElementById('inpob').readOnly=true;

}

function alertmsg(){
    document.getElementById('measure').style.display='none';
    document.getElementById("checkobsn").style.display = "none";
    document.getElementById("checkobsn").classList.remove("show");
    document.getElementById('obbtn').disabled=false;
    
}