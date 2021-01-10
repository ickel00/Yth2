

//独立COOKIE文件     ck在``里面填写，多账号换行
let xiaoleurlVal= `https://minapp.xqrobot.net/user.php?mod=sign&client=minapp&version=2.7&site=yyq&user_openid=ofGEO5LcfPZOWSD0-3fJ_7kdYBF0&user_lbs=&city=&u=11084`
let xiaoleheaderVal= `{"Cookie":"PHPSESSID=v44em9cq1og6srvu2oop0qtfq5","Accept":"*/*","Connection":"keep-alive","Referer":"https://servicewechat.com/wx7d27c26991711f37/103/page-frame.html","Content-Type":"application/json","Host":"minapp.xqrobot.net","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 13_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.21(0x17001521) NetType/WIFI Language/zh_CN","Accept-Encoding":"gzip, deflate, br","Accept-Language":"zh-cn"}`



let xiaolecookie = {
  xiaoleurlVal: xiaoleurlVal,	
  xiaoleheaderVal: xiaoleheaderVal,  

}

module.exports =  xiaolecookie
  


