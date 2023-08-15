var userNameUp = document.getElementById('userName-up');
var mailUp = document.getElementById('mail-up');
var PassUp= document.getElementById('Pass-up');
var signUpBtn = document.getElementById('signUp');
var accountList=[]  
// var user=``;
var welUser =document.getElementById('usernamewel');
var userNameIn = document.getElementById('userName');
var userPassIn = document.getElementById('userPass');
var signInBtn = document.getElementById('sign-in-btn');
var mailValid=``;
var logOut = document.getElementById('logOut');
// /////////////////////////////////////////////////////////////////////////
if(localStorage.getItem('account') ==null){
    var accountList=[]   
   }
   else{
       var accountList=[] = JSON.parse(localStorage.getItem('account'));
    //    console.log(accountList) 
   }

   if(localStorage.getItem('users') ==null){
    var user=[]   
   }
   else{
       var user=[] = JSON.parse(localStorage.getItem('users'));
    //    console.log(accountList) 
   }
   console.log(user[0])
   document.getElementById('usernamewel').innerHTML=`Welcome ${user[0]}`;

   function logout(){
    user=[];
    localStorage.setItem('users',JSON.stringify(user));
    console.log(user)
   }
   logOut.onclick= function(){
    logout();
   }