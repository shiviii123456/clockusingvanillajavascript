//To make a digital clock 

var x=setInterval(display,1000);
function display(){
    var time=new Date();
    var hours=time.getHours();   //return hours in the form of numbers
    var min=time.getMinutes();   //return minutes in the form of numbers
    var sec=time.getSeconds();
    
  document.getElementById("digital").innerHTML=(change(hours)+":"+addzeroes(min)+":"+addzeroes(sec)+""+gettimeperiod(hours)); //string is used to typecast
}
function addzeroes(num){
    if(num<10){
        return "0"+String(num);
    }
    else{
        return String(num);
    }
}
function change(hours){
    var hour=hours%12;
    if(hour==0){
        hour=12;
    }
    return String(hour);
}
function gettimeperiod(hours){
    if(hours<12)
    return "AM";
    else
    return "PM";
}
//To make analog clock
var canvas=document.getElementById("canva");
var ctx=canvas.getContext('2d');

var radius=100;
var x=canvas.width/2;
var y=canvas.height/2;
    ctx.lineWidth=10;
    //drawing circle
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();

    ctx.strokesStyle="black";
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+radius,y);
    ctx.stroke();
   
    ctx.lineWidth=5;
    ctx.strokesStyle="red";
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x,y-radius);
    ctx.stroke();
    
    function drawTime(ctx, radius){
        var now = new Date();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        //hour
        hour = hour%12;
        hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
        drawHand(ctx, hour, radius*0.5, radius*0.07);
        //minute
        minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
        drawHand(ctx, minute, radius*0.8, radius*0.07);
        // second
        second = (second*Math.PI/30);
        drawHand(ctx, second, radius*0.9, radius*0.02);
        // second
        second = (second*Math.PI/30);
        drawHand(ctx, second, radius*0.9, radius*0.02);
      }
       drawHand(ctx,)







