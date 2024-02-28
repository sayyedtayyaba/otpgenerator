function otpgen(){
    let min=100;
    let max=999;
    return(Math.floor(Math.random()*(max-min+1)*min));
}
document.getElementById("gen").onclick=function(){
    document.getElementById('otp').innerHTML=otpgen();
}