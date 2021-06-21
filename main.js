'use strict';

var cards = document.getElementById('cards'); 
var check = document.getElementById('check');   
var retry = document.getElementById('retry');
var userName = document.getElementById('user-name');

userName.focus();

check.addEventListener('click',function(){
    var msgs = [
        {name: 'かくれんぼ系',img:'no1_l.png',img_r:'no1_r.png'},
        {name: 'にせもの系',img:'no2_l.png',img_r:'no2_r.png'},
        {name: 'にせもの系',img:'no3_l.png',img_r:'no3_r.png'},
        {name: 'ツチノコ系',img:'no4_l.png',img_r:'no4_r.png'},
        {name: '逃走中系',img:'no5_l.png',img_r:'no5_r.png'},
        {name: 'にせもの系',img:'no6_l.png',img_r:'no6_r.png'},
        {name: 'ばくだん系',img:'no7_l.png',img_r:'no7_r.png'},
        {name: 'きぐるみ系',img:'no8_l.png',img_r:'no8_r.png'},
        {name: 'コタツ系',img:'no9_l.png',img_r:'no9_r.png'},
        {name: '水中系',img:'no10_l.png',img_r:'no10_r.png'},
        {name: 'ガス系',img:'no11_l.png',img_r:'no11_r.png'},
        {name: '人形系',img:'no12_l.png',img_r:'no12_r.png'},
        {name: '蛇系',img:'no13_l.png',img_r:'no13_r.png'},
        {name: '主人公系',img:'no14_l.png',img_r:'no14_r.png'},
        {name: 'にせもの系',img:'no15_l.png',img_r:'no15_r.png'},
        {name: 'ボクサー系',img:'no16_l.png',img_r:'no16_r.png'},
        {name: 'ドリーム系',img:'no17_l.png',img_r:'no17_r.png'},
    ];

    var msg;
    msg = getRandomElement(msgs);

    tweetUrl 
    = 'https://twitter.com/intent/tweet?text=' +
        encodeURIComponent(
            userName.value + 'さんは' +
            msg.name + 'の刺客だったね!わさわさ!'

        );


    var resultImg = document.getElementById('result_img');
    var resultImgr = document.getElementById('result_img_r');

    var tweet = document.getElementById('tweet');
    var tweetUrl;

    function getRandomElement(array){
        return array[Math.floor(Math.random() * array.length)];
    }

    function setTextContent(id, text) {
        document.getElementById(id).textContent = text;
    }

    if (userName.value === '' || userName.value.length > 10){
        userName.value = '没キャラ'
    }

    setTextContent('result_name', userName.value);
    setTextContent('result_msg', msg.name);
    resultImg.children[0].src =  'imgs/' + msg.img;
    resultImgr.lastElementChild.src = 'imgs/' + msg.img_r;                            
    tweet.href = tweetUrl
    // moveとretry⇩
    cards.className = 'move';
    });

    retry.addEventListener('click',function(){
    cards.className = '';
    userName.value = '';
    userName.focus();
});

// window.onload = function() {
//     alert("キルミーベイベーが好きな人'以外'は絶対に見ないで下さい。");
//   };