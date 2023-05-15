// console.log("오늘은~ 자바스크립트")
// // number ,  string(문자) , object , null(정의 되어있지않은 값) , undefinded(데이터타입을 모르겠다) , bool(true,false) 0아니면 true로인식
// var today = 1; //숫자 반드시 따움표에 넣지 않을 것
//     today = 5;  //tody라는 변수는 데이터타입이 숫자이며 값은 5
//     today = 5 + 0
//     today = 4 + 1
//     today = 1 + "일" + 4 + 10; //1일410

//     console.log(today, typeof today)  //콘솔에서 확인
//        today = parseInt(today)
//        //NaN not a number 
//     console.log(today, typeof today)

    // window.onload = function(){
    //     document.body.innerHTML = "<h1>"+today+"<h1>" ;    
    // }

//1.콘솔
var myname = "김가림"
var number = 1;
        
console.log(myname)
console.log(typeof myname)
document.body.innerHTML="<h2>"+myname+"<h2>";
document.body.innerHTML+="<p>자바스크립트"+number+"<p>";
