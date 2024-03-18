window.onload = function () {
    /*鼠标移入显示下拉菜单动画*/
    var arrow = document.getElementsByClassName("arrow");
    var nav2 = document.getElementById("header_center2");
    var nav2ul = nav2.children[2];
    var nav2ulc = nav2.children[2].children.length;
    var nav4 = document.getElementById("header_center4");
    var nav4ul = nav4.children[2];
    var nav4ulc = nav4.children[2].children.length;
    nav2.addEventListener('mouseenter',function () {
        var x = 0;
        var h = 0;
        var mt = -15;
        var at = 48;
        nav2ul.style.display = 'block';
        arrow[0].style.display = 'block';
        clearInterval(nav2ul.timer);
        nav2ul.timer = setInterval(function(){
            x = x + 0.1;
            h = h + 70*nav2ulc/10;
            mt++;
            at++;
            nav2ul.style.height = h +'px';
            arrow[0].style.opacity = x - 0.4;
            nav2ul.style.opacity = x;
            nav2ul.style.marginTop = mt + 1 + 'px';
            arrow[0].style.top = at + 1 + 'px';
            if(nav2ul.style.opacity>=1) {
                nav2ul.style.opacity = '1';
                arrow[0].style.opacity = '1';
                clearInterval(nav2ul.timer);
            }
        },40);
    });
    nav2.addEventListener('mouseleave',function () {
        var x = 1;
        var h = nav2ulc*70;
        var mt = -5;
        var at = 58;
        clearInterval(nav2ul.timer);
        nav2ul.timer = setInterval(function(){
            x = x - 0.1;
            h = h - 70*nav2ulc/10;
            mt--;
            at--;
            nav2ul.style.height = h +'px';
            nav2ul.style.opacity = x;
            arrow[0].style.opacity = x - 0.4;
            nav2ul.style.marginTop = mt - 1 + 'px';
            arrow[0].style.top = at - 1 + 'px';
            if(nav2ul.style.opacity <= 0) {
                nav2ul.style.opacity = '0';
                nav2ul.style.display = 'none';
                arrow[0].style.display = 'none';
                clearInterval(nav2ul.timer);
            }
        },40);

    });
    nav4.addEventListener('mouseenter',function () {
        var x = 0;
        var h = 0;
        var mt = -15;
        var at = 48;
        nav4ul.style.display = 'block';
        arrow[1].style.display = 'block';
        clearInterval(nav4ul.timer);
        nav4ul.timer = setInterval(function(){
            x = x + 0.1;
            h = h + 70*nav4ulc/10;
            mt++;
            at++;
            nav4ul.style.height = h +'px';
            nav4ul.style.opacity = x;
            arrow[1].style.opacity = x - 0.4;
            nav4ul.style.marginTop = mt + 1 + 'px';
            arrow[1].style.top = at + 1 + 'px';
            if(nav4ul.style.opacity>=1) {
                nav4ul.style.opacity = '1';
                arrow[1].style.opacity = '1';
                clearInterval(nav4ul.timer);
            }
        },40);
    });
    nav4.addEventListener('mouseleave',function () {
        var x = 1;
        var h = nav4ulc*70;
        var mt = -5;
        var at = 58;
        clearInterval(nav4ul.timer);
        nav4ul.timer = setInterval(function(){
            x = x - 0.1;
            h = h - 70*nav2ulc/10;
            mt--;
            at--;
            nav4ul.style.height = h +'px';
            nav4ul.style.opacity = x;
            arrow[1].style.opacity = x - 0.4;
            nav4ul.style.marginTop = mt - 1 + 'px';
            arrow[1].style.top = at - 1 + 'px';
            if(nav4ul.style.opacity <= 0) {
                nav4ul.style.opacity = '0';
                nav4ul.style.display = 'none';
                arrow[1].style.display = 'none';
                clearInterval(nav4ul.timer);
            }
        },40);

    });

    /*鼠标移入显示导航栏*/
    var bignav = document.getElementById("nav");//获取到导航栏id  ！！！这里是id，不用#！！！
    function t(obj,ff,x){
        clearInterval(obj.timerr);
        obj.timerr = setInterval(function(){
            if(ff === 0){
                x = x + 0.1;
                bignav.style.opacity = x;
                if(bignav.style.opacity>=1) {
                    bignav.style.opacity = '1';
                    clearInterval(obj.timerr);
                }
            }
            if(ff === 1) {
                x = x - 0.1;
                bignav.style.opacity = x;
                if(bignav.style.opacity <= 0) {
                    bignav.style.opacity = '0';
                    clearInterval(obj.timerr);
                }
            }
        },50);
    }
    bignav.addEventListener('mouseenter',function (){
        var x = parseInt(bignav.style.opacity);
        if(bignav.style.opacity === ''){
            x = 0;
        }
        if(window.pageYOffset < document.documentElement.clientHeight){
            t(bignav,0,x);
        }
    });
    bignav.addEventListener('mouseleave',function (){
        var x = parseInt(bignav.style.opacity);
        if(window.pageYOffset < document.documentElement.clientHeight){
            t(bignav,1,x);
        }
    });

    /*页面滚动显示一些元素和动画*/
    var x = 0 ;
    var f = 0;
    window.onscroll=function(){
        if(window.pageYOffset >= document.documentElement.clientHeight && f === 0){ //当滚动距离大于时执行下面的东西document.documentElement.clientHeight
            x = 0 ;
            var timer1 = setInterval(function(){
                x = x + 0.1;
                bignav.style.opacity = x;
                if(bignav.style.opacity>=1) {
                    bignav.style.opacity = '1';
                    clearInterval(timer1);
                }
            },50);
            f = 1;
        }
        if(window.pageYOffset < document.documentElement.clientHeight && f === 1){
            x = 1;
            var timer2 = setInterval(function(){
                x = x - 0.1;
                bignav.style.opacity = x;
                if(bignav.style.opacity<=0) {
                    bignav.style.opacity = '0';
                    clearInterval(timer2);
                }
            },50);
            f = 0;
        }
    };

    /*输入按钮*/
    var center = document.querySelector('#header_left');
    var searchdiv = document.querySelector('#header_search');
    var search = document.querySelector('#search');
    var sf = 0;
    searchdiv.onclick = function(){
        if(sf === 0){
            sf = 1;
            center.style.display = 'none';
            search.style.display = 'block';
        }else {
            sf = 0;
            search.style.display = 'none';
            center.style.display = 'block';
        }
    };
};