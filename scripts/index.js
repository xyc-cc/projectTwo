window.onload = function () {
    //获取用户所在城市信息
    function showCityInfo() {
        //实例化城市查询类
        var citysearch = new AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;
                    document.getElementById('headerLocation').innerHTML = cityinfo.replace(/市/, '');
                }
            } else {
                document.getElementById('headerLocation').innerHTML = result.info;
            }
        });
    }
    showCityInfo();
    // 搜索框点击样式
    var main = document.getElementsByTagName("main")[0];
    var form = main.getElementsByTagName("form")[0];
    var input = form.getElementsByTagName("input")[0];
    input.onfocus = function () {
        form.className = 'formFocus';
    }
    input.onblur = function () {
        form.className = '';
    }


    // mainNav图片大小
    var imgNav = document.getElementById("imgNav");
    var imgs = imgNav.getElementsByTagName("img");
    for (var i = 0; i < imgs.length; i++) {
        if ((i + 1) % 2 == 0) {
            imgs[i].style.width = "260px";
        } else {
            imgs[i].style.width = "522px";
        }

        if (i >= 2) {
            imgs[i].style.height = "112px";
        } else {
            imgs[i].style.height = "226px";
        }

    }



    var informationBox = document.getElementById("informationBox")
    var information = informationBox.getElementsByClassName("information");
    for (var i = 0; i < information.length; i++) {
        if (i % 3 == 0) {
            information[i].style["margin-left"] = "1px";
        }
    }

    var informationBox2 = document.getElementById("informationBox2")
    var information2 = informationBox2.getElementsByClassName("information");
    for (var i = 0; i < information2.length; i++) {
        if (i % 4 == 0) {
            information2[i].style["margin-left"] = "1px";
        }
    }


    var citysRoll = document.getElementById("citysRoll");
    var leftArrowBox = document.getElementById("leftArrowBox");
    var rightArrowBox = document.getElementById("rightArrowBox");
    var n = 0;
    if (citysRoll.style.left == "0px") {
        leftArrowBox.style.display = "none";
        rightArrowBox.style.display = "block";
    }
    rightArrowBox.onclick = function () {
        citysRoll.style.left = "-197px";
        citysRoll.classList.add("active");
        leftArrowBox.style.display = "block";
        rightArrowBox.style.display = "none";
    }
    leftArrowBox.onclick = function () {
        citysRoll.style.left = "0px";
        leftArrowBox.style.display = "none";
        rightArrowBox.style.display = "block";
    }


    var down = document.getElementsByClassName("down")[0];
    var footerInter = document.getElementsByClassName("footerInter")[0];
    var footerDownArrow = document.getElementsByClassName("footerDownArrow")[0];


    down.onclick = function () {
        var _this = this;
        if (_this.innerText == "展开") {
            footerInter.style.overflow = 'visible';
            _this.innerText = "收起";
            footerDownArrow.className = "footerDownArrow1 floatRight";
        } else {
            footerInter.style.overflow = 'hidden';
            _this.innerText = "展开";
            footerDownArrow.className = "footerDownArrow floatRight";
        }

    }

    var rightMenu = document.getElementsByClassName("rightMenu")[0];
    var small = document.getElementsByTagName("small");
    rightMenu.onmouseover = function () {
        for (var i = 0; i < small.length; i++) {
            small[i].style.display = "block";
        }
    }
    rightMenu.onmouseout = function () {
        for (var i = 0; i < small.length; i++) {
            small[i].style.display = "none";
        }
    }

    rightMenu.onmouseout = function () {
        for (var i = 0; i < small.length; i++) {
            small[i].style.display = "none";
        }
    }

    var fontNav1 = document.getElementById("fontNav1")
    var fontNav2 = document.getElementById("fontNav2");
    var fontColorPub = document.getElementsByClassName("fontColorPub")[0];
    var n = parseInt(rightMenu.style.top);
    var mainNav = document.getElementsByClassName("mainNav")[0];
    var jobSearchFixed = document.getElementById("jobSearchFixed");
    window.onscroll = function () {
        if (document.documentElement.scrollTop <= n) {
            rightMenu.style.top = -document.documentElement.scrollTop + n + "px";
        } else {
            rightMenu.style.top = "0px";
        }


        if (document.documentElement.scrollTop > mainNav.offsetTop) {
            jobSearchFixed.className = 'jobSearchFixed'
        } else {
            jobSearchFixed.style.display = 'block';
            jobSearchFixed.className = '';
        }
    }


    fontColorPub.onmouseover = function () {
        if (document.documentElement.scrollTop > mainNav.offsetTop) {
            fontNav2.style.top = "458px"
        } else {
            fontNav2.style.top = "550px"
        }
        if (fontColorPub.style.display == 'block') {
            fontNav2.style.display = "block";
            fontColorPub.style.display = 'none'
        }

    }

    fontNav1.onmouseover = function () {
        if (document.documentElement.scrollTop > mainNav.offsetTop) {
            fontNav2.style.top = "458px"
        } else {
            fontNav2.style.top = "550px"
        }
        if (fontNav2.style.display == "block") {
            fontNav2.style.display = "block"
        }
    }

    fontNav2.onmouseover = function () {
        if (document.documentElement.scrollTop > mainNav.offsetTop) {
            fontNav2.style.top = "458px"
        } else {
            fontNav2.style.top = "550px"
        }
        fontNav2.style.display = "block"
    }

    fontNav1.onmouseout = function () {
        if (document.documentElement.scrollTop > mainNav.offsetTop) {
            fontNav2.style.top = "458px"
        } else {
            fontNav2.style.top = "550px"
        }
        if (fontNav2.style.display == 'block') {
            fontNav2.style.display = 'none'
            fontColorPub.style.display = 'block'
        }
    }

    fontNav2.onmouseout = function () {
        if (document.documentElement.scrollTop > mainNav.offsetTop) {
            fontNav2.style.top = "458px"
        } else {
            fontNav2.style.top = "550px"
        }
        fontNav2.style.display = 'none';
        fontColorPub.style.display = 'block'
    }








    //在中间部分左边的文字导航栏部分 添加3-4个数据
    function CreateEa(arr, tag, parentE, number) {
        var _this = this;
        this.ul = document.getElementById(parentE).getElementsByTagName(tag)[0];
        this.lis = this.ul.getElementsByTagName("li");
        for (var i = 0; i < number; i++) {
            for (var j = 0; j < this.lis.length; j++) {
                var fontNava = document.createElement("a");
                fontNava.innerHTML = Mock.mock(arr).name;
                this.lis[j].appendChild(fontNava);
            }
        }

        // 创建hover 的 div
        for (var i = 0; i < this.lis.length; i++) {
            div = document.createElement("div");
            a = this.ul.children[i].getElementsByTagName("a")[0].innerHTML;
            div.className = 'hoverMenu';
            this.lis[i].appendChild(div);
            var p = document.createElement("p");
            var divArr = this.ul.children[i].getElementsByClassName("hoverMenu")
            var divs = this.ul.children[i].getElementsByClassName("hoverMenu")[0];
            p.innerHTML = a;
            divs.appendChild(p);
            var div2 = document.createElement("div");
            div2.className = "hoverMenuBox"
            divs.appendChild(div2);


            for (var j = 0; j < Math.round(Math.random() * 5 + 1); j++) {
                var div3 = document.createElement("div");
                div3.className = "hoverMenuLeft"
                div3.innerHTML = Mock.mock(arr).name;
                div2.appendChild(div3);
                var div4 = document.createElement("div");
                div4.className = "hoverMenuRight"
                div2.appendChild(div4);
                for (var k = 0; k < Math.round(Math.random() * 20 + 1); k++) {
                    var a = document.createElement("a");
                    a.innerHTML = Mock.mock(arr).name;
                    div4.appendChild(a);
                }

            }
            // var div3 = this.ul.lis[i].div2.getElementsByClassName("hoverMenuLeft")[0];
            // var div4 = document.createElement("div");
            // var div4 = this.div2.getElementsByClassName("hoverMenuRight")[0];
            // divs.appendChild(div2);
            // div2.appendChild(div3);
            // div2.appendChild(div4);

        }
    }
    var jobs = {
        "name|1": [
            '后端开发',
            'Java',
            'C++',
            'PHP',
            '数据挖掘',
            'C',
            'C#',
            '.NET',
            'Hadoop',
            'Python',
            'Delphi',
            'VB',
            'Perl',
            'Ruby',
            'Node.js',
            '搜索算法',
            'Golang',
            '自然语言处理',
            '推荐算法',
            'Erlang',
            '算法工程师',
            '语音/视频/图形开发',
            '数据采集'
        ]

    }
    var c1 = new CreateEa(jobs, "ul", "fontNav1", Math.round(Math.random() + 3));
    var c2 = new CreateEa(jobs, "ul", "fontNav2", Math.round(Math.random() + 3))

    var jobClass = document.getElementById("jobClass");
    var location = document.getElementById("location");
    var citysDown = document.getElementById("citysDown");
    var jobClasses = document.getElementById("jobClasses");
    var citysDown2 = document.getElementById("citysDown2");
    var jobClasses2 = document.getElementById("jobClasses2");
    var ul1 = citysDown.getElementsByTagName("ul")[0];
    var ul2 = citysDown2.getElementsByTagName("ul")[0];
    var ul3 = jobClasses.getElementsByTagName("ul")[0];
    var ul4 = jobClasses2.getElementsByTagName("ul")[0];

    for (var i = 0; i < 24; i++) {
        var li = document.createElement("li");
        li.innerHTML = Mock.mock(jobs).name;
        ul1.appendChild(li);

        var liJob = document.createElement("li");
        liJob.innerHTML = Mock.mock(jobs).name;
        ul3.appendChild(liJob);
    }

    location.onclick = function () {
        if (citysDown.style.display == 'block') {
            citysDown.style.display = "none";
            citysDown2.style.display = "none";
        } else {
            citysDown.style.display = "block";
            citysDown2.style.display = "block";
        }
    }

    jobClass.onclick = function () {
        if (jobClasses.style.display == 'block') {
            jobClasses.style.display = "none";
            jobClasses2.style.display = "none";
        } else {
            jobClasses.style.display = "block";
            jobClasses2.style.display = "block";
        }
    }

    var lis = ul1.getElementsByTagName("li");
    var lis2 = ul3.getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            ul2.innerHTML = '';
            for (var j = 0; j < Math.round(Math.random() * 7); j++) {
                var li2 = document.createElement("li");
                li2.innerHTML = Mock.mock(jobs).name;
                ul2.appendChild(li2);
            }
        }

        lis2[i].onmouseover = function () {
            ul4.innerHTML = '';
            for (var j = 0; j < Math.round(Math.random() * 7); j++) {
                var li2 = document.createElement("li");
                li2.innerHTML = Mock.mock(jobs).name;
                ul4.appendChild(li2);
            }
        }
    }


    var mainFontNav = document.getElementById("mainFontNav");
    var lis = mainFontNav.getElementsByTagName("li");
    var informationBox = document.getElementById("informationBox");
    var fontColorChange= informationBox.getElementsByClassName("fontColorChange");
    for(var i = 0 ; i < lis.length ; i++){
        lis[i].index = i ;
        lis[i].onclick = function(){
            for(var j = 0 ; j < lis.length ; j++){
                lis[j].children[0].style.color = "#61687c";
            }
            this.children[0].style.color = "#00d7c6";
            for(var j = 0 ; j < fontColorChange.length ; j++){
                fontColorChange[j].innerHTML = Mock.mock(jobs).name;
            }
        }
    }














}

