function compute(p,r,y)
{
    
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = parseInt(document.getElementById("years").value);
    var yearInFuture = new Date().getFullYear() + y;
    var result = p * r * 0.01 * y;
    document.getElementById("displayOut").innerHTML = "If you deposit <mark>" + p + "</mark>,<br/>" +
    "at an interest rate of <mark>" + r + "&#37" + "</mark>,<br/>" +
    "You will receive an amount of <mark>" + result + "</mark>,<br/> " +
    "in the year <mark>" + yearInFuture + "</mark>"; 
    // document.getElementById("iRate").innerHTML = "<p> r #&#37  </p> </br>" ;

}    
//get range value
function getRangeValue() {
    document.getElementById("iRate").innerHTML = document.getElementById("rate").value + "&#37";
}    
