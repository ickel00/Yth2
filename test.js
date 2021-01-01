/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://api.m.jd.com/client.action?functionId=newBabelAwardCollection`;
const method = `POST`;
const headers = {
'Cookie' : `pin=vccde1;wskey=AAJfbhBSAECB8yFjpzpuWNyYYTVdOxjOL_9wuh4XhwMGYAwXHH4XNCe6B0hPLXKtsm7sWcYrtFYeD8iWe4J9rsJJQaxTdAM1;whwswswws=u0ZcB4yZgwUbrqh7w/SK1r2SHnzr40SblAGj5lsiIigYBPwmjf/l1uFZL2sgyswmdRzlRtLxU6fimcs3v9merCA==;unionwsws={"jmafinger":"u0ZcB4yZgwUbrqh7w\/SK1r2SHnzr40SblAGj5lsiIigYBPwmjf\/l1uFZL2sgyswmdRzlRtLxU6fimcs3v9merCA==","devicefinger":"ZNGGFOATZYF7XGO2XXNIKZO5J45ST5YPWGVDPYO6WWKUUC24AEUAZGDL4WL5YOAJJMDV434E5J2SNAZQKX3LQV52GWOBX2ET7F5SYHUYG7HDB6HJX7FQ"}`,
'Accept' : `*/*`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept-Encoding' : `gzip, deflate, br`,
'Host' : `api.m.jd.com`,
'User-Agent' : `JD4iPhone/167490 (iPhone; iOS 13.6.1; Scale/3.00)`,
'Accept-Language' : `zh-Hans-HK;q=1, ja-JP;q=0.9, zh-Hant-HK;q=0.8, yue-Hant-HK;q=0.7`
};
const body = `area=52993_52994_53014_54730&body=%7B%22actKey%22%3A%22C932B9F114A366F5EB56197FB1FDB13B_babel%22%2C%22activityId%22%3A%222a11Wb3LP183K3RQNdBoBWXVXw2M%22%2C%22scene%22%3A%221%22%2C%22pageClick%22%3A%22Babel_FreeCoupon%22%2C%22from%22%3A%22k_80e1445b6430455d890bb0a6441e7ced%22%2C%22eid%22%3A%22ZNGGFOATZYF7XGO2XXNIKZO5J45ST5YPWGVDPYO6WWKUUC24AEUAZGDL4WL5YOAJJMDV434E5J2SNAZQKX3LQV52GWOBX2ET7F5SYHUYG7HDB6HJX7FQ%22%2C%22moduleId%22%3A%22%22%2C%22cpId%22%3A%22C932B9F114A366F5EB56197FB1FDB13B_babel%22%2C%22args%22%3A%22key%3DBB9E33F007F0B690D041D507FDB2671616193A3A34AACEE385C75F1532267FF3DB5214FEBD6AAB90A17C21A72E5F4EA1_babel%2CroleId%3DC932B9F114A366F5EB56197FB1FDB13B_babel%2CstrengthenKey%3D829933F20193C15B599387644346F9EF88A8ADF36153F7E98958F800B3F4D6F9719E5D07B51353EE9AE349B24FB0FFDB_babel%22%7D&build=167490&client=apple&clientVersion=9.3.2&d_brand=apple&d_model=iPhone8%2C2&eid=ZNGGFOATZYF7XGO2XXNIKZO5J45ST5YPWGVDPYO6WWKUUC24AEUAZGDL4WL5YOAJJMDV434E5J2SNAZQKX3LQV52GWOBX2ET7F5SYHUYG7HDB6HJX7FQ&isBackground=N&joycious=25&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=d1e42ce4f0bf85d182339404bfd394c1c1581e7d&osVersion=13.6.1&partner=apple&rfs=0000&scope=10&screen=1125%2A2001&sign=8bfd60af88cf914c74d190c3de10759f&st=1609463574262&sv=102&uts=0f31TVRjBSsqndu4/jgUPz6uymy50MQJUfnLM7mqLCJC66d3M68/rzueF1WXeJSnq%2BtBTeIHUPJck1IEKIkgrhm7hIrd9G7/YqHYA0tJQ7g1UOPB6PN6CkTvOVCvL0JZIYStEfEdCS7rveMT24m77TOndx4bpC%2BO9gXjK0tmPAgQBFVAmDQ84Rb/W06z4nkMkdwoTIXp4lEqgrwClJcYbw%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=60ddb275050a3e6e687b81a0e8869e4a`;

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
