/*
脚本名称："书旗小说多账户号稳定版";
适用版本：verson 4.3.2或者4.3.3 ;
作者：caixukun;


【注意事项】：
0.所有js脚本均为本地脚本，非远程目录。

1.有时候会出现获取不到ck的情况，请关闭代理重复该步骤多试几次；

2.看视频金币ck获取可能会出现视频加载失败，可以先关闭qx，待视频能看再打开qx;

3.运行次数大概一天，一到两次，日收益5毛左右；

4.阅读任务可能会出现中断，读者可自行更改间隔时间；

5.所有ck获取完成，可以打开boxjs看看书否所有的参数都有值，不要出现账号1的ack和账号2的bck混合在一起；


【nodejs教程】：
打开boxjs，复制会话，新建文件，粘贴，改文件名为 sqxsck.json,与本脚本放同一目录下，用nodejs即可运行本脚本；


【QX教程】：
hostname：ocean.shuqireader.com,api-access.pangolin-sdk-toutiao-b.com,api-access.pangolin-sdk-toutiao.com

[rewrite_local]
https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery url script-request-body sqxsgetck.js
https://ocean.shuqireader.com/api/activity/activity/v1/lottery/draw url script-request-body sqxsgetck.js
https://ocean.shuqireader.com/api/activity/xapi/gold/record url script-request-body sqxsgetck.js
https://ocean.shuqireader.com/api/prizecenter/xapi/prize/manual/receive url script-request-body sqxsgetck.js
https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery url script-request-body sqxsgetck.js
https://api-access.pangolin-sdk-toutiao-b.com/api/ad/union/sdk/reward_video/reward/ url script-request-body sqxsgetck.js
https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/ url script-request-body sqxsgetck.js


[task_local]
0 12 * * * sqxs.js, tag=书旗小说, enabled=true

boxjs：https://raw.githubusercontent.com/xiaokxiansheng/js/master/Task/cxk10.boxjs.json

共6个ck，打开书旗小说
1.点击 我的-去赚钱-去看书，随便阅读一本书，金币转一圈获得 阅读ck;

2.点击 我的-去赚钱-一键收取，获得 收集金币ck;

3.点击 我的-去赚钱-看视频赚2500金币，看一个视频广告获得 视频金币奖励ck;

4.点击 我的-去赚钱-福利转转转-看视频抽奖，获得 视频抽奖奖励ck 和 抽奖ck;

5 点击 我的-去赚钱-记录,获得 用户信息url;



*/





const jobname='书旗小说'
const $=Env(jobname)

let ReadTimes=0;
let vediogold=0;
let drawgold=0;


!(async () => {
	await all(); 
})()
    .catch((e) => {
      $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
      $.done();
    })









