const pageOne=document.querySelector('.page-one');
const pageTwo=document.querySelector('.page-two');
const buttonSubmit=document.querySelector('.page-one button');
const pageGame=document.querySelector('.page-game');
const sourceText=document.querySelector('.page-game .game-source .getsoure .source');
const sourceTime=document.querySelector('.page-game .game-source .getsoure .time');
const pageFinish=document.querySelector('.finish');
const finishsource=document.querySelector('.finish h2 span');

let step=1;
let time=10;
let sourceGet=0;
let timeid;

buttonSubmit.addEventListener('click',function(){
    document.body.removeChild(pageOne);
    pageGame.style.display="block";
    init();
    timeid=setInterval(innerText,1000)
})

function init(){
    // 控制元素数量的东西加1
    step++;

    let [ normalColor, specialColor ] = getColor(step);

    let spacePos=Math.floor(Math.random()*(step*step));

    let bockwidth=100/step;

    let arr=[];

    for(let i=0;i<step*step;i++){

        let item=`<div class="block" style="width: ${bockwidth}% ; height:100px"><div
           style="background-color: #${i === spacePos ? specialColor : normalColor}"></div>
        </div>`;
        arr.push(item);
    }
    pageTwo.innerHTML=arr.join('');
    const allblock=document.querySelectorAll('.block');
    allblock[spacePos].addEventListener('click',function(){
        sourceGet++;
        sourceText.innerHTML='得分：'+sourceGet;
        init();
    })
}


 /**
   * 根据关卡等级返回相应的一般颜色和特殊颜色
   * @param {number} step 关卡
   */
  function getColor(step) {
    let random = Math.floor(100 / step);
    // let random = Math.floor(Math.abs(100 - 4 * step));
    let color = randomColor(17, 255),
      m = color.match(/[\da-z]{2}/g);
    console.log("m", m);
    console.log(typeof m[0]);
    console.log("color", color);
    for (let i = 0; i < m.length; i++) m[i] = parseInt(m[i], 16); //rgb
    let specialColor =
      getRandomColorNumber(m[0], random) +
      getRandomColorNumber(m[1], random) +
      getRandomColorNumber(m[2], random);
    return [color, specialColor];
  }


  function getRandomColorNumber(num, random) {
    let temp = Math.floor(num + (Math.random() < 0.5 ? -1 : 1) * random);
    if (temp > 255) {
      return "ff";
    } else if (temp > 16) {
      return temp.toString(16);
    } else if (temp > 0) {
      return "0" + temp.toString(16);
    } else {
      return "00";
    }
  }
  // 随机颜色 min 大于16
  function randomColor(min, max) {
    var r = randomNum(min, max).toString(16);
    var g = randomNum(min, max).toString(16);
    var b = randomNum(min, max).toString(16);
    return r + g + b;
  }
  // 随机数
  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  window.onload=function(){
    
  }

  function innerText(){
    sourceTime.innerHTML='时间：'+time;
    time--;
    if(time<0) {
        clearTimeout(timeid);
        finish();
    }
  }

  function finish(){
      document.body.removeChild(pageGame);
      pageFinish.style.display="block";
      finishsource.innerHTML=sourceGet;
  }
