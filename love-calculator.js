var name1=prompt("enter your name:");
name1=name1.toUpperCase();
var name2=prompt("enter her name:");
name2=name2.toUpperCase();
var n=Math.random();
n=n*100;
n=Math.floor(n)+1;
if(n>70){
alert("THE LOVE PERCENTAGE OF "+name1+" and "+name2+" is "+n+"% that's great!!");    
}
else{
alert("THE LOVE PERCENTAGE OF "+name1+" and "+name2+" is "+n+"%");
}