async function all() 
{	
	//nodejs运行
	if ($.isNode()) 
	{

		let sqxsck = require('./sqxsck.json');
		let CountNumber =sqxsck.settings[1].val;
		$.log(`============ 共 ${CountNumber} 个${jobname}账号=============`);
		for (let i = 0; i < CountNumber; i++) 
		{
			if (sqxsck.datas[0+6*i].val)
			{
				readckArr=sqxsck.datas[0+6*i].val.split('&&');
				receivecoinckArr = sqxsck.datas[1+6*i].val.split('&&');
				vediogoldprizeckArr=sqxsck.datas[2+6*i].val.split('&&');
				vediodrawprizeckArr= sqxsck.datas[3+6*i].val.split('&&');
				drawckArr= sqxsck.datas[4+6*i].val.split('&&');
				userinfock=sqxsck.datas[5+6*i].val;
				
				$.log(`\n============ 【书旗小说${i+1}】=============`);
				ReadTimes=0;
				vediogold=0;
				drawgold=0;
							
				//阅读
				
          for (let  i= 0; i < 50; i++) {

          ReadTimes = i + 1;
         await readbook();	
        if(ReadTimes==50){break;}
      }

    
				//收集阅读金币
				//if(ReadTimes>0)
				await receivecoin();
				
				//看视频奖励金币
				await vediogoldprize(0);
				
				//看视频奖励抽奖次数
				//await vediodrawprize(0);
				
				//个人信息
				await userinfo();
			}		
		}
		
		
	}
	//QX运行
	else
	{
		
		let CountNumber =$.getval('CountNumber');
		if(typeof CountNumber === 'undefined')
			CountNumber=1;
		$.log(`============ 共 ${CountNumber} 个${jobname}账号=============`);
	
		for (let i = 1; i <= CountNumber; i++) 
		{
			if (1)
			{	
				//readckArr = $.getdata(`readck${i}`).split('&&');
				receivecoinckArr = $.getdata(`receivecoinck${i}`).split('&&');
				vediogoldprizeckArr= $.getdata(`vediogoldprizeck${i}`).split('&&');
				vediodrawprizeckArr= $.getdata(`vediodrawprizeck${i}`).split('&&');
				drawckArr= $.getdata(`drawck${i}`).split('&&');
				userinfock=$.getdata(`userinfock${i}`);    
				$.log('\n============ 【书旗小说'+i+'】=============');
				ReadTimes=0;
				vediogold=0;
				drawgold=0;
				//阅读
				//await readbook();	
								//阅读
				
          for (let  i= 0; i < 50; i++) {

          ReadTimes = i + 1;
         await readbook();	
        if(ReadTimes>50){break;}
      }
				//收集阅读金币
				//if(ReadTimes>0)
				await receivecoin();
				
				//看视频奖励金币
				await vediogoldprize(0);
				
				//看视频奖励抽奖次数
				//await vediodrawprize2(0);
				
				//个人信息
				await userinfo();
			}
		}
		
	}
}  
  


function readbook() {
  return new Promise((resolve, reject) => {
  const url = "https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery?sdk=14.4&ustatus=1&umidtoken=Q21LGmZLOov%2FojV3%2FCPiyRDf%2FIjeD0We&net_env=wifi&placeid=111111&user_id=2008201663&sn=4F49CB0E637A2A7B791D1C67978307DC02BA4BB2&msv=10.0.0&brand=Apple&imei=9ED8D58C773C7A9B9FB79CB4B2C9B51B879A7B8B&appVer=1.0.2.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDA4MjAxNjYzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF85RUQ4RDU4Qzc3M0M3QTlCOUZCNzlDQjRCMkM5QjUxQjg3OUE3QjhCIiwic24iOiJmYXN0XzRGNDlDQjBFNjM3QTJBN0I3OTFEMUM2Nzk3ODMwN0RDMDJCQTRCQjIiLCJleHAiOjE2MTQ5MDIyNzgsInVzZXJJZCI6IjIwMDgyMDE2NjMiLCJpYXQiOjE2MTQzODM4NzgsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.8oYHHdWnCPddcj3bMJxbXrhSF3Z_QejcdfbIEcwjjBo9DfzUYWXJjwMpd7ovHBs8HIE0_J4AaTw8cNMPHSQFdA&statusBarHeight=44.000000&platform=116&ver=210125&mod=iPhone12&wh=1125x2436&utype=vip&utdid=YDkXCdVbU%2FUDAFzmuvKKh47D&idfa=9E3A27E5-561E-41A1-9F17-253A5832E9C3";
  
  const request = {
      url: url,
      headers: {"Accept": "*/*","Accept-Encoding": "gzip, deflate, br","Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9","Connection": "keep-alive","Content-Length": "675","Content-Type": "application/x-www-form-urlencoded","Cookie": "isg=BD8_ytGSYzZEcmdT1jDQggLVxBfJJJPGVMCSnNEM5-414Fdi2fU8F76yJjYeo2s-; cna=CwXAGEF1ikQCASrjt1fCOe7i","Host": "ocean.shuqireader.com","User-Agent": "shuqifast/1.0.2 (iPhone; iOS 14.4; Scale/3.00)"},
      body: 'actId=355&miniWua=HHnB_fiog8PaGJVabW58S26cd0S3Wgx/hikgJqMgJqoe0VMesjTE08LCqhd5iTvhLXBdqfUYk1m/K5dEdILHEm2HIcWIsigowx5WPWaqblMzRuhxugDfBbSW3SpzEZAJxbbX%2B&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1614863071&userId=2008201663&wua=ktgi_ZQqrfuPrh5lPSX%2BedAp99q0UQnhSBDjkyHnQJkbeodeNFk3jMQ5nsWuRQ4Up//1D9l9JIsZWr2EuRoiyXpbHdGAwM2U5sMp8rpIkS7W78RXtSaVLqS91L0IFIUQpq%2BIRWU1HbS7rZ4sK75sh5cIg51KAFxC3HyKO1uQaRqUdV%2Br0QQlWNb15f%2B/fd6DgTVqx/fKALgOZf2EGjnV%2BYhIfcr5MkHFTi0DSKy0Tc3RNE%2B2q8FuMvMiJsbIzqUaKCpBO7npU23pm4tlmlZGatxUU%2B6Vrzo4uzz9pquHdGL4SoRWdBRYPVEgT/PTNoQTu68LLNO9d5Ivvo4powggkIZooQWng8b1ZEB1DPracisN4HOV3sgI8zgBFNc8p/Qb%2Bs7Ux'
  };
	$.post(request, async(error, request, data) =>{
      try {
		const result=JSON.parse(data)
		//$.log(data);
		if(result.status==200)
		{
			//ReadTimes++;
            //if(ReadTimes==50){break;}
			$.log("【阅读任务】第"+ReadTimes+"次阅读成功，获得3金币");
			await $.wait(5000);
			//await readbook();

		}
		 else
		 {	 
			 $.log("【阅读任务】阅读失败，"+result.message);	
			 //$.log(data);			 
		 }
		 
      } catch(e) {
			$.log(e)
      }	
      resolve();  
    });
  });
}  

