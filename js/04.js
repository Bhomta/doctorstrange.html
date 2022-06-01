// 초기 변수 선언
let picWidth = 1440;
let moveNum = 0;
const totalNum = 5;
 
// 이미지 위치 셋팅
for(var i=0; i<totalNum; i++){
    document.getElementById("pic" + i).style.left = (picWidth * i) + "px";
}
document.getElementById("temp").innerText = moveNum;
document.getElementById("text0").classList.add("active");
 
// 목록 아이콘 셋팅

// dotList 변수에 ul을 만든다.
let dotList = document.createElement("ul");

// 속성 부여 : ul 안의 아이디는 dotList로 지정
dotList.setAttribute("id", "dotList");



document.getElementById("ImgSet").appendChild(dotList);

for(var i=0; i<totalNum; i++){
    var li = document.createElement("li");
    li.setAttribute("id", "li" + i);
    li.innerText = i;
    document.getElementById("dotList").appendChild(li);

    document.getElementById("li" + i).onclick = function(){
        console.log("ok");

        // 현재 클릭한 아이디가 누군지 알려주는 코드
        console.log(this.id);
        
        // this.id 를 잘라라 2번째에서 3번째까지  2에서 시작하고 길이는
        console.log(this.id.substr(2,1));
 
        aniFunction();
        
        moveNum = Number(this.id.substr(2,3));
        document.getElementById("text" + moveNum).classList.remove("activeOut");
        document.getElementById("text" + moveNum).classList.add("active");
        moveFunsction();
    }
}
document.getElementById("li" + moveNum).classList.toggle("active");

var aniFunction = function(){
    document.getElementById("text" + moveNum).classList.remove("active");
    document.getElementById("text" + moveNum).classList.add("activeOut");

}

// 이미지 움직임 함수 선언
var moveFunsction = function(){
    for(var i=0; i<totalNum; i++){
        document.getElementById("pic" + i).style.left = (picWidth * (i-moveNum)) + "px";
    }
    document.getElementById("temp").innerText = moveNum;
    for(var i=0; i<totalNum; i++){
        document.getElementById("li" + i).classList.remove("active");
    }
    document.getElementById("li" + moveNum).classList.toggle("active");
    
    document.getElementById("text" + moveNum).classList.remove("activeOut");
    document.getElementById("text" + moveNum).classList.add("active");
}
 
// 좌우 버튼 셋팅
// button태그 생성
let prev_btn = document.createElement("button");
let next_btn = document.createElement("button");

prev_btn.setAttribute("id", "prev_btn");
next_btn.setAttribute("id", "next_btn");

//웹에 prev_btn이라는 텍스트 사용
prev_btn.innerText = "이전으로";
next_btn.innerText = "다음으로";

document.getElementById("ImgSet").appendChild(prev_btn);
document.getElementById("ImgSet").appendChild(next_btn);

prev_btn.classList.add("disabled");
 

document.getElementById("prev_btn").onclick = function(){
    aniFunction();

    if(moveNum > 0){
        moveNum--;
    }

    else {
        moveNum = 4;
    }
    moveFunsction();
}


document.getElementById("next_btn").onclick = function(){
    aniFunction();

    if(moveNum < (totalNum-1)){
        moveNum++;
    }

    else {
        moveNum = 0;
    }
    moveFunsction();
}
