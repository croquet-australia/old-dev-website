// JavaScript Document
var d = new Date(document.lastModified);
var curr_date = d.getDate();
var curr_month = d.getMonth() + 1; //months are zero based
var curr_year = d.getFullYear();
var mmm = 
    ( 1==curr_month)?'Jan':( 2==curr_month)?'Feb':(3==curr_month)?'Mar':
    ( 4==curr_month)?'Apr':( 5==curr_month)?'May':(6==curr_month)?'Jun':
    ( 7==curr_month)?'Jul':( 8==curr_month)?'Aug':(9==curr_month)?'Sep':
    (10==curr_month)?'Oct':(11==curr_month)?'Nov':'Dec';
document.write( + curr_date + "-" + mmm + "-" + curr_year);