function receivecoin() {
  return new Promise((resolve, reject) => {
  const url = "https://ocean.shuqireader.com/api/prizecenter/xapi/prize/manual/receive";
 
  const request = {
      url: url,
      headers: {"Accept": "application/json, text/plain, */*","Accept-Encoding": "gzip, deflate, br","Accept-Language": "zh-cn","Connection": "keep-alive","Content-Length": "1141","Content-Type": "application/x-www-form-urlencoded","Host": "ocean.shuqireader.com","Origin": "https://render-web.shuqireader.com","Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.4&ustatus=1&umidtoken=Q21LGmZLOov%2FojV3%2FCPiyRDf%2FIjeD0We&net_env=wifi&placeid=111111&user_id=2008201663&sn=4F49CB0E637A2A7B791D1C67978307DC02BA4BB2&msv=10.0.0&brand=Apple&imei=9ED8D58C773C7A9B9FB79CB4B2C9B51B879A7B8B&appVer=1.0.2.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDA4MjAxNjYzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF85RUQ4RDU4Qzc3M0M3QTlCOUZCNzlDQjRCMkM5QjUxQjg3OUE3QjhCIiwic24iOiJmYXN0XzRGNDlDQjBFNjM3QTJBN0I3OTFEMUM2Nzk3ODMwN0RDMDJCQTRCQjIiLCJleHAiOjE2MTQ5MDIyNzgsInVzZXJJZCI6IjIwMDgyMDE2NjMiLCJpYXQiOjE2MTQzODM4NzgsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.8oYHHdWnCPddcj3bMJxbXrhSF3Z_QejcdfbIEcwjjBo9DfzUYWXJjwMpd7ovHBs8HIE0_J4AaTw8cNMPHSQFdA&statusBarHeight=44.000000&platform=116&ver=210125&mod=iPhone12&wh=1125x2436&utype=vip&utdid=YDkXCdVbU%2FUDAFzmuvKKh47D&idfa=9E3A27E5-561E-41A1-9F17-253A5832E9C3","User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.2.0) WindVane/8.6.1 Shuqi-Lite (iPhone13,2__shuqi__v1.0.2.0) 1125x2436 Winding(WV_2) WK"},
      body: 'platform=116&src=&timestamp=1614862509&userId=2008201663&sqSv=1.0&appVer=1.0.2.0&placeId=&sign=5715164bdc42712bdaeab7147794a542&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.4%26ustatus%3D1%26umidtoken%3DQ21LGmZLOov%252FojV3%252FCPiyRDf%252FIjeD0We%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2008201663%26sn%3D4F49CB0E637A2A7B791D1C67978307DC02BA4BB2%26msv%3D10.0.0%26brand%3DApple%26imei%3D9ED8D58C773C7A9B9FB79CB4B2C9B51B879A7B8B%26appVer%3D1.0.2.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDA4MjAxNjYzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF85RUQ4RDU4Qzc3M0M3QTlCOUZCNzlDQjRCMkM5QjUxQjg3OUE3QjhCIiwic24iOiJmYXN0XzRGNDlDQjBFNjM3QTJBN0I3OTFEMUM2Nzk3ODMwN0RDMDJCQTRCQjIiLCJleHAiOjE2MTQ5MDIyNzgsInVzZXJJZCI6IjIwMDgyMDE2NjMiLCJpYXQiOjE2MTQzODM4NzgsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.8oYHHdWnCPddcj3bMJxbXrhSF3Z_QejcdfbIEcwjjBo9DfzUYWXJjwMpd7ovHBs8HIE0_J4AaTw8cNMPHSQFdA%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210125%26mod%3DiPhone12%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYDkXCdVbU%252FUDAFzmuvKKh47D%26idfa%3D9E3A27E5-561E-41A1-9F17-253A5832E9C3'
  };
	$.post(request, async(error, request, data) =>{
      try {
		  //$.log(data);
		const result=JSON.parse(data);
		if(result.status==200)
		{
			
			$.log("【收集金币】收集阅读金币成功，共获得"+ReadTimes*3+"金币");
			
		}
		 else
		 {	 
			 $.log("【收集金币】收集阅读金币失败,"+result.message);
             //$.log(data);			 
		 }
		 
      } catch(e) {
			$.log(e)
      }	
      resolve();  
    });
  });
}  

