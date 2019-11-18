window.onload = function(){
    // 生成城市
    var oCityBox = document.getElementsByClassName('city-box')[0];
    var oDownp = oCityBox.getElementsByClassName('drop-downpro')[0];
    var oDowncity = oCityBox.getElementsByClassName('drop-downcity')[0];
    var oCityLi;
     // 底部生成a标签
    var linkItem = document.getElementsByClassName('links-item');
    var linka ;
    $.ajax({
        url: 'http://test.com/job',
        dataType: 'json',
        async:false
    }).done(function(data,status,xhr){
            jobData1 = data;
            // console.log(jobData1);
            // console.log(jobData1);
            // console.log(status+xhr);
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

            var LinkData = jobData1['linkcom'];         
            for(var obj in LinkData){
                var linkDd = linkItem[0].getElementsByTagName('dd')[0];
                linka = document.createElement('a');
                textA = document.createTextNode(LinkData[obj]['name']);
                linka.appendChild(textA);
                linka.setAttribute('href',LinkData[obj]['url'])
                linkDd.appendChild(linka)
            }
            var LinkData2 = jobData1['linkcity'];         
            for(var obj in LinkData2){
                var linkDd = linkItem[1].getElementsByTagName('dd')[0];
                linka = document.createElement('a');
                textA = document.createTextNode(LinkData2[obj]['name']);
                linka.appendChild(textA);
                linka.setAttribute('href',LinkData2[obj]['url'])
                linkDd.appendChild(linka)
            }
            var LinkData3 = jobData1['linkjob'];         
            for(var obj in LinkData3){
                var linkDd = linkItem[2].getElementsByTagName('dd')[0];
                linka = document.createElement('a');
                textA = document.createTextNode(LinkData3[obj]['name']);
                linka.appendChild(textA);
                linka.setAttribute('href',LinkData3[obj]['url'])
                linkDd.appendChild(linka)
            }
            console.log(jobData1['job-info']);
            var primaryInfo = document.getElementsByClassName('info-primary')[0];
            var comInfo = document.getElementsByClassName('company-info')[0];
            var cnameInfo = comInfo.getElementsByClassName('name')[0];
            cnameInfo.innerHTML = '<h1>'+ jobData1['job-info']['job-name'] +'</h1><span class="badge">' + jobData1['job-info']['job-salar'] + '</span>' 
            var pInfo = primaryInfo.getElementsByTagName('p')[0];
            pInfo.innerHTML = jobData1['job-info']['job-city'] + '<em class="dot"></em>' +jobData1['job-info']['job-year'] + '<em class="dot"></em>' + jobData1['job-info']['job-degree'];
            var nameInfo =primaryInfo.getElementsByClassName('name')[0];
            nameInfo.innerHTML = '<h1>'+ jobData1['job-info']['job-name'] +'</h1><span class="salar">' + jobData1['job-info']['job-salar'] + '</span>' 
            var jobTag = document.getElementsByClassName('job-tags');
            var jobSpan;
            for(var i = 0;i<jobTag.length;i++){
                for(var jobs in jobData1['job-info']['job-tags']){
                    jobSpan = document.createElement('span');
                    jobSpan.innerHTML = jobData1['job-info']['job-tags'][jobs];
                    jobTag[i].appendChild(jobSpan);
                }    
            }
            var detailOp = document.getElementsByClassName('detail-op')[1];
            var detailFi = document.getElementsByClassName('detail-figure')[0];
            detailFi.innerHTML = '<img src="img/' + jobData1['job-info']['job-img'] + '.jpg">';
            var detailOpname = detailOp.getElementsByClassName('name')[0];
            detailOpname.innerHTML = jobData1['job-info']['jobname-first'] + jobData1['job-info']['jobname-last'] + '<i class="icon-vip"></i>';
            var detailOpg = detailOp.getElementsByClassName('gray')[0];
            detailOpg.innerHTML = jobData1['job-info']['job-verity'] + '<em class="vdot">·</em>' + '刚刚在线';
            var jobSec = document.getElementsByClassName('job-sec')[0];
            var jobTest = jobSec.getElementsByClassName('test')[0];
            var jobTestHtml = ''
            for(var i = 0 ;i<jobData1['job-info']['job-des'].length;i ++){
                jobTestHtml += i + '、' + jobData1['job-info']['job-des'][i] + '<br>';
            }
            jobTest.innerHTML = jobTestHtml;
            
    },
    )
    var $container = $('.row-code');
    $container.slideToUnlock({
        succText:'验证通过',
        text: '请按住滑块，拖动到最右边',
        progressColor: '#eef0f5',
        bgColor: '#eef0f5',
        succColor: '#eef0f5',
    });
    var canvas = document.getElementById('side');  
    var ctx = canvas.getContext('2d');  
    canvas.width = canvas.parentNode.offsetWidth;  
    canvas.height = 50;
    //如果浏览器支持requestAnimFrame则使用requestAnimFrame否则使用setTimeout  
    window.requestAnimFrame = (function(){  
    return  window.requestAnimationFrame       ||  
            window.webkitRequestAnimationFrame ||  
            window.mozRequestAnimationFrame    ||  
            function( callback ){  
                window.setTimeout(callback, 1000 / 60);  
            };  
    })();  
    // 波浪大小
    var boHeight = canvas.height / 10;
    var posHeight = canvas.height / 1.2;
    //初始角度为0  
    var step = 0;  
    //定义三条不同波浪的颜色  
    var lines = ["rgba(187,237,232, 0.3)",  //最底下的波浪色
                    "rgba(48,170,251, 0.3)",  //中间层
                    "rgba(79,173,235, 0.3)"];  //最上层
    function loop(){  
        ctx.clearRect(0,0,canvas.width,canvas.height);  
        step++;  
        //画3个不同颜色的矩形  
        for(var j = lines.length - 1; j >= 0; j--) {  
            ctx.fillStyle = lines[j];  
            //每个矩形的角度都不同，每个之间相差45度  
            var angle = (step+j*50)*Math.PI/180;  
            var deltaHeight = Math.sin(angle) * boHeight;
            var deltaHeightRight = Math.cos(angle) * boHeight;  
            ctx.beginPath();
            ctx.moveTo(0, posHeight+deltaHeight);  
            ctx.bezierCurveTo(canvas.width/2, posHeight+deltaHeight-boHeight, canvas.width / 2, posHeight+deltaHeightRight-boHeight, canvas.width, posHeight+deltaHeightRight);  
            ctx.lineTo(canvas.width, canvas.height);  
            ctx.lineTo(0, canvas.height);  
            ctx.lineTo(0, posHeight+deltaHeight);  
            ctx.closePath();  
            ctx.fill();  
        }
        requestAnimFrame(loop);
    }  
    loop(); 
    // 侧边栏固定
    var smallBan = document.getElementsByClassName('smallbanner')[0];
    var jobBan = document.getElementsByClassName('job-banner')[0];
    // var smallBanTop = jobBan.getBoundingClientRect().bottom;
    var smallBanTop = jobBan.offsetHeight + 50;
    var toptimer = null;
    var isTop = true;
    var oSiderbar = document.getElementById('siderbar');
    window.onscroll = function(){                                    
        var dtop = document.documentElement.scrollTop||document.body.scrollTop;        
        var oSidertop = 49 - dtop;
        if(oSidertop <= 0){
            oSidertop = 0;
        }
        oSiderbar.style.top = oSidertop + 'px'; 
        if(dtop > smallBanTop){
            smallBan.classList.add('curb');
        }else if(dtop <= smallBanTop){
            smallBan.classList.remove('curb');
        }
        if (!isTop) {
            clearInterval(toptimer);
        };
        isTop = false;       
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
    var linkFriend = document.getElementsByClassName('links')[0];
    var linkBtn = linkFriend.getElementsByTagName('label')[0];
    var linkSpan = linkBtn.getElementsByTagName('span')[0];
    var linkI = linkBtn.getElementsByTagName('i')[0];
    linkFriend.style.height = '70px';
    linkSpan.innerHTML = '展开';
    linkI.className = 'fz-sildedown';
    linkBtn.onclick = function(){
        if(linkFriend.style.height == '70px'){
            linkFriend.style.height = 'auto';
            linkSpan.innerHTML = '收起';
            linkI.className = 'fz-sildeup';
        }else{
            linkFriend.style.height = '70px';
            linkSpan.innerHTML = '展开';
            linkI.className = 'fz-sildedown';
        }
    }
    // 城市点击
    var navCity = document.getElementsByClassName('city-selected')[0];
    var citySpan = navCity.getElementsByTagName('b')[0];
    oCityBox.style.display = 'none';
    navCity.onclick = function(e){
        if( oCityBox.style.display == 'none'){
            e.stopPropagation();
            oCityBox.style.display = 'block';
            navCity.classList.add('cur');
        }else{
            oCityBox.style.display = 'none';
            navCity.classList.remove('cur');
        }
    }
    document.onclick = function(){
        oCityBox.style.display = 'none';
        navCity.classList.remove('cur');
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
            navCity.classList.remove('cur');
        }
        var oDroLi = aDroUl[i].getElementsByTagName('li');
        for(var k = 0 ; k < oDroLi.length ; k++){
            oDroLi[k].onclick = function(){
                citySpan.innerHTML = this.innerHTML;
                navCity.classList.remove('cur');
            }
        }
    }
    var jobMap = document.getElementsByClassName('job-location-map')[0];
}