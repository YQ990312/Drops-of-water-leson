const speed=document.querySelector('.speed');
const bar=document.querySelector('.speed-bar');
const voideo=document.querySelector('.flex')

function changespeed(event){

    console.log("杨")
    const location_y=event.pageY-this.offsetTop; //offsetTop获取某个dom结构到浏览器顶部的距离
    const height_demo= location_y/this.offsetHeight; // offsetHeight用来获取某dom结构的自身高度
    const min= 0.2 ;
    const max= 4 ;
    const height_= Math.round(height_demo * 100) + '%';  //四舍五路 像0取整
    console.log(height_)


    const speettext = height_demo * (max - min) + min;


    console.log(speettext)
    bar.style.height=height_;
    bar.textContent=speettext.toFixed(2)+'x';
    voideo.playbackRate=speettext;
}

speed.addEventListener('mousemove',changespeed)