function vediogoldprize(j) {
  return new Promise((resolve, reject) => {
  const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
  const request = {
      url: url,
      headers: JSON.parse(vediogoldprizeckArr[1]),
      body: vediogoldprizeckArr[0]
  };
	$.post(request, async(error, request, data) =>{
      try {
		const result=JSON.parse(data)
		//$.log(data);
		if(result.status==200)
		{
			j++;
			$.log("【视频金币】观看第"+j+"个视频成功，获得250金币，等待30s观看下一个视频");
			vediogold+=250;
			await $.wait(30000);
			await vediogoldprize(j);
		}
		 else
		 {	 
			 $.log("【视频金币】观看失败,"+result.message);
			 //$.log(data);
			 
		 }
      } catch(e) {
			$.log(e)
      }	
      resolve();  
    });
  });
} 	
function vediodrawprize(k) {
  return new Promise((resolve, reject) => {
  const url = "https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/";

  const request = {
      url: url,
      headers: {"Accept": "*/*","Accept-Encoding": "gzip, deflate, br","Accept-Language": "zh-Hans-HK;q=1, ja-JP;q=0.9, zh-Hant-HK;q=0.8, yue-Hant-HK;q=0.7","Connection": "keep-alive","Content-Length": "1558","Content-Type": "application/x-www-form-urlencoded","Cookie": "isg=BOLiWLiU9gPEl-pfV_MlwVYvOWxEM-ZNqxbKPyx7D9UA_4B5FMP3XZk9K70DdF7l; cna=F/nEGGYGoQQCAd18Qgx44T2w","Host": "ocean.shuqireader.com","User-Agent": "shuqireader/4.3.6 (iPhone; iOS 13.6.1; Scale/3.00)"},
      body: '_public=skinId%3D999%26idfa%3D682598AF-8153-4756-BDFD-4788CC5EA662%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYD4LFc7a7tMDAJh2PrABGEj8%26user_id%3D2015264453%26sn%3D6453779F07024DBE6D354FF061BAF9EC7B6B3882%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DF00C8EAA65761ACD1A32CC52F57037065AEF2359%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE1MjY0NDUzIiwidXRkaWQiOiIiLCJpbWVpIjoiRjAwQzhFQUE2NTc2MUFDRDFBMzJDQzUyRjU3MDM3MDY1QUVGMjM1OSIsInNuIjoiNjQ1Mzc3OUYwNzAyNERCRTZEMzU0RkYwNjFCQUY5RUM3QjZCMzg4MiIsImV4cCI6MTYxNTE5NzMzMiwidXNlcklkIjoiMjAxNTI2NDQ1MyIsImlhdCI6MTYxNDY3ODkzMiwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.wmJc8Meha6omvlpKnjyeqRgleR4nhrFxrBsH-aMCMAnLGwkrTw6VNCeei5fdt96tupHSByWA2KHTjX4P2ieq5A%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6splus%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D1125x2001%26soft_id%3D21%26utdid%3DYD4LFc7a7tMDAJh2PrABGEj8%26utype%3Dvip%26sdk%3D13.6.1&bookId=8169448&chapterId=1485188&deliveryId=711&key=sq_app_ad&miniWua=HHnB_PdlFuDmwkGY%2BcBZH77DfyMgqZu244ZHP/V7n6Z7jVgE%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=51B53CD6C1C6103896456B26B3610D64&timestamp=1614679122&userId=2015264453&user_id=2015264453&wua=HIVW_6I6S51lTK/UAlI6km9xekyJBRvBJwfNBa/zXNF056EQLOAtdp08hzq26pq%2BODJsuYSVZggngKy4P9iwXjbRzipsYAuyotlHOE2jDNHd0vLjkYx967Co6HW5sFIFfCzpfzFgzXyz0AZK2On/t4AzhsVRkrOPRXFxL/pyWmjQ8NH1HgoJue0vTiXqeuFIKlrWGcEpkDCvFcYef3GsRiwmlxOge4Ttbc364rLQHppI4CKY%3D'
  };
	$.post(request, async(error, request, data) =>{
      try {
		const result=JSON.parse(data)
		//$.log(data);
		
		if(result.cypher==2)
		{
			k++;
			$.log("【视频抽奖】观看第"+k+"个视频成功，获得一次抽奖机会");
			await $.wait(5000);
			//await draw(k);
		}
		 else
		 {	 
			 $.log("【视频抽奖】观看失败达到上限");
			 //$.log(data);
		 }
      } catch(e) {
			$.log(e)
      }	
      resolve();  
    });
  });
} 


