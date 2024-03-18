//获取各元素，方便操作
var box=document.getElementById("box");//获得外层盒子
var innerBox=box.children[0];//获得内层div盒子
var SliderUL=innerBox.children[0];//获得Slider即UL
var imgArray=SliderUL.children;//获得UL里所有的Li（图片）数组
var NubmerBar=innerBox.children[1];//获得NumberBar即ol元素

var LRbutton=document.getElementById("LRbutton");//获得左右焦点按钮

var rightButton=document.getElementById("rightButton");//获得右焦点按钮

var imgWidth=innerBox.offsetWidth;//图片宽度等于内层div盒的偏移宽度(元素的width+元素的padding+边框的宽度)
var pic=0;//记录为第几张图片


//根据含有图片的li个数，创建对应数字小按钮,当鼠标放到每个按钮上时，图片执行滚动。
for(var i=0;i<imgArray.length;i++){
    var NubmerLi=document.createElement("li");//创建元素li
    NubmerBar.appendChild(NubmerLi);//将图片播放序列 li元素添加到类名为NumberBar的ol里去
    NubmerLi.setAttribute("index",i);//为每个li添加属性index，并为其指定值

    //为按钮注册mouseover事件
    NubmerLi.onclick=function () {
        //清除所有按钮的样式，排他法
        for (var j=0;j<NubmerBar.children.length;j++){
            NubmerBar.children[j].removeAttribute("class");//移除li元素的class属性
        }
        this.className = "NubmerButtonCurrent";//设置li的新类名，选中时的样式
        pic=this.getAttribute("index");//pic记录当前选中的图片编号
        animate(SliderUL,-pic*imgWidth);//移动ul到显示指定图片
    }
}

//设置NumberBar的ol中第一个li有背景颜色
NubmerBar.children[0].className = "NubmerButtonCurrent";
//克隆类名为Slider的ul中第一个li,加入到ul中的最后=====克隆,让结尾图片跳转不卡顿
SliderUL.appendChild(SliderUL.children[0].cloneNode(true));


//左右焦点实现点击切换图片功能
var timeId;//声明计时器
box.onmouseover=function () {
    LRbutton.style.display="block";//显示焦点
    clearInterval(timeId);//清除计时器
};
box.onmouseout=function () {
    LRbutton.style.display="none";//隐藏焦点
    timeId = setInterval(SliderAnimation,3000);//启动计时器，每过一段时间便自动点击向右按钮,即自动播放功能
};

rightButton.onclick=SliderAnimation;
function SliderAnimation() {
    //如果pic的值是4,恰巧是ul中li的个数-1的值,此时页面显示第五张图片,而用户会认为这是第一个图,
    //所以,如果用户再次点击按钮,用户应该看到第二个图片
    if (pic === imgArray.length - 1) {
        //如何从第5个图,跳转到第一个图
        pic = 0;//先还原pic=0
        SliderUL.style.left = 0 + "px";//把ul的位置还原成开始的默认位置
    }
    pic++;//立刻设置pic加1,那么此时用户就会看到下一个图片
    animate(SliderUL, -pic * imgWidth);//pic值加1之后,然后ul移动出去一个图片的距离
    //如果pic==4说明,此时显示第5个图(内容是第一张图片),第一个小按钮有颜色,
    if (pic === imgArray.length - 1) {
        //第五个按钮颜色干掉
        NubmerBar.children[NubmerBar.children.length - 1].className = "";
        //第一个按钮颜色设置上
        NubmerBar.children[0].className = "NubmerButtonCurrent";
    } else {
        //清除所有按钮的样式，排他法
        for (var i = 0; i < NubmerBar.children.length; i++) {
            NubmerBar.children[i].removeAttribute("class");
        }
        NubmerBar.children[pic].className = "NubmerButtonCurrent";
    }
}
leftButton.onclick=function () {
    if (pic === 0){
        pic=imgArray.length-1;
        SliderUL.style.left=-pic*imgWidth+"px";
    }
    pic--;
    animate(SliderUL,-pic*imgWidth);
    //清除所有按钮的样式，排他法
    for (var i = 0; i < NubmerBar.children.length; i++) {
        NubmerBar.children[i].removeAttribute("class");
    }
    NubmerBar.children[pic].className = "NubmerButtonCurrent";
};


//设置任意的一个元素,移动到指定的目标位置
function animate(element, target) {
    clearInterval(element.timeId);//清除计时器
    //定时器的id值存储到对象的一个属性中
    element.timeId = setInterval(function () {
        //获取元素的当前的位置,数字类型
        var current = element.offsetLeft;
        //每次移动的距离
        var step = 10;
        step = current < target ? step : -step;
        //当前移动到位置
        current += step;
        if (Math.abs(current - target) > Math.abs(step)) {
            element.style.left = current + "px";
        } else {
            //清理定时器
            clearInterval(element.timeId);
            //直接到达目标
            element.style.left = target + "px";
        }
    },8);
}


window.onblur = function () {
    clearInterval(timeId);//清除计时器,避免焦点不在这个网页时计时器不停止
};