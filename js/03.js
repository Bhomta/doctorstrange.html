////let picWidth = 1440;

//document.getElementById("pic0").style.left = (1440 * 0) + "px";
//document.getElementById("pic1").style.left = (1440 * 1) + "px";
//document.getElementById("pic2").style.left = (1440 * 2) + "px"; //숫자 + 문자

//문자 + 숫자 -> + 연결연산자 0,1,2


//초기 변수 선언 
let picWidth = 1440;
let moveNum = 0;

//이미지 위치 세팅
for(var i=0; i<3; i++){
    document.getElementById("pic" + i).style.left = (picWidth * i) + "px";
}
document.getElementById("temp").innerText = moveNum;

//동적으로 점 인디케이터 생성
let dotList = document.createElement("ul");
document.getElementById()
console.log(dotList);

//이미지 움직임 함수 선언
var moveFunction = function(){
    for(var i=0; i<3; i++){
        document.getElementById("pic" + i).style.left = (picWidth * (i-moveNum)) + "px";
    }

    document.getElementById("temp").innerText = moveNum;
} 

//좌우 버튼 제어
document.getElementById("prev_btn").onclick = function(){
    //document.getElementById("pic0").style.left = (1440 * 1) + "px";
    //document.getElementById("pic1").style.left = (1440 * 2) + "px";
    //document.getElementById("pic2").style.left = (1440 * 3) + "px";
    console.log("이전 버튼 클릭");
    if(moveNum > 0){
        moveNum--;
    }

    else {
        moveNum = 2;
    }

    moveFunction();

};


document.getElementById("next_btn").onclick = function(){
    //document.getElementById("pic0").style.left = (1440 * -1) + "px";
    //document.getElementById("pic1").style.left = (1440 * -2) + "px";
    //document.getElementById("pic2").style.left = (1440 * -3) + "px";

    console.log("다음 버튼 클릭");
    if(moveNum < 2){
        moveNum++;
    }

    else {
        moveNum = 0;
    }

    moveFunction();

};