function vediodrawprize2(k) {
  return new Promise((resolve, reject) => {
  const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";

  const request = {
      url: url,
      headers: {"Accept": "*/*","Accept-Encoding": "gzip, deflate, br","Accept-Language": "zh-Hans-HK;q=1, ja-JP;q=0.9, zh-Hant-HK;q=0.8, yue-Hant-HK;q=0.7","Connection": "keep-alive","Content-Length": "1558","Content-Type": "application/x-www-form-urlencoded","Cookie": "isg=BOLiWLiU9gPEl-pfV_MlwVYvOWxEM-ZNqxbKPyx7D9UA_4B5FMP3XZk9K70DdF7l; cna=F/nEGGYGoQQCAd18Qgx44T2w","Host": "ocean.shuqireader.com","User-Agent": "shuqireader/4.3.6 (iPhone; iOS 13.6.1; Scale/3.00)"},
      body: '_public=skinId%3D999%26idfa%3D682598AF-8153-4756-BDFD-4788CC5EA662%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYD4LFc7a7tMDAJh2PrABGEj8%26user_id%3D2015264453%26sn%3D6453779F07024DBE6D354FF061BAF9EC7B6B3882%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DF00C8EAA65761ACD1A32CC52F57037065AEF2359%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE1MjY0NDUzIiwidXRkaWQiOiIiLCJpbWVpIjoiRjAwQzhFQUE2NTc2MUFDRDFBMzJDQzUyRjU3MDM3MDY1QUVGMjM1OSIsInNuIjoiNjQ1Mzc3OUYwNzAyNERCRTZEMzU0RkYwNjFCQUY5RUM3QjZCMzg4MiIsImV4cCI6MTYxNTE5NzMzMiwidXNlcklkIjoiMjAxNTI2NDQ1MyIsImlhdCI6MTYxNDY3ODkzMiwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.wmJc8Meha6omvlpKnjyeqRgleR4nhrFxrBsH-aMCMAnLGwkrTw6VNCeei5fdt96tupHSByWA2KHTjX4P2ieq5A%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6splus%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D1125x2001%26soft_id%3D21%26utdid%3DYD4LFc7a7tMDAJh2PrABGEj8%26utype%3Dvip%26sdk%3D13.6.1&bookId=8169448&chapterId=1485188&deliveryId=525&key=sq_app_ad&miniWua=HHnB_Iq1rnd0d%2BznTG6tM4Ndc4eN8A8BvaZLfZyHf/AsLkBU%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=1D562B564A9AE88FB40D418EA4EA856E&timestamp=1614679070&userId=2015264453&user_id=2015264453&wua=HIVW_Ncn0ZKk9dxLHHdYSHJ5XkUE0LaLSoyLuZMSjI3HgB6%2ByCWQao1Bi7ryYrzDKFbwC/wXGK3YQRoGCnkmLiBVlAjNlVtVigxGSpxiMUVzxDSnPlldOR44c1BQB6iYvCRrTKQ5kXz8x5/Tz7HIS7ZHFc7O1ZrGTFeSGSBzRkP/1d901TBeaLRZZds423ni%2BuZZYeYY7YfTb7aCFIJkNXSa2oBkQevENFNhj9QAEOd2/ZLA%3D'
  };
	$.post(request, async(error, request, data) =>{
      try {
		const result=JSON.parse(data)
		//$.log(data);
		
		if(result.status==200)
		{
			k++;
			$.log("【视频抽奖】观看第"+k+"个视频成功，获得一次抽奖机会");
			await $.wait(5000);
			await vediodrawprize2(k);
		}
		 else
		 {	 
			 $.log("【视频抽奖】观看失败,"+result.message);
			 //$.log(data);
		 }
      } catch(e) {
			$.log(e)
      }	
      resolve();  
    });
  });
} 	
		
