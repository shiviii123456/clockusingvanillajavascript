
var x=setInterval(display,500);
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



var canvas=document.getElementById("canva");
ctx=canvas.getContext("2d");
var x=canvas.width/2;
var y=canvas.height/2;

function loop()
{
time=new Date();
h=time.getHours();
m=time.getMinutes();
s=time.getSeconds();


ctx.lineWidth=5;
ctx.beginPath();
ctx.fillStyle="white";
ctx.arc(x,y,140,0,Math.PI*2);
ctx.fill();
ctx.strokeStyle="black";
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.fillStyle="black";
ctx.arc(x,y,10,0,Math.PI*2);
ctx.fill();
ctx,strokeStyle="black";
ctx.stroke();
ctx.closePath();
drawNumber();

drawPointer(360*(h/12)+(m/60)*30-90,70,"black",5);
drawPointer(360*(m/60)+(s/60)*6-90,100,"black",5);
drawPointer(360*(s/60)+x-90,120,"black",2);
}

function drawNumber()
{
for(n=0;n<12;n++)
{
d=-60;
num = new Number(n+1);
str = num.toString();
dd = Math.PI/180*(d+n*30);
tx = Math.cos(dd)*120+140;
ty = Math.sin(dd)*120+160;
ctx.font = "26px Verdana";
ctx.fillStyle = "black";
ctx.fillText(str, tx, ty);
}
}

function drawPointer(deg,len,color,w)
{
rad=(Math.PI/180*deg);
x1=x+Math.cos(rad)*len;
y1=y+Math.sin(rad)*len;

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=w;
ctx.moveTo(x,y);
ctx.lineTo(x1,y1);
ctx.stroke();
}
setInterval(loop,500);


//making a alarm clock
const submit=document.getElementById("btn");
submit.addEventListener('click',setalarm);
//click default nature it submit the form and reload the page

 const audio2=new Audio();
 audio2.src= "sound/TF016.mp3";
 const audio3=new Audio();
 audio3.src= "sound/amt-vibchimer.mp3";
 const audio4=new Audio();
 audio4.src= "sound/amt-elecbell.mp3";
 const audio5=new Audio();
 audio5.src= "sound/amt-c3horn.mp3";
 

function ringbell(){
    $randomnumber =Math.ceil(4*Math.random());
    console.log($randomnumber);

    if($randomnumber==1){
        audio2.play();
    }
    if($randomnumber==2){
        audio3.play();
    }
    if($randomnumber==3){
        audio4.play();
     }
    if($randomnumber==4){
        audio5.play();
    }
}

function setalarm(e){
    e.preventDefault();
    const alarm=document.getElementById('alarm');
    alarmdate=new Date(alarm.value);
    console.log(`set the alarm ${alarmdate}`);
    nowtime= new Date();
      console.log(nowtime);
    let alarmtime=alarmdate-nowtime;
    console.log(alarmtime);
    if(alarmtime>=0){
        setTimeout(()=>{
            ringbell();
            console.log("ringing");
        },alarmtime);
    }
    else{
        alert("set correct alarm");
    }
    alarm.value="";

}
