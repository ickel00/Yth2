/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://car-member.jd.com/api/v1/user/exchange/bean/check?timestamp=1609823486193`;
const method = `GET`;
const headers = {
'Accept-Encoding' : `gzip, deflate, br`,
'Origin' : `https://h5.m.jd.com`,
'Cookie' : `__jd_ref_cls=Mnpm_ComponentApplied; mba_muid=16010486624961752090013.2174.1609823465986; mba_sid=2174.7; __jda=64921067.16010486624961752090013.1601048662.1609820014.1609823384.524; __jdb=64921067.5.16010486624961752090013|524.1609823384; __jdc=64921067; __jdv=64921067%7Ckong%7Ct_1000089893_157_0_184__eafd265403f674c6%7Ctuiguang%7C6df47013e2b1424ba8baa97e8d1bb403%7C1609820081000; pre_seq=3; pre_session=d1e42ce4f0bf85d182339404bfd394c1c1581e7d|2546; unpl=V2_ZzNtbUUCFBBzCUZWLxoPBWIAFw4SXhBFJQBAAHJMXFY0BhNfclRCFnUUR1RnGFgUZwAZXUdcRhVFOEZVehhdDG8KGl9yV0cTGwkoVHIcMmszU0UIQVBHEHQKEVN9HA4CVzMRXXJWcxVyCU5deBhdDGYAEFxBV0YTcAFEU0spXA1jMyKK6%252fmVmdPc%252f%252f6sq941YwURW0ZWQhR2OEdkeikda2ABF1pCGkMSdABPV3oYVQRkARNeQlJFEHwKQWR6KV8%253d%7CADC_j1PDzX8c9zrwJJCihhJbHG7AqQfrCj8covBHmLhnpK8LnZUGFvc6gNXRB4gkZCI7vGqRQkMHx6Lp59wmM684CpRU4R3DuqI7QP8M0C1valZtJW7YYiCbrAWJIdDPZ1VndUA6XSA7%252fGBz6bqBr9vGVifw9aJXEzrL2NMcU3j9jvTz8ivm%252fhIn9EEM0yXtbJroIOApuLVH%252fdPWsIPJNoG5nN%252f79xwDSLy86sILRM6bY9m9Bpd2bDAPuTXFiOwv2XBsbZj0Y1wFISLa55M8HmFQv7em4wzPIwPA9MjAWVHnScZIv1k01Eovi98lVXZAzRrVTppTsL6DVyhrzOIyrFq4cFmDwdCjdg9D%252bSYU79qfwB2JTfIJXTJgUmIQhHrlOM9%252fG%252bjAc02ACo1GZVpaBv9qxsAK%252bW8pppk7qMtEQLb7B4bfWZtZ3qjbH33I5PfZuPKprtuXtmmqLHxdoLYrrd1T4Msc9ao9igUQgLPedlv%252fTscMZxRVn2vZaUy7%252bolWZIFAfJrBvYWHNamqKx0pey%252f86ntm%252b9EV2SlCwIFYhaLHDpHtRwSkyptXa%252bIxfX%252bXea3A; pt_key=app_openAAJf8pPSADCB_BLz4NnwqPglqM20F_C6rlT3_MqV-RR6xOs4ezhkHrjDehPbtcatwZH8T-ReTvI; pt_pin=vccde1; pwdt_id=vccde1; sid=f8b73db6a1d2acb1c3cce0bf5eef646w; __jdu=16010486624961752090013; jxsid_s_t=1609776954005; jxsid_s_u=https%3A//wqs.jd.com/fortune_island/index.html; shshshfp=a5a235e4c8ae488598c4b984cd68a9e1; shshshfpa=324ad5d6-cb88-370f-b162-a6dd8c22e05c-1589520969; shshshfpb=h6O1mlAw8gjjU1nlazwmnAQ%3D%3D; PPRD_P=LOGID.1609391588720.828095017-CT.138920.18.86-UUID.16010486624961752090013; __jxjda=64921067.16010486624961752090013.1601048662.1609739402.1609776953.241; __wga=1609776953954.1609776953954.1609739402048.1601309527581.1.71; cid=8; retina=1; wxa_level=1; mobilev=touch; jxsid=16097394018191281921; deviceName=JDAPP; deviceOS=ios; deviceOSVersion=13.6.1; deviceVersion=0; equipmentId=M2BZJKWIJJBW4E3WXGMXMMVZIOXOY4RNIG3ZLWGPUGITXKGPUJPQ6MSXT5JVLFJFONEKN3ZGZZ6FYCR2VUEINPNCO4; fingerprint=f5665b56f34fa92bf23d30b67d615135; sc_width=375; wq_uits=; cartLastOpTime=1605026277; cartNum=8; visitkey=46194798705291766; wq_ug=13; network=wifi; wxmall_ptype=2; webp=0`,
'Connection' : `keep-alive`,
'Accept' : `application/json, text/plain, */*`,
'Host' : `car-member.jd.com`,
'User-Agent' : `jdapp;iPhone;9.3.2;13.6.1;d1e42ce4f0bf85d182339404bfd394c1c1581e7d;network/wifi;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone8,2;addressid/330154768;supportBestPay/0;appBuild/167490;pushNoticeIsOpen/0;jdSupportDarkMode/0;pv/2174.4;apprpd/WinCash_Home;ref/;psq/3;ads/;psn/d1e42ce4f0bf85d182339404bfd394c1c1581e7d|2546;jdv/0|kong|t_1000089893_157_0_184__eafd265403f674c6|tuiguang|6df47013e2b1424ba8baa97e8d1bb403|1609820081;adk/;app_device/IOS;pap/JA2015_311210|9.3.2|IOS 13.6.1;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1`,
'ActivityId' : `39443aee3ff74fcb806a6f755240d127`,
'Accept-Language' : `zh-cn`,
'Referer' : `https://h5.m.jd.com/babelDiy/Zeus/44bjzCpzH9GpspWeBzYSqBA7jEtP/index.html?lng=114.160348&lat=22.326511&sid=f8b73db6a1d2acb1c3cce0bf5eef646w&un_area=52993_52994_53014_54730`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

