/* Lab: Mine Automation and Virtual Reality
    Exp: Precise Traversing in a Duct using Pitot Tube
	 File name: main.js
   Author:Prakriti Dhang
*/
var obcount;
var count = 0;
var canvasc=10; /* inclned canvas count  */
var countbtnclk; /* count measure button click */
var obsnt;

function showpanel(){
    document.getElementById('btninst9').disabled=false;
    document.getElementById('obsno').style.display="block";
    document.getElementById('yesbtn').disabled=true;
}

function exitexp(){
   window.close();
}

function noexitexp(){
    $("#yesbtn").fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
}



function clckmes() {
    obcount = document.getElementById('inpob').value;
    
    count++;
    countbtnclk=count;
   
   
    if(countbtnclk==1){   
      obsnt = '1';
    //distance='0.026D'
   document.getElementById('msbtn').innerHTML="2nd point";
   document.getElementById("mpnod").value='0.026';
     document.getElementById("velpread").value='12.704';
   document.getElementById("avgvread").value='4.763';
   
    /* Inclined manometer reading*/
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    let centerX = 2, centerY = 235;
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.beginPath();
    
    ctx.moveTo(centerX, centerY-canvasc);   
    
    
    ctx.lineTo(2, 240);
    ctx.stroke();
    document.getElementById('r1').style.display="block";
    document.getElementById('tr1').style.display="block";
    document.getElementById('msbtn').disabled=true;
    document.getElementById('obbtn').disabled=false;
    }

    if(countbtnclk==2){   
      obsnt = '2';
        document.getElementById('msbtn').innerHTML="3rd point"
        document.getElementById("mpnod").value='0.082';
     document.getElementById("velpread").value='13.213';
    document.getElementById("avgvread").value='4.857';
         /* Inclined manometer reading*/
         var c = document.getElementById("myCanvas");
         var ctx = c.getContext("2d");
         let centerX = 2, centerY = 235;
         ctx.strokeStyle = 'red';
         ctx.lineWidth = 5;
         ctx.beginPath();
         
         ctx.moveTo(centerX, centerY-canvasc);   
         
         
         ctx.lineTo(2, 240);
         ctx.stroke();
         document.getElementById('r1').style.display="none";
         document.getElementById('tr1').style.display="none";
         document.getElementById('r2').style.display="block";
        document.getElementById('tr2').style.display="block";
         document.getElementById('msbtn').disabled=true;
         document.getElementById('obbtn').disabled=false;
         }

         if(countbtnclk==3){   
            obsnt = '3';
            document.getElementById('msbtn').innerHTML="4th point"
            document.getElementById("mpnod").value='0.146';
     document.getElementById("velpread").value='14.252';
    document.getElementById("avgvread").value='5.045';
             /* Inclined manometer reading*/
             var c = document.getElementById("myCanvas");
             var ctx = c.getContext("2d");
             let centerX = 2, centerY = 235;
             ctx.strokeStyle = 'red';
             ctx.lineWidth = 5;
             ctx.beginPath();
             
             ctx.moveTo(centerX, centerY-canvasc);   
             
             
             ctx.lineTo(2, 240);
             ctx.stroke();
             document.getElementById('r2').style.display="none";
             document.getElementById('tr2').style.display="none";
             document.getElementById('r3').style.display="block";
             document.getElementById('tr3').style.display="block";
             document.getElementById('msbtn').disabled=true;
             document.getElementById('obbtn').disabled=false;
             }

             if(countbtnclk==4){   
               obsnt = '4';
                document.getElementById('msbtn').innerHTML="5th point"
                document.getElementById("mpnod").value='0.226';
                document.getElementById("velpread").value='17.453';
               document.getElementById("avgvread").value='5.586';
                 /* Inclined manometer reading*/
                 var c = document.getElementById("myCanvas");
                 var ctx = c.getContext("2d");
                 let centerX = 2, centerY = 235;
                 ctx.strokeStyle = 'red';
                 ctx.lineWidth = 5;
                 ctx.beginPath();
                 
                 ctx.moveTo(centerX, centerY-canvasc);   
                 
                 
                 ctx.lineTo(2, 240);
                 ctx.stroke();
                 document.getElementById('r3').style.display="none";
                document.getElementById('tr3').style.display="none";
                 document.getElementById('r4').style.display="block";
                document.getElementById('tr4').style.display="block";
                 document.getElementById('msbtn').disabled=true;
                 document.getElementById('obbtn').disabled=false;
                 }



                 if(countbtnclk==5){   
                  obsnt = '5';
                    document.getElementById('msbtn').innerHTML="6th point"
                    document.getElementById("mpnod").value='0.342';
                    document.getElementById("velpread").value='18.096';
                   document.getElementById("avgvread").value='5.685';
                     /* Inclined manometer reading*/
                     var c = document.getElementById("myCanvas");
                     var ctx = c.getContext("2d");
                     let centerX = 2, centerY = 235;
                     ctx.strokeStyle = 'red';
                     ctx.lineWidth = 5;
                     ctx.beginPath();
                     
                     ctx.moveTo(centerX, centerY-canvasc);   
                     
                     
                     ctx.lineTo(2, 240);
                     ctx.stroke();
                     document.getElementById('r4').style.display="none";
                     document.getElementById('tr4').style.display="none";
                     document.getElementById('r5').style.display="block";
                     document.getElementById('tr5').style.display="block";
                     document.getElementById('msbtn').disabled=true;
                     document.getElementById('obbtn').disabled=false;
                     }


                     if(countbtnclk==6){   
                        obsnt = '6';
                        document.getElementById('msbtn').innerHTML="7th point"
                        document.getElementById("mpnod").value='0.500';
                        document.getElementById("velpread").value='18.351';
                       document.getElementById("avgvread").value='5.725';
                         /* Inclined manometer reading*/
                         var c = document.getElementById("myCanvas");
                         var ctx = c.getContext("2d");
                         let centerX = 2, centerY = 235;
                         ctx.strokeStyle = 'red';
                         ctx.lineWidth = 5;
                         ctx.beginPath();
                         
                         ctx.moveTo(centerX, centerY-canvasc);   
                         
                         
                         ctx.lineTo(2, 240);
                         ctx.stroke();
                         document.getElementById('r5').style.display="none";
                        document.getElementById('tr5').style.display="none";
                         document.getElementById('r6').style.display="block";
                         document.getElementById('tr6').style.display="block";
                         document.getElementById('msbtn').disabled=true;
                         document.getElementById('obbtn').disabled=false;
                         }
                         if(countbtnclk==7){   
                           obsnt = '7';
                            document.getElementById('msbtn').innerHTML="8th point"
                            document.getElementById("mpnod").value='0.658';
                            document.getElementById("velpread").value='18.160';
                           document.getElementById("avgvread").value='5.695';
                             /* Inclined manometer reading*/
                             var c = document.getElementById("myCanvas");
                             var ctx = c.getContext("2d");
                             let centerX = 2, centerY = 235;
                             ctx.strokeStyle = 'red';
                             ctx.lineWidth = 5;
                             ctx.beginPath();
                             
                             ctx.moveTo(centerX, centerY-canvasc);   
                             
                             
                             ctx.lineTo(2, 240);
                             ctx.stroke();
                             document.getElementById('r6').style.display="none";
                             document.getElementById('tr6').style.display="none";
                             document.getElementById('r7').style.display="block";
                             document.getElementById('tr7').style.display="block";
                             document.getElementById('msbtn').disabled=true;
                             document.getElementById('obbtn').disabled=false;
                             }
   


                             if(countbtnclk==8){   
                              obsnt = '8';
                                document.getElementById('msbtn').innerHTML="9th point"
                                document.getElementById("mpnod").value='0.774';
                                document.getElementById("velpread").value='17.422';
                               document.getElementById("avgvread").value='5.578';
                                 /* Inclined manometer reading*/
                                 var c = document.getElementById("myCanvas");
                                 var ctx = c.getContext("2d");
                                 let centerX = 2, centerY = 235;
                                 ctx.strokeStyle = 'red';
                                 ctx.lineWidth = 5;
                                 ctx.beginPath();
                                 
                                 ctx.moveTo(centerX, centerY-canvasc);   
                                 
                                 
                                 ctx.lineTo(2, 240);
                                 ctx.stroke();
                                 document.getElementById('r7').style.display="none";
                                 document.getElementById('tr7').style.display="none";
                                 document.getElementById('r8').style.display="block";
                                 document.getElementById('tr8').style.display="block";
                                 document.getElementById('msbtn').disabled=true;
                                 document.getElementById('obbtn').disabled=false;
                                 }

                                 if(countbtnclk==9){   
                                    obsnt = '9';
                                    document.getElementById('msbtn').innerHTML="10th point"
                                    document.getElementById("mpnod").value='0.854';
                                    document.getElementById("velpread").value='14.289';
                                   document.getElementById("avgvread").value='5.051';
                                     /* Inclined manometer reading*/
                                     var c = document.getElementById("myCanvas");
                                     var ctx = c.getContext("2d");
                                     let centerX = 2, centerY = 235;
                                     ctx.strokeStyle = 'red';
                                     ctx.lineWidth = 5;
                                     ctx.beginPath();
                                     
                                     ctx.moveTo(centerX, centerY-canvasc);   
                                     
                                     
                                     ctx.lineTo(2, 240);
                                     ctx.stroke();
                                     document.getElementById('r8').style.display="none";
                                     document.getElementById('tr8').style.display="none";
                                     document.getElementById('r9').style.display="block";
                                     document.getElementById('tr9').style.display="block";
                                     document.getElementById('msbtn').disabled=true;
                                     document.getElementById('obbtn').disabled=false;
                                     }



                                     if(countbtnclk==10){   
                                       obsnt = '10';
                                        document.getElementById('msbtn').innerHTML="11th point"
                                        document.getElementById("mpnod").value='0.918';
                                        document.getElementById("velpread").value='13.453';
                                       document.getElementById("avgvread").value='4.901';
                                         /* Inclined manometer reading*/
                                         var c = document.getElementById("myCanvas");
                                         var ctx = c.getContext("2d");
                                         let centerX = 2, centerY = 235;
                                         ctx.strokeStyle = 'red';
                                         ctx.lineWidth = 5;
                                         ctx.beginPath();
                                         
                                         ctx.moveTo(centerX, centerY-canvasc);   
                                         
                                         
                                         ctx.lineTo(2, 240);
                                         ctx.stroke();
                                         document.getElementById('r9').style.display="none";
                                         document.getElementById('tr9').style.display="none";
                                         document.getElementById('r10').style.display="block";
                                         document.getElementById('tr10').style.display="block";
                                         document.getElementById('msbtn').disabled=true;
                                         document.getElementById('obbtn').disabled=false;
                                         }

                                         if(countbtnclk==11){   
                                          obsnt = '11';
                                            document.getElementById('msbtn').innerHTML="11th point"
                                            document.getElementById("mpnod").value='0.974';
                                        document.getElementById("velpread").value='12.418';
                                       document.getElementById("avgvread").value='4.709';
                                             /* Inclined manometer reading*/
                                             var c = document.getElementById("myCanvas");
                                             var ctx = c.getContext("2d");
                                             let centerX = 2, centerY = 235;
                                             ctx.strokeStyle = 'red';
                                             ctx.lineWidth = 5;
                                             ctx.beginPath();
                                             
                                             ctx.moveTo(centerX, centerY-canvasc);   
                                             
                                             
                                             ctx.lineTo(2, 240);
                                             ctx.stroke();
                                             document.getElementById('r10').style.display="none";
                                             document.getElementById('tr10').style.display="none";
                                             document.getElementById('r11').style.display="block";
                                             document.getElementById('tr11').style.display="block";
                                             document.getElementById('msbtn').disabled=true;
                                             document.getElementById('obbtn').disabled=false;
                                             }

canvasc+=7;


 
}
    

