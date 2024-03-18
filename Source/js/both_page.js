window.onload = function(){
    /*加载页面后缓动动画*/
    var web_body = document.querySelector('#web_body');
    var web_aside = document.querySelector('#aside');
    web_body.timer = setInterval(function(){
        web_body.style.top = web_body.offsetTop + 1 + 'px';
        web_aside.style.left = web_aside.offsetLeft - 1 + 'px';
        if(web_body.offsetTop >= 0) {
            web_aside.style.left = 'calc(50% + 520px)';
            clearInterval(web_body.timer);
        }
    },10);

    /*导航栏动画*/
    var nav = document.querySelector('#page_nav');
    var nav_back = document.querySelector('#nav_back');
    var navf = 0;
    var navtime = null;
    nav_back.addEventListener('mouseenter',function () {
        clearTimeout(navtime);
        navtime = setTimeout(function () {
            if(navf === 0){
                var x = 0;
                var o = 0;
                nav_back.style.display = 'none';
                clearInterval(nav.timer);
                nav.timer = setInterval(function(){
                    x = x + 10;
                    o = o + 0.3;
                    nav.style.opacity = o;
                    nav.style.height = x + 'px';
                    if(nav.style.height === 70 + 'px') {
                        nav.style.opacity = '1';
                        nav.style.overflow = 'visible';
                        clearInterval(nav.timer);
                    }
                },30);
            }
        },300);
        navf = 0;
    });
    nav.addEventListener('mouseleave',function () {
        var x = 70;
        var o = 1;
        clearInterval(nav.timer);
        nav.style.overflow = 'hidden';
        nav.timer = setInterval(function(){
            x = x - 10;
            o = o - 0.3;
            nav.style.opacity = o;
            nav.style.height = x + 'px';
            if(nav.style.height === 0 + 'px') {
                nav.style.opacity = '0';
                navf = 0;
                nav_back.style.display = 'block';
                clearInterval(nav.timer);
            }
        },30);
    });
    nav_back.addEventListener('mouseout',function () {
        navf = 1;
    });


    /*返回条动画*/
    function animater_1(obj,target){
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            obj.style.top = obj.offsetTop + 10 + 'px';
            if(obj.offsetTop>=target) {
                clearInterval(obj.timer);
            }
        },1)
    }
    function animater_2(obj,target){
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            obj.style.top = obj.offsetTop - 10 + 'px';
            if(obj.offsetTop<=target) {
                clearInterval(obj.timer);
            }
        },1)
    }
    var tag = document.querySelector('#tag');
    var f = 0;
    window.onscroll=function(){
        if(window.pageYOffset >= document.documentElement.clientHeight && f === 0){ //当滚动距离大于时执行下面的东西document.documentElement.clientHeight
            animater_1(tag, 0);
            f = 1;
        }
        if(window.pageYOffset < document.documentElement.clientHeight && f === 1){
            animater_2(tag, -1000);
            f = 0;
        }
    };
    var timer_tag = null;
    tag.addEventListener('click',function () {
        clearTimeout(timer_tag);
        timer_tag = setInterval(function () {
            console.log(document.documentElement.scrollTop);
            document.documentElement.scrollTop = document.documentElement.scrollTop / 2;
            if (document.documentElement.scrollTop <= 20) {
                document.documentElement.scrollTop = 0;
                clearInterval(timer_tag);
            }
        }, 30);
    });


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


    /*搜索按钮*/
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

    /*时间封装*/
    var timef =function () {
        var date = new Date();
        Y = date.getFullYear() + '-';
        M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        D = date.getDate() + ' ';
        h = date.getHours() + ':';
        m = date.getMinutes() + ':';
        s = date.getSeconds();
        return Y + M + D + h + m + s;
    };



    /*评论交互*/
    var comment_button = document.querySelector("#comment_button");
    var comment_textarea = document.querySelector(".comment_textarea");
    var comment_model = document.querySelector("#comment_model");
    var comment_ul = document.querySelector("#comment_ul");
    comment_button.addEventListener('click',function(){
        if(comment_textarea.style.display === '' || comment_textarea.style.display === 'none'){
            comment_textarea.style.display = 'block';
        }else{
            if(comment_textarea.value) {
                var comment_plus = comment_model.cloneNode(true);
                comment_plus.style.display = 'block';
                comment_plus.children[1].innerHTML = comment_textarea.value;
                comment_plus.children[0].children[2].innerHTML = '#' + comment_ul.children.length;
                comment_plus.children[0].children[0].children[1].children[1].innerHTML = timef();
                comment_ul.insertBefore(comment_plus,comment_ul.children[1]);
                comment_plus.removeAttribute("id");
            }
            comment_textarea.style.display = 'none';
        }
    });
    /*回复交互*/
    var comment_reply_button = document.querySelectorAll(".comment_reply_button");
    var replyflag = 0;
    var reply_textarea;
    for(var i = 0;i < comment_reply_button.length; i++) {
        comment_reply_button[i].addEventListener('click', function () {
            var comment_li = this.parentNode.parentNode;
            if (replyflag === 0) {
                reply_textarea = comment_textarea.cloneNode();
                reply_textarea.style.width = "calc(100% - 50px)";
                reply_textarea.style.marginLeft = "50px";
                reply_textarea.style.display = 'block';
                comment_li.insertBefore(reply_textarea,comment_li.children[1]);
                replyflag = 1;
            } else {
                if (reply_textarea.value) {
                    var reply_model = document.querySelector("#reply_model");
                    var reply_plus = reply_model.cloneNode(true);
                    reply_plus.style.display = 'block';
                    reply_plus.children[2].innerHTML = reply_textarea.value;
                    reply_textarea.parentNode.removeChild(reply_textarea);
                    reply_plus.children[0].children[0].children[1].children[1].innerHTML = timef();
                    comment_li.children[2].insertBefore(reply_plus,comment_li.children[2].children[0]);
                    reply_plus.removeAttribute("id");
                    replyflag = 0;
                }
                reply_textarea.style.display = 'none';
            }
        });
    }
    /*回复回复交互*/
    var reply_flag = 0;
    var reply_textarea_2;
    var reply_button = document.querySelectorAll(".reply_button");
    for(i = 0;i < reply_button.length; i++) {
        reply_button[i].addEventListener('click', function () {
            var reply_ul = this.parentNode.parentNode.parentNode;
            if (reply_flag === 0) {
                reply_textarea_2 = comment_textarea.cloneNode();
                reply_textarea_2.style.width = "calc(100% - 50px)";
                reply_textarea_2.style.marginLeft = "50px";
                reply_textarea_2.style.display = 'block';
                this.parentNode.parentNode.insertBefore(reply_textarea_2, this.parentNode.parentNode.children[1]);
                reply_flag = 1;
            } else {
                if (reply_textarea_2.value) {
                    var reply_model = document.querySelector("#reply_model");
                    var reply_plus = reply_model.cloneNode(true);
                    reply_plus.style.display = 'block';
                    reply_plus.children[2].innerHTML = reply_textarea_2.value;
                    reply_textarea_2.parentNode.removeChild(reply_textarea_2);
                    reply_plus.children[0].children[0].children[1].children[1].innerHTML = timef();
                    reply_plus.children[1].innerHTML =  "@" + this.parentNode.children[0].children[1].children[0].innerHTML;
                    reply_ul.insertBefore(reply_plus, reply_ul.children[0]);
                    reply_plus.removeAttribute("id");
                    reply_flag = 0;
                }
                reply_textarea_2.style.display = 'none';
            }
        });
    }
};