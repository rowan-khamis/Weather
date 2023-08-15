var userNameUp = document.getElementById('userName-up');
var mailUp = document.getElementById('mail-up');
var PassUp= document.getElementById('Pass-up');
var signUpBtn = document.getElementById('signUp');
var accountList=[]  
var user=``;
var welUser =document.getElementById('usernamewel');
var userNameIn = document.getElementById('userName');
var userPassIn = document.getElementById('userPass');
var signInBtn = document.getElementById('sign-in-btn');
var mailValid=``;

// /////////////////////////////////////////////////////////////////////////
if(localStorage.getItem('account') ==null){
    var accountList=[]   
   }
   else{
       var accountList=[] = JSON.parse(localStorage.getItem('account'));
    //    console.log(accountList) 
   }
//    //////////////////////////////////////////////////////////////////////
// //////////////////////////sign up //////////////////////////////

function valid(){

}
function createAccount(){

    var account={
        userName:userNameUp.value,
        userMail:mailUp.value,
        userPass:PassUp.value
    }
    accountList.push(account);
        console.log(accountList);
        console.log(account);
        localStorage.setItem('account',JSON.stringify(accountList));
        document.getElementById('signUpStatus').innerHTML=`success`; 
        document.getElementById('signUpStatus').style.color="green";
}
if(signUpBtn != ''){
signUpBtn.onclick=function(){
    if(userNameUp.value == "" || PassUp.value == "" || mailUp.value == ""){
        document.getElementById('signUpStatus').innerHTML=`All inputs is required`;
        document.getElementById('signUpStatus').style.color="red";
    }
    else{
        if (isEmailExist() == false){
         document.getElementById('signUpStatus').innerHTML=`email already exists`;   
         document.getElementById('signUpStatus').style.color="red";
        }
        else{
    createAccount();
}
}
}
}
function isEmailExist() {
    for (var i = 0; i < accountList.length; i++) {
        if (accountList[i].userMail.toLowerCase() == mailUp.value.toLowerCase()) {
            return false
        }
    }
}


