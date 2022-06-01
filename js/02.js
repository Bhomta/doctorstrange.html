// 비교연산자
// console.log("비교연산자");

// var a = 10;
// var a = 20;

/*
let a = 10;
let b = 20;
let c = "10";
let d = 10;

let result;

console.log(a);
console.log(a > b);
console.log(a < b);
console.log(a == b);
console.log(a === b);

문자열이랑 숫자가 같은 지 물어보기 a == c (true), 두개는 숫자만 같으면 됨 
a === c(false) 3개는 타입까지 같아야 함.
console.log(a == c);
console.log(a === c);

console.log(a<=d); (true)





// 타입 알아보기
console.log(typeof(result));
// Boolean으로 변환해보기
console.log(Boolean(result));

console.log(b);
console.log(Boolean(b));
console.log(typeof(b));


*/


// 이벤트


// console.log(document.getElementById("prev_btn"));
let picNum = 1;
let trans = 1;
const totalNum = 3;


var picSetting = function(){   
    document.getElementById("pic_num").innerText = picNum;
}

//이벤트 헨들러
document.getElementById("prev_btn").onclick = function(){
    // console.log("prev click");
    prevFunction(); //매개인자, 메개변수
}

document.getElementById("next_btn").onclick = function(){
    //console.log("next click");
    nextFunction();
}

// var nextFunction = function(){
//     picNum--;
//     document.getElementById("pic_num").innerText = picNum;    
// }

var prevFunction = function(){
    if(picNum == 1){
        picNum = totalNum;
    }
    else {
        picNum--;
    }

    picSetting();    
}

var nextFunction = function(){
    if(picNum == totalNum){
        picNum = 1;
    }
    else {
        picNum++;
    }

    picSetting();       
}

//함수 선언
// var myFunction = function(a){
//     // console.log(a);
//     // console.log("click");
    
//     picNum = picNum + (1*a);
//     document.getElementById("pic_num").innerText = picNum;
    
//     // if(picNum == totalNum){
//     //     picNum = 1;
//     // }

//     // else {
//     //     picNum = picNum + (1*a);
//     // }

    

// }
