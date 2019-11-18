window.onload = function(){
    // 底部生成a标签
    var linkItem = document.getElementsByClassName('link-item')[0];
    var linkDd = linkItem.getElementsByTagName('dd')[0];
    var linka ;
    // 列表生成
    var listCard = document.getElementsByClassName('list-card')[0];
    var listCardUl = listCard.getElementsByTagName('ul')[0];
    var listNews = document.getElementsByClassName('list-news')[0];
    var listNewsUl = listNews.getElementsByTagName('ul')[0];
    $.ajaxSettings.async = false;
    $.ajax({
        url: 'http://test.com',
        dataType: 'json'
    }).done(function(data,status,xhr){
        var zixunData = data;
        // console.log(zixunData);
        // console.log(status+xhr);
        //底部a标签生成
        var LinkData = zixunData['linkitem'];
        for(var obj in LinkData){
            linka = document.createElement('a');
            textA = document.createTextNode(LinkData[obj]['name']);
            linka.appendChild(textA);
            linka.setAttribute('href',LinkData[obj]['url'])
            linkDd.appendChild(linka)
        }
        var titleCon = zixunData['titleArr'];
        var listCardLi;
        for(var i = 0;i < 3;i ++){
            listCardLi = document.createElement('li');
            listCardLi.innerHTML = ` <h3 class="title clearfix">
                                        <a href="" class="more" title="更多">more</a>
                                        <b>${titleCon[i]['title-type']}</b>
                                    </h3>
                                    <div class="text">
                                        <p class="img-wrap">
                                            <a href="">
                                                <img src="img/${titleCon[i]['title-img']}.jpg" alt="">
                                            </a>
                                        </p>
                                        <p class="text-title">
                                            <a href="">
                                            ${titleCon[i]['title-name']}
                                            </a>
                                        </p>
                                        <p class="text-view">
                                            <a href="" target="_blank">查看详情</a>
                                        </p>
                                    </div>`;
            listCardUl.appendChild(listCardLi);            
        }
        for(var i = titleCon.length - 1;i >= 0 ; i--){
            listCardLi = document.createElement('li');
            listCardLi.innerHTML = `<div class="img-wrap">
                                        <a href="" class="img">
                                            <img src="img/${titleCon[i]['title-img']}.jpg" alt="">
                                        </a>
                                        <a href="" class="badge">                          
                                        ${titleCon[i]['title-type']}
                                        </a>
                                    </div>
                                    <div class="text">
                                        <p class="text-title">
                                            <a href="">
                                            ${titleCon[i]['title-name']}
                                            </a>
                                        </p>
                                        <p class="summary">
                                        ${titleCon[i]['title-content']}
                                        </p>
                                        <div class="info">
                                            <p class="author">
                                            ${titleCon[i]['title-author']}<em>·</em><span class="time">${titleCon[i]['title-time']}</span>
                                            </p>
                                        </div>
                                    </div>`;
            listNewsUl.appendChild(listCardLi); 
        }

    });
    // 模拟Mock拦截Ajax请求
    // 加载更多点击
    var loadMore = document.getElementsByClassName('load-more')[0];
    loadMore.onclick = function(){
        var newCardLi;
        this.innerHTML = '正在加载中...'
        $.ajax({
            url: 'http://test.com',
            dataType: 'json'
        }).done(function(data, status, xhr) {
            var newTitle = data['titleArr'];
            for(var i = 0;i < newTitle.length - 1 ; i++){
                newCardLi = document.createElement('li');
                newCardLi.innerHTML = `<div class="img-wrap">
                                            <a href="" class="img">
                                                <img src="img/${newTitle[i]['title-img']}.jpg" alt="">
                                            </a>
                                            <a href="" class="badge">                          
                                            ${newTitle[i]['title-type']}
                                            </a>
                                        </div>
                                        <div class="text">
                                            <p class="text-title">
                                                <a href="">
                                                ${newTitle[i]['title-name']}
                                                </a>
                                            </p>
                                            <p class="summary">
                                            ${newTitle[i]['title-content']}
                                            </p>
                                            <div class="info">
                                                <p class="author">
                                                ${newTitle[i]['title-author']}<em>·</em><span class="time">${newTitle[i]['title-time']}</span>
                                                </p>
                                            </div>
                                        </div>`;
                listNewsUl.appendChild(newCardLi); 
            }
        });
        this.innerHTML = '浏览更多'
    }
    // 媒体合作遮罩层
    var listBanner = document.getElementsByClassName('list-banner')[0];
    var oBtn = listBanner.getElementsByClassName('btn')[0];
    var confirm = document.getElementsByClassName('confirm')[0];
    var closeBtn = confirm.getElementsByClassName('close-icon')[0];
    var confirmInbox = confirm.getElementsByClassName('confirm-inbox')[0];
    var confirmBg = confirm.getElementsByClassName('confirm-bg')[0];
    oBtn.onclick = function(){
        confirmInbox.classList.add('showout');
        confirmInbox.style['transform'] = 'scale(1)';
        confirmInbox.style.opacity = 1;
        confirmBg.style.opacity = 0.7;
        confirm.style.display = 'block';
        
    }
    closeBtn.onclick = function(){
        confirmInbox.classList.remove('showout')
        confirmInbox.style['transform'] = 'scale(0)';
        confirmBg.style.opacity = 0;
        confirmInbox.style.opacity = 0;
        setTimeout(function(){
            confirm.style.display = 'none';
        },300)
    }
    confirm.onclick = function(){
        if(confirmInbox.classList.contains('shakeAss')){
            confirmInbox.classList.remove('shakeAss');
        }
        confirmInbox.classList.add('shakeAss');
        setTimeout(function(){
            confirmInbox.classList.remove('shakeAss');
        },820)
    }
    confirmInbox.onclick = function(e){
        e.stopPropagation(); 
    }
    var iSpan = confirmInbox.getElementsByClassName('ipt-wrap');
    var iEmail = confirmInbox.getElementsByClassName('iemail')[0];
    var iPhone = confirmInbox.getElementsByClassName('iphone')[0];
    var iName = confirmInbox.getElementsByClassName('iname')[0];
    var iCompany = confirmInbox.getElementsByClassName('icompany')[0];
    var iTitle = confirmInbox.getElementsByClassName('iTitle')[0];
    var Label;
    iEmail.onblur = function(){
        var checkEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        Label = document.createElement('label');
        Label.setAttribute('class','error');
        var oLabel = iSpan[0].getElementsByTagName('label')[0];
        if(oLabel){
            iSpan[0].removeChild(oLabel);
        }
        if(this.value == ''){
            Label.innerHTML = '请填写邮箱地址';
            iSpan[0].appendChild(Label);
        }else if(!checkEmail.test(this.value)){
            Label.innerHTML = '请正确填写邮箱地址';
            iSpan[0].appendChild(Label);
        }
    }
    iPhone.onblur = function(){
        var checkPhone = /^1[3456789]\d{9}$/;
        Label = document.createElement('label');
        Label.setAttribute('class','error');
        var oLabel = iSpan[1].getElementsByTagName('label')[0];
        if(oLabel){
            iSpan[1].removeChild(oLabel);
        }
        if(this.value == ''){
            Label.innerHTML = '请填写手机号';
            iSpan[1].appendChild(Label);
        }else if(!checkPhone.test(this.value)){
            Label.innerHTML = '请正确填写手机号';
            iSpan[1].appendChild(Label);
        }
    }
    iName.onblur = function(){
        Label = document.createElement('label');
        Label.setAttribute('class','error');
        var oLabel = iSpan[2].getElementsByTagName('label')[0];
        if(oLabel){
            iSpan[2].removeChild(oLabel);
        }
        if(this.value == ''){
            Label.innerHTML = '请输入您的姓名';
            iSpan[2].appendChild(Label);
        }
    }
    iCompany.onblur = function(){
        Label = document.createElement('label');
        Label.setAttribute('class','error');
        var oLabel = iSpan[3].getElementsByTagName('label')[0];
        if(oLabel){
            iSpan[3].removeChild(oLabel);
        }
        if(this.value == ''){
            Label.innerHTML = '请输入您的公司名称';
            iSpan[3].appendChild(Label);
        }
    }
    iTitle.onblur = function(){
        Label = document.createElement('label');
        Label.setAttribute('class','error');
        var oLabel = iSpan[4].getElementsByTagName('label')[0];
        if(oLabel){
            iSpan[4].removeChild(oLabel);
        }
        if(this.value == ''){
            Label.innerHTML = '请输入您的职位名称';
            iSpan[4].appendChild(Label);
        }
    }
}