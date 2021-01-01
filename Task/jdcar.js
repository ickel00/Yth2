/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://car-member.jd.com/api/v1/user/exchange/bean/check?timestamp=1609505238419`;
const method = `GET`;
const headers = {
'Accept-Encoding' : `gzip, deflate, br`,
'Origin' : `https://h5.m.jd.com`,
'Cookie' : `__jd_ref_cls=Babel_CarouselProExpo; mba_muid=16010486624961752090013.2155.1609505232473; mba_sid=2155.5; unpl=V2_ZzNtbRVTFxJ8AUNVfBoIDGIDEl1LX0IUIA9PXH4YVVUyVxNeclRCFnUUR1RnGFwUZwoZWUVcQxxFOEZVehhdDG8KGl9yV0cTGwkoVHIcMms1ChEOQlNCHXcIFAd9H15XVzMRXXJWcxVyCU5RcxBYA24AFlhHVEsQfQ9AV0spXA1jMyKK6%252fmVmdPc%252f%252f6sq941YwURW0ZWQhR2OEdkeikKa2cCE1xDVkEddA0LVHwYVABvChZbS1RHEHALTlFzHloGVwIiXg%253d%253d%7CADC_j1PDzX8c9zrwJJCihhJbHG7AqQfrCj8covBHmLhnpK8LnZUGFvc6gNXRB4gkZCI7vGqRQkMHx6Lp59wmM684CpRU4R3DuqI7QP8M0C1valZtJW7YYiCbrAWJIdDPZ1VndUA6XSA7%252fGBz6bqBr9vGVifw9aJXEzrL2NMcU3j9jvTz8ivm%252fhIn9EEM0yXtbJroIOApuLVH%252fdPWsIPJNoG5nN%252f79xwDSLy86sILRM6bY9m9Bpd2bDAPuTXFiOwv2XBsbZj0Y1wFISLa55M8HmFQv7em4wzPIwPA9MjAWVHnScZIv1k01Eovi98lVXZAzRrVTppTsL6DVyhrzOIyrFq4cFmDwdCjdg9D%252bSYU79qfwB2JTfIJXTJgUmIQhHrlOM9%252fG%252bjAc02ACo1GZVpaBv9qxsAK%252bW8pppk7qMtEQLb7B4bfWZtZ3qjbH33I5PfZuPKprtuXtmmqLHxdoLYrrd1T4Msc9ao9igUQgLPedlv%252fTscMZxRVn2vZaUy7%252bolWZIFAfJrBvYWHNamqKx0pey%252f86ntm%252b9EV2SlCwIFYhaLHDpHtRwSkyptXa%252bIxfX%252bXea3A; __jda=64921067.16010486624961752090013.1601048662.1609498400.1609505186.506; __jdb=64921067.3.16010486624961752090013|506.1609505186; __jdc=64921067; __jdv=64921067%7Ckong%7Ct_1000089893_157_0_184__c82b150931cb773c%7Ctuiguang%7Cf5e6884062e841118900d689408ade02%7C1609498579000; pre_seq=2; pre_session=d1e42ce4f0bf85d182339404bfd394c1c1581e7d|2525; pt_key=app_openAAJfbhBTADBPjx-TpZCAYldVgmKcrwr_WTAbtlsjaPg8ChotYMwTdM8qg1XsrMhhlO9nmo8aQnU; pt_pin=vccde1; pwdt_id=vccde1; sid=2b95c0cecac24ac4dbace05817e7a60w; shshshfp=ebbaa6e580c7290d9d7fbbaf8fd21397; shshshfpa=324ad5d6-cb88-370f-b162-a6dd8c22e05c-1589520969; shshshfpb=h6O1mlAw8gjjU1nlazwmnAQ%3D%3D; shshshsID=3de7a5744e40473edaa8dd99d3caffff_1_1609505188287; cid=8; jxsid=16094722374402912964; retina=1; wxa_level=1; mobilev=touch; __jdu=16010486624961752090013; PPRD_P=LOGID.1609391588720.828095017; __jxjda=64921067.16010486624961752090013.1601048662.1608992108.1609391511.238; qd_fs=1608775613073; qd_ls=1608775613073; qd_sq=2; qd_ts=1609221428295; qd_uid=KJ27GNMH-QET0UUTQEGZ38JVL9JZA; 3AB9D23F7A4B3C9B=M2BZJKWIJJBW4E3WXGMXMMVZIOXOY4RNIG3ZLWGPUGITXKGPUJPQ6MSXT5JVLFJFONEKN3ZGZZ6FYCR2VUEINPNCO4; BATQW722QTLYVCRD={"tk":"jdd01X2DANTU5ONX5KBFSVFY77KRJHT66NR2FDKEFKQWXTLNSQFCXCXNFJ6TNJLX7Y4EVPTZTFY7QHCEJC2D2MCXFAKW4FRW2ALAL5VNST5Y01234567","t":1609069594910}; __wga=1608695047638.1608695004099.1608635899469.1601309527581.3.68; wq_uits=; cartLastOpTime=1605026277; cartNum=8; visitkey=46194798705291766; wq_ug=13; network=wifi; wxmall_ptype=2; webp=0`,
'Connection' : `keep-alive`,
'Accept' : `application/json, text/plain, */*`,
'Host' : `car-member.jd.com`,
'User-Agent' : `jdapp;iPhone;9.3.2;13.6.1;d1e42ce4f0bf85d182339404bfd394c1c1581e7d;network/wifi;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone8,2;addressid/330154768;supportBestPay/0;appBuild/167490;pushNoticeIsOpen/0;jdSupportDarkMode/0;pv/2155.4;apprpd/Home_Main;ref/https%3A%2F%2Fh5.m.jd.com%2FbabelDiy%2FZeus%2F44bjzCpzH9GpspWeBzYSqBA7jEtP%2Findex.html%3Flng%3D114.160312%26lat%3D22.326512%26sid%3D2b95c0cecac24ac4dbace05817e7a60w%26un_area%3D52993_52994_53014_54730%23%2Fjourney%3FcollectionId%3D102%26tttparams%3DsTiQgMTeyJnTG5nIjoiMTE0LjE1OTg1OSIsImdMYXQiOiIyMi4zMjY0NDEifQ7%253D%253D%26un_area%3D52993_52994_53014_54730%26lng%3D114.1603119901815%26lat%3D22.32651212920903;psq/2;ads/;psn/d1e42ce4f0bf85d182339404bfd394c1c1581e7d|2525;jdv/0|kong|t_1000089893_157_0_184__c82b150931cb773c|tuiguang|f5e6884062e841118900d689408ade02|1609498579;adk/;app_device/IOS;pap/JA2015_311210|9.3.2|IOS 13.6.1;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1`,
'ActivityId' : `39443aee3ff74fcb806a6f755240d127`,
'Accept-Language' : `zh-cn`,
'Referer' : `https://h5.m.jd.com/babelDiy/Zeus/44bjzCpzH9GpspWeBzYSqBA7jEtP/index.html?lng=114.160312&lat=22.326512&sid=2b95c0cecac24ac4dbace05817e7a60w&un_area=52993_52994_53014_54730`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body)
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
