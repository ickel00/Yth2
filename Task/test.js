
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
'User-Agent' : `JD4iPhone/167538 (iPhone; iOS 13.6.1; Scale/3.00)`,
'Accept-Language' : `zh-Hans-HK;q=1, ja-JP;q=0.9, zh-Hant-HK;q=0.8, yue-Hant-HK;q=0.7`
};
const body = `area=52993_52994_53014_54730&body=%7B%22actKey%22%3A%2267C2B5E37F69FE453440CB4B872B543C_babel%22%2C%22activityId%22%3A%222a11Wb3LP183K3RQNdBoBWXVXw2M%22%2C%22scene%22%3A%221%22%2C%22pageClick%22%3A%22Babel_FreeCoupon%22%2C%22from%22%3A%22k_f08ce89c28af42a2817286a5f0915c09%22%2C%22eid%22%3A%22ZNGGFOATZYF7XGO2XXNIKZO5J45ST5YPWGVDPYO6WWKUUC24AEUAZGDL4WL5YOAJJMDV434E5J2SNAZQKX3LQV52GWOBX2ET7F5SYHUYG7HDB6HJX7FQ%22%2C%22moduleId%22%3A%22%22%2C%22cpId%22%3A%2267C2B5E37F69FE453440CB4B872B543C_babel%22%2C%22args%22%3A%22key%3DF9B3468D00E59FAA582EE0AD9942D34B058466548079A97F4CD8C883CE9CF3F63F4C0ACFBCF6184C8DD11C2C78B2E0BC_babel%2CroleId%3D67C2B5E37F69FE453440CB4B872B543C_babel%2CstrengthenKey%3D829933F20193C15B599387644346F9EF7AB4C0812580EDBE1A4F10C4CE16BB60892CA0710578295D1724EC33DCF2B083_babel%22%7D&build=167538&client=apple&clientVersion=9.3.8&d_brand=apple&d_model=iPhone8%2C2&eid=ZNGGFOATZYF7XGO2XXNIKZO5J45ST5YPWGVDPYO6WWKUUC24AEUAZGDL4WL5YOAJJMDV434E5J2SNAZQKX3LQV52GWOBX2ET7F5SYHUYG7HDB6HJX7FQ&isBackground=N&joycious=29&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=d1e42ce4f0bf85d182339404bfd394c1c1581e7d&osVersion=13.6.1&partner=apple&rfs=0000&scope=10&screen=1125%2A2001&sign=f1e8162cf0d95fd56a6583d986a0bf03&st=1612373450298&sv=120&uts=0f31TVRjBSsqndu4/jgUPz6uymy50MQJSCD/Nua/plcUIpmeXZtEC8tS5A6rgVxokl8akoCIh1LS3Pit3tJxm3iHuFPHZ9UaXnjJY8c3/j7EMob91DMyTd6DxME5rOQJbgDRk7WqFIs3C3wrE2Np4WyQLY0/%2Bh6ybGZvF0xdn4M5%2Bej6M3bJI6tpPyyv48zU%2Bltgl00Q9052nGzSfIkjzg%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=9ffe3d98f51027059670836d6cc7579a`;

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

