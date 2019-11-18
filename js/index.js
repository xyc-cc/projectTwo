window.onload = function(){
    // 主页选项卡
    var jobBox = document.getElementsByClassName('job-tab-box')[0];
    var jobUl = jobBox.getElementsByTagName('ul');
    var jobH = jobBox.getElementsByTagName('h3')[0];
    var jobBtn = jobH.getElementsByTagName('span');
    var jFlag = 0;
    let jobData1;
    //热门企业选项卡生成
    var comBox = document.getElementsByClassName('conpamy-tab-box')[0];
    var comUl = comBox.getElementsByTagName('ul');
    var comH = comBox.getElementsByTagName('h3')[0];
    var comBtn = comH.getElementsByTagName('span');
    var cFlag = 0;

    // 主体左侧导航鼠标悬浮特效
    var showAll = document.getElementsByClassName('show-all')[0];
    var allBox = document.getElementsByClassName('all-box')[0];
    var jobMenu = document.getElementsByClassName('job-menu')[0];
    var aDl = jobMenu.getElementsByTagName('dl');
    // 生成左侧导航栏
    var aDd = jobMenu.getElementsByTagName('dd');
    var aMenusub = jobMenu.getElementsByClassName('menu-sub');
    var oA,oText;

    //热门职位生成
    var aHot = document.getElementsByClassName('search-hot')[0];
    var oB = document.createElement('b');
    oB.innerHTML = '热门职位:';
    aHot.appendChild(oB);

    // 生成城市
    var oCityBox = document.getElementsByClassName('city-box')[0];
    var oDownp = oCityBox.getElementsByClassName('drop-downpro')[0];
    var oDowncity = oCityBox.getElementsByClassName('drop-downcity')[0];
    var oCityLi;

    // 底部生成a标签
    var linkItem = document.getElementsByClassName('link-item')[0];
    var linkDd = linkItem.getElementsByTagName('dd')[0];
    var linka ;
    //生成搜索三栏
    var tree1 = document.getElementsByClassName('tree1')[0];
    var tree2 = document.getElementsByClassName('tree2')[0];
    var tree3 = document.getElementsByClassName('tree3')[0];
    var tree1Li;

    // input框聚焦
    var iSearch = document.getElementsByClassName('ipt-search')[0];
    var iPos = document.getElementsByClassName('position-type')[0];
    var iWrap = document.getElementsByClassName('ipt-wrap')[0];
    iSearch.onfocus = function(){
        iPos.style['border-color'] = '#53cac3';
        iWrap.style['border-color'] = '#53cac3';
    }
    iSearch.onblur = function(){
        iPos.style['border-color'] = '#fff';
        iWrap.style['border-color'] = '#fff';
    }

    $.ajaxSettings.async = false;
    $.get(      
        "http://api.hzbiz.net/default/agent.php",
        {
            url: 'http://xxf007.cn/idata2.json'
            // url: 'http://xxf007.cn/idata.json'
        },
        function(data,status,xhr){
            jobData1 = JSON.parse(data);
            // console.log(jobData1);
            // console.log(jobData1);
            // console.log(status+xhr);
            //生成工作选项卡   
            for(var i = 0 ;i <jobData1['job-box'].length;i ++){
                var jobSpan = document.createElement('span');
                jobSpan.innerHTML = jobData1['job-box'][i].title;
                if( i == 0){
                    jobSpan.setAttribute('class','cur');
                }
                jobH.appendChild(jobSpan);      
            }    
            for(var i = 0 ;i < jobData1['job-box'].length;i ++){
                for(var j = 0; j < jobData1['job-box'][i].con.length;j++){
                    var oJobLi = document.createElement('li');
                    oJobLi.innerHTML = '<div class="sub-li"><a href="" class="job-info"><p class="job-name">' + 
                    jobData1['job-box'][i].con[j]['con-title']+ 
                    ' <span class="salar">' + 
                    jobData1['job-box'][i].con[j]['con-wage'] +
                    '</span></p><p class="job-text">' + 
                    jobData1['job-box'][i].con[j]['con-city'] +
                    '<span class="vline"></span>' +
                    jobData1['job-box'][i].con[j]['con-year'] +
                    '<span class="vline"></span>' +
                    jobData1['job-box'][i].con[j]['con-degree'] +
                    '</p></a><a href="" class="user-info"><p><img src="img/' +
                    jobData1['job-box'][i].con[j]['con-img'] +
                    '.jpg" alt="">' +
                    jobData1['job-box'][i].con[j]['con-company'] +
                    '<span class="user-text">' + 
                    jobData1['job-box'][i].con[j]['con-peo-first'] +
                    jobData1['job-box'][i].con[j]['con-peo-last']+
                    '<span class="vline"></span>' +
                    jobData1['job-box'][i].con[j]['con-verity'] +
                    '</span></p></a></div>';
                    jobUl[i].appendChild(oJobLi);
                }
            }
            //热门企业选项卡生成
            for(var i = 0 ;i < jobData1['company-box'].length;i ++){
                var comSpan = document.createElement('span');
                comSpan.innerHTML = jobData1['company-box'][i].title;
                if( i == 0){
                    comSpan.setAttribute('class','cur');
                }
                comH.appendChild(comSpan);      
            }
            
            for(var i = 0 ;i < jobData1['company-box'].length;i ++){
                for(var j = 0; j < jobData1['company-box'][i].con.length;j++){
                    var oComLi = document.createElement('li');
                    oComLi.innerHTML = '<div class="sub-li"><a href="" class="company-info clearfix"><img src="./img/' + 
                    jobData1['company-box'][i].con[j]['con-img'] +
                    '.jpg"><div class="company-text"><h4>' +
                    jobData1['company-box'][i].con[j]['con-name'] + 
                    '</h4><p>' +
                    jobData1['company-box'][i].con[j]['con-beList'] +
                    ' <span class="vline"></span>' +
                    jobData1['company-box'][i].con[j]['con-verity'] +
                    '</p></div></a><a href="" class="about-info"><p><span class="pull-right"><span class="text-blue">' +
                    jobData1['company-box'][i].con[j]['con-BOSSN'] +
                    '</span>位BOSS在线</span><span class="text-blue">' +
                    jobData1['company-box'][i].con[j]['con-jobN'] +
                    '</span>个热招职位</p></a></div>';
                    comUl[i].appendChild(oComLi);
                }
            }

            // 生成左侧导航栏
            var SiderData = [];
            for(var item in jobData1.oSider){
                SiderData.push(jobData1.oSider[item]);
            }
            for(var i = 0 ;i < aDd.length ; i++){
                var oDdName = SiderData[i]['sidername'];
                for(var oDj in oDdName){
                    oA = document.createElement('a');
                    oText = document.createTextNode(oDdName[oDj]);
                    oA.appendChild(oText);
                    oA.setAttribute('href','#');
                    aDd[i].appendChild(oA);
                }
            }
            for(var i = 0;i < SiderData.length;i++){
                var aUl = document.createElement('ul');     
                var aHead = SiderData[i]['moresider'];
                for(var aHj in aHead){
                    var aLi = document.createElement('li');
                    var aH4 = document.createElement('h4');
                    aH4.innerHTML = aHj;
                    var aDiv = document.createElement('div');
                    aDiv.setAttribute('class','text');
                    for(var aAj in aHead[aHj]){
                        var aA = document.createElement('a');
                        aA.setAttribute('href','#');
                        aA.innerHTML = aHead[aHj][aAj];
                        aDiv.appendChild(aA);
                    }
                    aLi.appendChild(aH4);
                    aLi.appendChild(aDiv);
                    aUl.appendChild(aLi);
                }
                aMenusub[i].appendChild(aUl);
            }    
            //热门职位生成
            for(var job in jobData1['hotjob']){
                oA = document.createElement('a');
                oText = document.createTextNode(jobData1['hotjob'][job]);
                oA.appendChild(oText);
                oA.setAttribute('href','#')
                aHot.appendChild(oA);
            }

            //生成城市
            oCityLi = document.createElement('li');
            oCityLi.innerHTML = jobData1['city']['hot-city'].name;
            oDownp.appendChild(oCityLi);
            for(var i = 0;i<jobData1['city']['city-data'].length;i++ ){
                oCityLi = document.createElement('li');
                oCityLi.innerHTML = jobData1['city']['city-data'][i].name;
                oDownp.appendChild(oCityLi);
            }
            var oCityUl;
            oCityUl = document.createElement('ul');
            for(var i = 0;i < jobData1['city']['hot-city']['cities'][0].length;i++){
                oCityLi = document.createElement('li');
                oCityLi.innerHTML =  jobData1['city']['hot-city']['cities'][0][i];
                oCityUl.appendChild(oCityLi);
            }
            oDowncity.appendChild(oCityUl);
            for(var i = 0; i < jobData1['city']['city-data'].length; i++){
                oCityUl = document.createElement('ul'); 
                for(var j = 0;j <jobData1['city']['city-data'][i].cities.length; j++){
                    oCityLi = document.createElement('li');
                    oCityLi.innerHTML = jobData1['city']['city-data'][i].cities[j];
                    oCityUl.appendChild(oCityLi);
                }
                oDowncity.appendChild(oCityUl);
            }

            //底部a标签生成
            var LinkData = jobData1['linkitem'];
            for(var obj in LinkData){
                linka = document.createElement('a');
                textA = document.createTextNode(LinkData[obj]['name']);
                linka.appendChild(textA);
                linka.setAttribute('href',LinkData[obj]['url'])
                linkDd.appendChild(linka)
            }
            var linkFriend = document.getElementsByClassName('link-friends')[0];
            var linkBtn = linkFriend.getElementsByTagName('div')[0];
            var linkSpan = linkBtn.getElementsByTagName('span')[0];
            var linkI = linkBtn.getElementsByTagName('i')[0];
            linkBtn.onclick = function(){
                if(linkFriend.style.height == '27px'){
                    linkFriend.style.height = 'auto';
                    linkSpan.innerHTML = '收起';
                    linkI.className = 'sildeUp';
                }else{
                    linkFriend.style.height = '27px';
                    linkSpan.innerHTML = '展开';
                    linkI.className = 'sildedown';
                }
            }
            // 生成搜索树
            var treeName = [];
            for(var objN in jobData1.oSider){
                treeName.push(objN);
            }
            tree1Li = document.createElement('li');
            tree1Li.innerHTML = '不限';
            tree1.appendChild(tree1Li);
            for(var i = 0;i< treeName.length;i++){
                tree1Li = document.createElement('li');
                tree1Li.innerHTML = treeName[i];
                tree1.appendChild(tree1Li);
            }
            var atree1Li = tree1.getElementsByTagName('li');
            for(let t = 0 ; t < atree1Li.length; t ++){
                atree1Li[t].onmouseover = function(){
                    for(var i = 0 ; i < atree1Li.length; i ++){
                        atree1Li[i].classList.remove('selected');
                    }
                    this.classList.add('selected');
                    tree3.style.display = 'none';
                    if(t == 0){
                        tree2.innerHTML = '';
                    }else{
                        
                        var tree2Name = SiderData[t-1]['moresider']
                        var treeO = [];
                        console.log(tree2Name);
                        tree2.innerHTML = '';
                        for(var tree2N in tree2Name){
                            treeO.push(tree2Name[tree2N]);
                            tree2.innerHTML += "<li>" + tree2N + "</li>"
                        }
                        var atree2Li = tree2.getElementsByTagName('li');
                        for(let t2 = 0; t2 < atree2Li.length ; t2++){
                            atree2Li[t2].onmouseover = function(){
                                for(var i = 0 ; i < atree2Li.length; i ++){
                                    atree2Li[i].classList.remove('selected');
                                }
                                this.classList.add('selected');
                                tree3.style.display = 'block';
                                tree3.innerHTML = '';
                                for(var tree3N in treeO[t2]){
                                    tree3.innerHTML += "<li>" + treeO[t2][tree3N]+ "</li>"
                                }
                                var atree3Li = tree3.getElementsByTagName('li');
                                for(let t3 = 0; t3 < atree3Li.length ; t3++){
                                    atree3Li[t3].onmouseover = function(){
                                        for(var i = 0 ; i < atree3Li.length; i ++){
                                            atree3Li[i].classList.remove('selected');
                                        }
                                        this.classList.add('selected');
                                    }
                                    atree3Li[t3].onclick = function(){
                                        var posB = iPos.getElementsByTagName('b')[0];
                                        posB.innerHTML = this.innerHTML;
                                    }
                                }
                            }
                        }
                    }
                }
            }

        },
    );
    // 搜索栏点击事件
    var posBox = document.getElementsByClassName('position-box')[0];
    posBox.style.display = 'none';
    iPos.onclick = function(e){
        if(posBox.style.display == 'none'){
            e.stopPropagation();
            posBox.style.display = 'block'
        }else{
            posBox.style.display = 'none';
        }
    }
    // 热门职业选项卡
    for(let index = 0; index < jobBtn.length; index++){
        console.log()
        jobBtn[index].onclick = function(){
            jFlag = index;
            jobChange();     
        }
    }
    function jobChange(){
        for(var i = 0; i < jobBtn.length; i++){
            jobUl[i].classList.remove('cur');
            jobBtn[i].classList.remove('cur');
        }
        jobUl[jFlag].classList.add('cur');
        jobBtn[jFlag].classList.add('cur');
    }
    // ip城市定位
    //自动获取用户IP，返回当前城市
    var oCity = document.getElementsByClassName('nav-city-box')[0];
    var citySpan = oCity.getElementsByTagName('span')[0];
    var nowCity;
    function showCityInfo() {
        //实例化城市查询类
        var citysearch = new AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;
                    nowCity = cityinfo.replace(/\市$/,'');
                    citySpan.innerHTML = nowCity;
                    //地图显示当前城市
                    // map.setBounds(citybounds);
                }
            } else {
                console.log(result.info);
            }
        });
    }
    showCityInfo();
    // 搜索框固定
    // 侧边栏固定
    var oSiderbar = document.getElementById('siderbar');
    var osearch = document.getElementsByClassName('main-search')[0];
    var toptimer = null;
    var isTop = true;
    window.onscroll = function(){                                    
        var dtop=document.documentElement.scrollTop||document.body.scrollTop;        
        if(dtop >= 280){
            osearch.classList.add('fix');
        }else if(dtop <= 175){
            osearch.classList.remove('fix');
        }
        var oSidertop = 49 - dtop;
        if(oSidertop <= 0){
            oSidertop = 0;
        }
        oSiderbar.style.top = oSidertop + 'px';
        if (!isTop) {
            clearInterval(toptimer);
        };
        isTop = false;     
    }
    // 主体左侧导航鼠标悬浮特效
    // console.log(window.innerHeight);视口高度
    for(let i = 0;i < aDl.length ; i++){
        aDl[i].onmouseover = function(e){
            e.stopPropagation(); 
            this.classList.add('cur');
        }
        aDl[i].onmouseout = function(e){
            e.stopPropagation();
            this.classList.remove('cur');
        }
    }
    showAll.onmouseover = function(e){
        e.stopPropagation(); 
        this.style.display = 'none';
        allBox.style.display = 'block';
    }
    showAll.onmouseout = function(e){      
        e.stopPropagation(); 
    }
    jobMenu.onmouseout = function(){
        allBox.style.display = 'none';
        showAll.style.display = 'block';
    }
    document.onmouseover = function(){
        allBox.style.display = 'none';
        showAll.style.display = 'block';
    }


    // 热门企业选项卡
    for(let k = 0; k < comBtn.length; k++){
        comBtn[k].onclick = function(){
            cFlag = k;
            comChange();
        }
    }
    function comChange(){
        for(var i = 0; i < comBtn.length; i++){
            comUl[i].classList.remove('cur');
            comBtn[i].classList.remove('cur');
        }
        comUl[cFlag].classList.add('cur');
        comBtn[cFlag].classList.add('cur');
    }


    // 手机号验证
    var phoneReg = /^(((13[0-9]{1})|(15[0-9]{1})|17[0-9]{1}|(18[0-9]{1}))+\d{8})$/; 
    var nPhone = document.getElementsByClassName('ipt-phone')[0];
    var oShowphone = document.getElementsByClassName('show-code')[0];
    var oRegsitBtn = document.getElementsByClassName('regsiter-btn')[0];
    oShowphone.onclick = function(){
        if(!phoneReg .test(nPhone.value))
        {
            wrongPhone()
        }else{
            rightPhone()
        }
    }
    oRegsitBtn.onclick = function(){
        if(!phoneReg .test(nPhone.value))
        {
            wrongPhone()
        }else{
            rightPhone()
        }
    }
    function wrongPhone(){
        var oldTo = document.getElementsByClassName('toast')[0];
        if(oldTo){
            document.body.removeChild(oldTo);
        }
        var toast = document.createElement('div');
        var toast_con = document.createElement('div');
        var toast_text = document.createTextNode('请输入正确的手机号码!');
        toast_con.appendChild(toast_text);
        toast_con.setAttribute('class','toast-con');
        toast.appendChild(toast_con);
        toast.setAttribute('class','toast');
        document.body.appendChild(toast);
        setTimeout(function(){
            document.body.removeChild(toast);
        },2000)
    }
    function rightPhone(){
        var oldTo = document.getElementsByClassName('toast')[0];
        if(oldTo){
            document.body.removeChild(oldTo);
        }
        var toast = document.createElement('div');
        var toast_con = document.createElement('div');
        var toast_text = document.createTextNode('正在维护快滚!');
        toast_con.appendChild(toast_text);
        toast_con.setAttribute('class','toast-con');
        toast.appendChild(toast_con);
        toast.setAttribute('class','toast');
        document.body.appendChild(toast);
        setTimeout(function(){
            document.body.removeChild(toast);
        },2000) 
    }

    // 城市热招
    var preCity = document.getElementsByClassName('pre-city')[0];
    var nextCity = document.getElementsByClassName('next-city')[0];
    var oCity = document.getElementsByClassName('sider-city')[0];
    var oUl = oCity.getElementsByTagName('li')[0];
    preCity.onclick = function(){
        preCity.style.display = 'none';
        nextCity.style.display = 'block';
        constantMove(oUl,'left',0,9);
    }
    nextCity.onclick = function(){
        preCity.style.display = 'block';
        nextCity.style.display = 'none';
        constantMove(oUl,'left',-198,-9);
    }

    function constantMove(obj,attr,nTar,nspeed){
        clearInterval(obj.timer);
        obj.timer=setInterval(function(){
            var cur;
            if (attr=='opacity') {
               //Math.round
               //这里需要用一个四舍五入的方法、去除小数点
               //计算机有些计算是有BUG问题的
               //比如alert(0.07*100);
               cur=Math.round(parseFloat(getStyle(obj,attr))*100); 

            }else{
               cur=parseInt(getStyle(obj,attr)); 
            }
            var speed = nspeed;
            spped=speed>0?Math.ceil(speed):Math.floor(speed); 
            if (cur == nTar) {
                 clearInterval(obj.timer);
            }else{

              if (attr=='opacity') {
                cur += speed;
                obj.style.filter='alpha(opacity:'+cur+')';
                obj.style.opacity=cur/100;
              }else{
                obj.style[attr] = cur + speed+'px';
              }

            }
        },30)
    }
    function getStyle(obj,name){
        if (obj.currentStyle) {
            return obj.currentStyle[name];
        }else{
            return getComputedStyle(obj,true)[name];
        }
    }

    // 城市点击
    var navCity = document.getElementsByClassName('nav-city')[0];
    oCityBox.style.display = 'none';
    navCity.onclick = function(e){
        if( oCityBox.style.display == 'none'){
            e.stopPropagation();
            oCityBox.style.display = 'block';
        }else{
            oCityBox.style.display = 'none';
        }
    }
    document.onclick = function(){
        oCityBox.style.display = 'none';
        posBox.style.display = 'none';
    }
    var aDropproLi = oDownp.getElementsByTagName('li');
    var aDroUl = oDowncity.getElementsByTagName('ul');
    for(let i = 0;i < aDropproLi.length; i++){
        aDropproLi[i].onmouseover = function(){
            for(var j = 0;j < aDropproLi.length;j ++){
                aDropproLi[j].classList.remove('cur');
                aDroUl[j].classList.remove('cur');
            }
            this.classList.add('cur');
            aDroUl[i].classList.add('cur');
        }
        aDropproLi[i].onclick = function(){
            var oDroLi1 = aDroUl[i].getElementsByTagName('li')[0];
            citySpan.innerHTML = oDroLi1.innerHTML;
        }
        var oDroLi = aDroUl[i].getElementsByTagName('li');
        for(var k = 0 ; k < oDroLi.length ; k++){
            oDroLi[k].onclick = function(){
                citySpan.innerHTML = this.innerHTML;
            }
        }
    }
    // 返回顶部
    var backTop = document.getElementsByClassName('back-top')[0];
    backTop.onclick = function(){
        var ispeed;
        //设置定时器
        toptimer = setInterval(function(){
            //获取滚动条距离顶部高度
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            // var ispeed = Math.floor(-osTop / 7);
            ispeed = -130;
            document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
            //到达顶部，清除定时器
            if (osTop == 0) {
                clearInterval(toptimer);
            };
            isTop = true;   
        },30);
    }
}