function draw(k) {
  return new Promise((resolve, reject) => {
  const url = "https://ocean.shuqireader.com/api/activity/activity/v1/lottery/draw?asac=2A20C07RJ9F51AOEFSNHDR";
 
  const request = {
      url: url,
      headers: JSON.parse(drawckArr[1]),
      body: drawckArr[0]
  };
	$.post(request, async(error, request, data) =>{
      try {
		const result=JSON.parse(data)
		//$.log(data);
		if(result.status==200)
		{
			$.log("【抽奖任务】抽奖成功，获得"+result.data.prizeList[0].prizeName);
			drawgold+=parseInt(result.data.prizeList[0].prizeName);
			await $.wait(5000);
			await vediodrawprize(k);
		}
		 else
		 {	 
			 $.log("【抽奖任务】抽奖失败,"+result.message);
			 //$.log(data);
		 }
      } catch(e) {
			$.log(e)
      }	
      resolve();  
    });
  });
} 	
	   

		
	

function userinfo() {
  return new Promise((resolve, reject) => {
  const request = {
      url: userinfock,
      headers: {},
      body: ""
  };
  
	$.post(request, async(error, request, data) =>{
      try {
		  //$.log(data);
		  const result=JSON.parse(data);
		if(result.status==200)
		{
			$.log("【阅读任务】本次共获得"+ReadTimes*3+"金币");
			$.log("【视频任务】本次共获得"+vediogold+"金币");
			$.log("【抽奖任务】本次共获得"+drawgold+"金币");
			$.log("【金币总数】"+result.data.gold);
			$.log("【总计收益】"+result.data.income+"元");	
		}
		 else
		 {	 
			 $.log("【金币总数】数据异常,"+result.message);
             //$.log(data);			 
		 }
		 
      } catch(e) {
			$.log(e)
      }	
      resolve();  
    });
  });
}  



   
// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
