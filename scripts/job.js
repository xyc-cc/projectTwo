window.onload = function () {
    var headerSearch = document.getElementById("headerSearch");
    var headerLast = document.getElementById("headerLast");
    var form = document.getElementsByTagName("form")[1];

    headerSearch.onfocus = function () {
        form.className = 'formActive floatLeft';
    }

    headerSearch.onblur = function () {
        form.className = 'floatLeft';
    }

    var citys = {
        "name|1": [
            "全国",
            "北京",
            "上海",
            "广州",
            "深圳",
            "杭州",
            "天津",
            "西安",
            "苏州",
            "武汉",
            "厦门",
            "长沙",
            "成都",
            "郑州",
            "重庆"
        ]
    }

    var jobs = {
        "name|1": [
            "安全SE",
            "工程师",
            "数据分析专家",
            "java工程师",
            "php开发工程师",
            "算法专家",
            "网络工程师",
            "前端工程师",
            "自然语言处理工程师",
            "数据挖掘",
            "深度学习",
            "java服务端"
        ]
    }

    var money = {
        "name|1": [
            "20K-40K",
            "10K-30K",
            "30K-40K·16薪",
            "10K-30K"
        ]
    }

    var company = {
        "name|1": [
            "小米",
            "华为",
            "阿里巴巴集团",
            "网易",
            "支付宝",
            "VIVO",
            "吉利集团"
        ],
        "address|1":[
            "杭州 滨江区 长河 | 3-5年 | 本科",
            "杭州 西湖区 长河 | 1-2年 | 专科",
            "杭州 余杭区 仓前 | 5-10年 | 本科",
        ],
        "information|1":[
            "计算机软件 | 不需要融资 | 10000人以上",
            "移动互联网 | 不需要融资 | 10000人以上",
            "游戏 | 需要融资 | 10000人以上",
            "互联网 | 已上市 | 10000人以上",
            "计算机软件 | B轮 | 10000人以上"
        ]
    }

    var people = {
        "name|1":[
            "季女士 | 招聘主管",
            "杨先生 | 招聘者",
            "马女士 | 高级前端工程师",
            "徐先生 | 资深前端工程师"
        ],
        "skill|1":[
            "负责项目开发",
            "阿萨德看风景",
            "我问我人工湖撇嵌入",
            "完全二双方都"
        ]
    }

    var hotCitys = document.getElementById("hotCitys");
    for (var i = 0; i < citys["name|1"].length; i++) {
        var li = document.createElement("li");
        hotCitys.appendChild(li);
        var a = document.createElement("a");
        li.appendChild(a);
        a.innerHTML = Mock.mock(citys).name;
    }

    var area = document.getElementById("area");
    var random = Math.round(Math.random() * citys["name|1"].length);
    var citysBox = document.getElementById("citysBox");
    var span = citysBox.getElementsByTagName("span")[0];

    for (var j = 0; j < random; j++) {
        var li = document.createElement("li");
        area.appendChild(li);
        var a = document.createElement("a");
        li.appendChild(a);
        a.innerHTML = Mock.mock(citys).name;
    }

    var lis = hotCitys.getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            area.innerHTML = "";
            span.innerHTML = this.innerHTML;
            var random = Math.round(Math.random() * citys["name|1"].length);
            for (var j = 0; j < random; j++) {
                var li = document.createElement("li");
                area.appendChild(li);
                var a = document.createElement("a");
                li.appendChild(a);
                a.innerHTML = Mock.mock(citys).name;
            }
        }
    }

    var fixedCitys = document.getElementById("fixedCitys");

    for(var i = 0 ; i < citys['name|1'].length ; i++){
        var li = document.createElement("li");
        li.innerHTML = Mock.mock(citys).name;
        fixedCitys.appendChild(li);
    }

    
    var fixedCitysLis = fixedCitys.getElementsByTagName("li");
    fixedCitysLis[0].className = "active";
    var fixedCitysMore = document.getElementById("fixedCitysMore");
    for(var i = 0 ; i < fixedCitysLis.length ; i++){
        fixedCitysLis[i].onclick = function(){
            var random = Math.round(Math.random() * citys["name|1"].length+1);
            for(var k = 0 ; k < fixedCitysLis.length ; k++){
                fixedCitysLis[k].className = '';
            }
            this.className = "active";
            fixedCitysMore.innerHTML = '';
            for(var j = 0 ; j < random ; j++){
                var span = document.createElement("span");
                span.innerHTML = Mock.mock(citys).name;
                fixedCitysMore.appendChild(span);
            }
        }
    }

    var allCitys = document.getElementById("allCitys");
    var citysAllBox = document.getElementById("citysAllBox");
    var close    = document.getElementById("close");
    var body     = document.getElementsByTagName("body")[0];

    close.onclick = function(){
        citysAllBox.style.display = 'none';
    }

    allCitys.onclick = function(){
        citysAllBox.style = 'display:fixed';
    }

    function createM(){
        var mainLeft = document.getElementById("mainLeft");
        var ul  = document.createElement("ul");
        mainLeft.appendChild(ul);
        for(var i = 0 ; i < 30 ; i++){
            var btn = document.createElement("button");
            btn.className = "mainLeftBtn";
            btn.innerHTML = "立即沟通"
            btn.style.display = 'none'
            var li = document.createElement("li");
            ul.appendChild(li);
            var divNone = document.createElement("div");
            divNone.className = "details";
            divNone1 = document.createElement("div");
            divNone2 = document.createElement("div");
            divNone.appendChild(divNone1);
            divNone1.innerHTML = "职位描述";
            divNone.style.display = "none";

            for(var j = 0 ; j < Math.round(Math.random()*10+10); j++){
                divNone2.innerHTML += Mock.mock(people).skill + "<br>";
            }

            
            divNone.appendChild(divNone2);
            
            
            var div1 = document.createElement("div");
            var div2 = document.createElement("div");
            li.appendChild(div1);
            li.appendChild(div2);
            li.appendChild(btn);
            li.appendChild(divNone);
            var span1 = document.createElement("span");
            var span2 = document.createElement("span");
            var span3 = document.createElement("span");
            var span4 = document.createElement("span");
            div1.appendChild(span1);
            div1.appendChild(span2);
            div1.appendChild(span3);
            div1.appendChild(span4);
            var span5 = document.createElement("span");
            var span6 = document.createElement("span");
            div2.appendChild(span5);
            div2.appendChild(span6);
            span1.innerHTML = Mock.mock(jobs).name;
            span2.innerHTML = Mock.mock(money).name;
            span3.innerHTML = Mock.mock(company).name;
            span4.innerHTML = Mock.mock(people).name;
            span5.innerHTML = Mock.mock(company).address;
            span6.innerHTML = Mock.mock(company).information;

        }

        var lis = ul.getElementsByTagName("li");
        
        for(var j = 0 ; j < lis.length ; j++){


            lis[j].onmouseover = function(){
                this.getElementsByTagName("span")[3].style.display = 'none';
                this.getElementsByTagName("button")[0].style.display  = "block";
            }

            lis[j].onmouseout = function(){
                this.getElementsByTagName("span")[3].style.display = 'block';
                this.getElementsByTagName("button")[0].style.display  = "none"
            }

            lis[j].getElementsByClassName("details")[0].onmouseover = function(){
                this.style.display = "block"
            }

            lis[j].getElementsByClassName("details")[0].onmouseout = function(){
                this.style.display = "none"
            }
            
            lis[j].getElementsByTagName("div")[0].getElementsByTagName("span")[0].onmouseover  = function(){
                this.parentNode.parentNode.getElementsByClassName("details")[0].style.display = "block";
            }

            lis[j].getElementsByTagName("div")[0].getElementsByTagName("span")[0].onmouseout  = function(){
                this.parentNode.parentNode.getElementsByClassName("details")[0].style.display = "none";
            }

        }



        
    }

    createM();
        

        var bottomNav = document.getElementById("bottomNav");
        var spans     = bottomNav.getElementsByTagName("span");
        var prev = document.getElementById("prev");
        var next = document.getElementById("next");
        spans[1].className = 'bNavActive'
        for(var i = 1 ; i < spans.length-2 ; i++){
            spans[i].onclick = function(){
                for(var k = 0 ; k < spans.length ; k++){
                    spans[k].className = '';
                    spans[k].style.color = '';
                }
                this.className = 'bNavActive';
                if(this.className == 'bNavActive'){
                    this.style.color = "white"
                }
                mainLeft.innerHTML = "";
                createM();
            }
            prev.onclick = function(){
                if(i > 1){
                    spans[i].className = '';
                    spans[i].style.color = '';
                    spans[--i].className = "bNavActive"
                    mainLeft.innerHTML = "";
                    createM();
                }
            }

            next.onclick = function(){
                if(i < 3){
                    spans[i].className = '';
                    spans[i].style.color = '';
                    spans[++i].className = "bNavActive"
                    mainLeft.innerHTML = "";
                    createM();
                }
            }
        }


        var pleasedInput = document.getElementById("pleasedInput");
        pleasedInput.onfocus = function(){
            pleasedInput.style.border = "1px solid #6adbcf";
        }

        pleasedInput.onblur = function(){
            pleasedInput.style.border = ""
        }

        



    
}