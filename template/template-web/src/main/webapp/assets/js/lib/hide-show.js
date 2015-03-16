// JavaScript Document

 $(document).ready(function(){
        $("select").change(function(){
            $( "select option:selected").each(function(){
                if($(this).attr("value")=="a29"){
                    $(".box29").hide();
                    $(".a29").show();
                }
                if($(this).attr("value")=="b29"){
                    $(".box29").hide();
                    $(".b29").show();
                }
                if($(this).attr("value")=="c29"){
                    $(".box29").hide();
                    $(".c29").show();
                }
				 if($(this).attr("value")=="d29"){
                    $(".box29").hide();
                    $(".d29").show();
                }
				
				
            });
        }).change();
    });
 
   $(document).ready(function(){
        $("select").change(function(){
            $( "select option:selected").each(function(){
                if($(this).attr("value")=="red99"){
                    $(".box99").hide();
                    $(".red99").show();
                }
                if($(this).attr("value")=="green99"){
                    $(".box99").hide();
                    $(".green99").show();
                }
                if($(this).attr("value")=="blue99"){
                    $(".box99").hide();
                    $(".blue99").show();
                }
				
				
            });
        }).change();
    });
   
   function setVisibility(id1, id2, id3) {
if(document.getElementById('bt1').value=='Hide Layer'){
document.getElementById('bt1').value = 'Show Layer';
document.getElementById(id1).style.display = 'none';
}else{
document.getElementById('bt1').value = 'Hide Layer';
document.getElementById(id1).style.display = 'inline';
document.getElementById(id2).style.display = 'none';
document.getElementById(id3).style.display = 'Show Layer';
}
}

function coverageid(target){
document.getElementById(target).style.display = 'block';
}
function coverageid_1(target){
document.getElementById(target).style.display = 'block';
}
function coverageid_2(target){
document.getElementById(target).style.display = 'block';
}

function displaydiv1()
{
$("#clickdiv1").hide();
$("#contractdiv").show();
}
function displaydiv2()
{
$("#clickdiv2").hide();
$("#licensediv2").show();
}


function showrow1()
{
$("#showrow").show();
}
function show1(msg)
{
if(msg=="pm")
{
$("#propertym1").show();
$("#appraisals1").hide();
$("#inspections1").hide();
}else if(msg=="ap")
{
$("#propertym1").hide();
$("#appraisals1").show();
$("#inspections1").hide();
}
else if(msg=="is")
{
$("#propertym1").hide();
$("#appraisals1").hide();
$("#inspections1").show();
}

}


function show2(msg)
{
if(msg=="stco")
{
$("#primaryco").hide();
$("#billingco").hide();
$("#legalco").hide();
$("#technicalco").hide();
$("#afterho").hide();
$("#selectco").hide();
}	
if(msg=="pco")
{
$("#primaryco").show();
$("#billingco").hide();
$("#legalco").hide();
$("#technicalco").hide();
$("#afterho").hide();
$("#selectco").hide();
}
else if(msg=="bco")
{
$("#primaryco").hide();
$("#billingco").show();
$("#legalco").hide();
$("#technicalco").hide();
$("#afterho").hide();
$("#selectco").hide();
}

else if(msg=="lco")
{
$("#primaryco").hide();
$("#billingco").hide();
$("#legalco").hide();
$("#technicalco").hide();
$("#afterho").hide();
$("#selectco").hide();
}

else if(msg=="tco")
{
$("#primaryco").hide();
$("#billingco").hide();
$("#legalco").hide();
$("#technicalco").hide();
$("#afterho").hide();
$("#selectco").hide();
}

else if(msg=="aho")
{
$("#primaryco").hide();
$("#billingco").hide();
$("#legalco").hide();
$("#technicalco").hide();
$("#afterho").hide();
$("#selectco").hide();
}

}




function showinputs1(msg)
{
if(msg=="ffee")
{
$("#inputfee1").show();
$("#percent1").hide();
}	
if(msg=="percentage1")
{
$("#inputfee1").hide();
$("#percent1").show();
} 
if(msg=="gffp")
{
$("#inputfee1").show();
$("#percent1").show();
} 
if(msg=="lffp")
{
$("#inputfee1").show();
$("#percent1").show();
} 
if(msg=="ffpp")
{
$("#inputfee1").show();
$("#percent1").show();
} 
}


function showinputs2(msg)
{
if(msg=="ffee2")
{
$("#inputfee2").show();
$("#percent2").hide();
 
}	
if(msg=="percentage2")
{
$("#inputfee2").hide();
$("#percent2").show();
} 
if(msg=="gffp2")
{
$("#inputfee2").show();
$("#percent2").show();
} 
if(msg=="lffp2")
{
$("#inputfee2").show();
$("#percent2").show();
} 
if(msg=="ffpp2")
{
$("#inputfee2").show();
$("#percent2").show();
} 

}

function showinputs3(msg)
{
if(msg=="ffee3")
{
$("#inputfee3").show();
$("#percent3").hide();
 
}	
if(msg=="percentage3")
{
$("#inputfee3").hide();
$("#percent3").show();
} 
if(msg=="gffp3")
{
$("#inputfee3").show();
$("#percent3").show();
} 
if(msg=="lffp3")
{
$("#inputfee3").show();
$("#percent3").show();
}
if(msg=="ffpp3")
{
$("#inputfee3").show();
$("#percent3").show();
}
}

 
 
function displayrow1()
{
$("#clickrow1").hide();
$("#contractrow").show();
}
function displayrow2()
{
$("#clickrow2").hide();
$("#licenserow2").show();
} 