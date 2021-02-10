/*
仅为自用！！！！
基于肥皂的多看点视频基础上修改成自己的版本...谢谢肥皂大佬！

*/
const jsname = '🧿多看点'
const $ = Env(jsname)
//0为关闭日志，1为开启,默认为0
const logs = 0;
//0为关闭通知，1为所有通知,默认为0
const notifyInterval = 1;
//通知风格
let tz = '';
//let cash = $.getval('cash') || 0; //0为不自动提现,1为自动提现1元,5为自动提现1元
//////////////////////////////////////////////////////////////////
//hour&min
var hour = '';
var minute = '';
if ($.isNode()) {
  hour = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).getHours();
  minute = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).getMinutes();
} else {
  hour = (new Date()).getHours();
  minute = (new Date()).getMinutes();
}
//现在毫秒格式(13位数)
let todaytimems = Math.round(Date.now())
//现在秒格式(10位数)
let todaytimes = Math.round(Date.now() / 1000)
//今天20200101格式
let today1 = formatDateTime(new Date());
//今天2021.01.30 17:32:01格式
let today2 = formatDateTime(todaytimes);

//////////////////////////////////////////////////////////////////
const dkdtokenbodyArr = [];
let dkdtokenbodyVal = "";

const dkdtokenkeyArr = [];
let dkdtokenkeyVal = "";

const getawardbodyArr = [];
let getawardbodyVal = "";

let getawardscore = 0;

let bodys = $.getdata("getawardbody");

let indexLast = $.getdata('getawardbody_index');

$.begin = indexLast ? parseInt(indexLast, 10) : 1;

if (!(bodys && bodys != '')) {
  $.msg("", "", '⛔️请先-观看视频-获取请求体,每个视频请求一天只能用两次！')
  $.done()
}

getawardbodyVal = bodys.split('#');

Object.keys(getawardbodyVal).forEach((item) => {
  if (getawardbodyVal[item]) {
    getawardbodyArr.push(getawardbodyVal[item])
  }
})


if ($.isNode()) {

  Object.keys(dkdtokenbodyVal).forEach((item) => {
    if (dkdtokenbodyVal[item]) {
      dkdtokenbodyArr.push(dkdtokenbodyVal[item])
    }
  });

  Object.keys(dkdtokenkeyVal).forEach((item) => {
    if (dkdtokenkeyVal[item]) {
      dkdtokenkeyArr.push(dkdtokenkeyVal[item])
    }
  });


} else {
  dkdtokenbodyArr.push($.getdata('dkdtokenbody'));
  dkdtokenkeyArr.push($.getdata('dkdtokenkey'));
}

let dkdurl = $.getdata('dkdurl')
let dkdtxurl = $.getdata('dkdtxurl')
let dkdtxhd = $.getdata('dkdtxhd')
let dkdtxbody = $.getdata('dkdtxbody')

//////////////////////////////////////////////////////////////////
async function dayindex() {
    return new Promise((resolve) => {
      let url = {
        url: `http://dkd-api.dysdk.com/task/index_days`,
        body: `${dkdtokenbodyVal}`,
        headers: JSON.parse(dkdtokenkeyVal),
      };
      $.post(url, async (err, resp, data) => {
        try {
          if (err) {
            console.log("⛔️API查询请求失败❌ ‼️‼️");
            console.log(JSON.stringify(err));
            $.logErr(err);
          } else {
            if (safeGet(data)) {
              if (logs == 1) $.log(data)
              data = JSON.parse(data);
              tasklist0 = data.data.list[0].status
              tasklist1 = data.data.list[1].status
              tasklist2 = data.data.list[2].status
              tasklist3 = data.data.list[3].status

              $.log(`【视频领金币】:${data.data.list[0].task_go}`);
              $.log(`【广告领金币】:${data.data.list[1].task_go}`);
              $.log(`【小说赚】:${data.data.list[2].task_go}`);
              $.log(`【分享赚】:${data.data.list[3].task_go}`);
              $.log(`【高额游戏赚】:${data.data.list[4].task_go}`);
              $.log(`【集赞得金币】:${data.data.list[5].task_go}`);

            }
          }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve();
        }
      });
    });
  }


  !(async () => {
    cc = (`${jsname}任务执行通知🔔`);
    if (!dkdtokenbodyArr[0]) {
      console.log($.name, '【提示】请先前往获取cookie📲')
      return;
    }
    dkdtokenbodyVal = dkdtokenbodyArr[0];
    dkdtokenkeyVal = dkdtokenkeyArr[0];

    console.log(`\n💗💕 开始执行脚本任务 💕💗\n`)
    console.log(`\n✅ 任务状态\n`)
    await dayindex()
    console.log(`\n✅ 日常任务\n`)
    if (hour == 8 || hour == 12 || hour == 23) {
      console.log(`\n+执行【签到】任务+\n`)
      await dkdqd() //多看点签到
      console.log(`\n+执行【转盘任务】任务+\n`)
      await dkdsxzp() //刷新转盘
      await dkdcj() //转盘抽奖

      console.log(`\n+领取【日常任务红包】奖励+\n`)
      await redpro1()
      await redpro2()
      await redpro3()
      await redpro4()
    }
    console.log(`\n+执行【视频领金币】任务+\n`)
    await dkdbx() //视频宝箱
    await dkdbxfb() //视频宝箱翻倍
    if (tasklist0 == 0) {
      await dkdsc() //视频领金币
    }
    if (tasklist1 == 0) {
      console.log(`\n+执行【广告领金币】*10 任务+\n`)
      await dkdgg() //广告视频
    }
    if (tasklist2 == 0) {
      console.log(`\n+执行【小说赚】任务+\n`)
      await dkdxs() //小说？？
      await dkdsdjl() //小说时段奖励？？
    }
    if (tasklist3 == 0 ) {
      console.log(`\n+执行【分享赚】任务+\n`)
      await dkdfx() //分享
    }

    console.log(`\n✅ 刷视频任务\n`)
    await dkdvideoapp() //刷视频
    console.log(`\n✅ 提现任务\n`)
    await dkdtx() //提现
    await dkdxx() //用户信息
    await showmsg2();


  })()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//////////////////////////////////////////////////////////////////
//通知1
function showmsg1() {
  if (notifyInterval != 1) {
    console.log(cc + '\n' + tz);
  }

  if (notifyInterval == 1) {
    $.msg(cc, '\n', tz);
  }
}
//通知2
async function showmsg2() {
  if (notifyInterval == 1) {
    if ($.isNode()) {
      if ((hour == 8 && minute <= 30) || (hour == 12 && minute <= 30) || (hour == 23 && minute <= 30)) {
        await notify.sendNotify($.name, tz)
      }
    } else {
      if ((hour == 8 && minute <= 30) || (hour == 12 && minute <= 30) || (hour == 23 && minute <= 30)) {
        $.msg(cc, '', tz);
      }
    }
  } else if (notifyInterval == 0) {
    console.log(cc + '' + tz);
  }
}
//////////////////////////////////////////////////////////////////

async function dkdvideoapp() {
  console.log(`+检查【刷视频】任务状态+\n`)
  await $.wait(2000)
  await redcountdown();
  if (videostatus == 2 || videostatus == 4) {
    await dkdvideo();
  } else if (videostatus == 3) {
    console.log(`\n+执行【观看广告】任务+\n`)
    await redgetaward();
  }
}
//dkdvideo
async function dkdvideo() {
  if (!getawardbodyArr[0]) {
    console.log($.name, '【提示】请把阅读视频的请求体填入Github 的 Secrets 中，请以#隔开')
    return;
  }
  $.log(`【视频总数】:共有${getawardbodyArr.length}个`)
  $.index = 0;

  for (let i = indexLast ? indexLast : 0; i < getawardbodyArr.length; i++) {
    if (getawardbodyArr[i]) {
      getawardbody = getawardbodyArr[i];
      $.index = $.index + 1;
      console.log(`\n+执行【观看视频】任务-第${$.begin}个+\n`)
      await $.wait(2000)
      console.log(`📠正在打印本次运行结果...\n`)
    }
    await AutoRead();
    break;
  }

  //$.log(`\n🧿多看点本次共完成${$.index}次阅读，获得${getawardscore}个金币`);
  //tz += `【自动阅读】：${getawardscore}个金币\n`;
}
//AutoRead
function AutoRead() {
  return new Promise((resolve, reject) => {
    let url = {
      url: `http://dkd-api.dysdk.com/android_video/getaward`,
      headers: JSON.parse(dkdtokenkeyVal),
      body: getawardbody
    };
    $.post(url, async (error, response, data) => {
      $.begin = $.begin + 1;
      let res = $.begin % getawardbodyArr.length
      $.setdata(res + "", 'getawardbody_index');
      if (logs == 1) $.log(data)
      data = JSON.parse(data);
      if (data.status_code == 10020) {
        $.log(`【本次视频】:${data.message}`);
      } else {
        $.log(`【本次视频】:获取${data.data.award}个金币🏅\n`);
      }
      resolve()
    })
  })
}
//redcountdown
async function redcountdown() {
  return new Promise((resolve) => {
    let url = {
      url: `http://dkd-api.dysdk.com/video/red_countdown`,
      body: dkdtokenbodyVal,
      headers: JSON.parse(dkdtokenkeyVal),
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            videostatus = data.data.status
            if (videostatus == 2 || videostatus == 4) {
              console.log("【目前状态】:视频📽");
            } else if (videostatus == 3) {
              console.log("【目前状态】:红包🧧");
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//red_getaward
async function redgetaward() {
  return new Promise((resolve) => {
    let url = {
      url: `http://dkd-api.dysdk.com/video/red_getaward`,
      body: `adType=2&${dkdtokenbodyVal}`,
      headers: JSON.parse(dkdtokenkeyVal),
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            getawardtime = data.data.red_time
            if (data.status_code == 10020) {
              $.log(`【惊喜红包🧧】:${data.message}`);
              tz += `【惊喜红包🧧】:${data.message}\n`
            } else {
              $.log(`【惊喜红包🧧】:获取${data.data.award}个金币🏅\n`);
              tz += `【惊喜红包🧧】:获取${data.data.award}个金币🏅\n`
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

//////////////////////////////////////////////////////////////////
async function redpro1() {
  return new Promise((resolve) => {
    let url = {
      url: `http://dkd-api.dysdk.com/task/get_award_pro`,
      body: `step=1&${dkdtokenbodyVal}`,
      headers: JSON.parse(dkdtokenkeyVal),
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            getawardtime = data.data.red_time
            if (data.status_code == 10020) {
              $.log(`【20%进度红包】:${data.message}`);
            } else {
              $.log(`【20%进度红包】:获取${data.data.award}个金币🏅\n`);
              tz += `【20%进度红包】:获取${data.data.award}个金币🏅\n`
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function redpro2() {
  return new Promise((resolve) => {
    let url = {
      url: `http://dkd-api.dysdk.com/task/get_award_pro`,
      body: `step=2&${dkdtokenbodyVal}`,
      headers: JSON.parse(dkdtokenkeyVal),
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            getawardtime = data.data.red_time
            if (data.status_code == 10020) {
              $.log(`【50%进度红包】:${data.message}`);
            } else {
              $.log(`【50%进度红包】:获取${data.data.award}个金币🏅\n`);
              tz += `【50%进度红包】:获取${data.data.award}个金币🏅\n`
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function redpro3() {
  return new Promise((resolve) => {
    let url = {
      url: `http://dkd-api.dysdk.com/task/get_award_pro`,
      body: `step=3&${dkdtokenbodyVal}`,
      headers: JSON.parse(dkdtokenkeyVal),
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            getawardtime = data.data.red_time
            if (data.status_code == 10020) {
              $.log(`【80%进度红包】:${data.message}`);
            } else {
              $.log(`【80%进度红包】:获取${data.data.award}个金币🏅\n`);
              tz += `【80%进度红包】:获取${data.data.award}个金币🏅\n`
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function redpro4() {
  return new Promise((resolve) => {
    let url = {
      url: `http://dkd-api.dysdk.com/task/get_award_pro`,
      body: `step=4&${dkdtokenbodyVal}`,
      headers: JSON.parse(dkdtokenkeyVal),
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            getawardtime = data.data.red_time
            if (data.status_code == 10020) {
              $.log(`【100%进度红包】:${data.message}`);
            } else {
              $.log(`【100%进度红包】:获取${data.data.award}个金币🏅\n`);
              tz += `【100%进度红包】:获取${data.data.award}个金币🏅\n`
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

////////////////////////////////////////////////////////////////////////
//多看点签到
function dkdqd(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (typeof $.getdata('dkdurl') === "undefined") {
        $.msg($.name, "", '请先获取多看点Cookie!😓', )
        return
      }
      let url = {
        url: 'http://dkd-api.dysdk.com/task/sign',
        headers: JSON.parse(dkdtokenkeyVal),
        body: `adType=2&${dkdtokenbodyVal}`,
      }
      $.post(url, async (err, resp, data) => {
        try {
          const result = JSON.parse(data)
          if (result.status_code == 200) {
            $.log(`【签到】:获取${result.data.sign_award}金币`);
          }
          if (result.status_code == 10020) {
            $.log(`【签到】:${result.message}🚫`);


          }
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    }, timeout)
  })
}

//多看点提现ck
function dkdtxck() {
  if ($request.url.indexOf("withdraw_do?") > -1) {
    $.setdata(JSON.stringify($request.url), 'dkdtxurl')
    $.log(dkdtxurl)
    $.setdata(JSON.stringify($request.headers), 'dkdtxhd')
    $.log(dkdtxhd)
    $.setdata($request.body, 'dkdtxbody')
    $.log(dkdtxbody)
    $.msg($.name, "", "多看点提现数据获取成功！")

  }
}
//多看点广告视频
function dkdgg(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: 'http://dkd-api.dysdk.com/task/get_ad_award',
      headers: JSON.parse(dkdtokenkeyVal),
      body: `adType=2&${dkdtokenbodyVal}&type=2`,
    }
    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.status_code == 200) {
          $.log(`【广告领金币】:获取${result.data.award}金币`);
        }
        if (result.status_code == 10020) {
          $.log(`【广告领金币】:${result.message}🚫`);
        }
      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}
//多看点视频宝箱
function dkdbx(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: 'http://dkd-api.dysdk.com/red/box_award',
      headers: JSON.parse(dkdtokenkeyVal),
      body: `${dkdtokenbodyVal}`,
    }
    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.status_code == 200) {
          $.log(`【视频宝箱】:获取${result.data.award}金币`);
        }
        if (result.status_code == 10020) {
          $.log(`【视频宝箱】:${result.message}🚫`);
        }
      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}
//多看点视频宝箱翻倍
function dkdbxfb(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: 'http://dkd-api.dysdk.com/red/box_extra',
      headers: JSON.parse(dkdtokenkeyVal),
      body: `adType=2&${dkdtokenbodyVal}`,
    }
    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.status_code == 200) {
          $.log(`【视频宝箱翻倍】:获取${result.data.award}金币`);
        }
        if (result.status_code == 10020) {
          $.log(`【视频宝箱翻倍】:${result.message}🚫`);
        }
      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}
//多看点转盘抽奖
function dkdcj(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: 'http://dkd-api.dysdk.com/lotto/start',
      headers: JSON.parse(dkdtokenkeyVal),
      body: `adType=2&${dkdtokenbodyVal}`,
    }
    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.status_code == 200) {
          $.log(`【转盘抽奖】:获取${result.data.award}金币`);
        }
        if (result.status_code == 10020) {
          $.log(`【转盘抽奖】:${result.message}🚫`);
        }
      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}
//多看点分享
function dkdfx(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: 'http://dkd-api.dysdk.com/task/get_award',
      headers: JSON.parse(dkdtokenkeyVal),
      body: `id=52&${dkdtokenbodyVal}`,
    }
    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.status_code == 200) {
          $.log(`【分享任务】:获取${result.data.award}金币`);
        }
        if (result.status_code == 10020) {
          $.log(`【分享任务】:${result.message}🚫`);
        }
      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}
//多看点小说
function dkdxs(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: 'http://dkd-api.dysdk.com/task/get_award',
      headers: JSON.parse(dkdtokenkeyVal),
      body: `id=51&${dkdtokenbodyVal}`,
    }
    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.status_code == 200) {
          $.log(`【小说赚】:获取${result.data.award}金币`);
        }
        if (result.status_code == 10020) {
          $.log(`【小说赚】:${result.message}🚫`);
        }
      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}
//多看点小说时段奖励
function dkdsdjl(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: 'http://dkd-api.dysdk.com/video/extra_get',
      headers: JSON.parse(dkdtokenkeyVal),
      body: `${dkdtokenbodyVal}`,
    }
    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.status_code == 200 && result.data.status == -1) {
          $.log(`【小说时段奖励】:${result.data.msg}`);
        } else if (result.status_code == 200 && result.data.award >= 0) {
          $.log(`【小说时段奖励】:获取${result.data.award}金币`);
        } else if (result.status_code == 10020) {
          $.log(`【小说时段奖励】:${result.message}🚫`);
        }

      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}
//多看点视频时长
function dkdsc(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: 'http://dkd-api.dysdk.com/task/get_ad_award',
      headers: JSON.parse(dkdtokenkeyVal),
      body: `adType=2&${dkdtokenbodyVal}&type=1&overLimit`,
    }
    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.status_code == 200) {
          $.log(`【视频领金币】:获取${result.data.award}金币`);
        }
        if (result.status_code == 10020) {
          $.log(`【视频领金币】:${result.message}🚫`);
        }
      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}
//多看点刷新转盘
function dkdsxzp(timeout = 0) {
  return new Promise((resolve) => {
    let sx = dkdtxhd.match(/headerInfo":"\w+/) + ''
    let url = {
      url: `http://dkd-api.dysdk.com/lotto/index?${dkdtokenbodyVal}` + '&headerInfo=' + sx.replace('headerInfo":"', ""),
      headers: JSON.parse(dkdtokenkeyVal),
      body: '',
    }
    $.post(url, async (err, resp, data) => {
      try {
        //$.log(str.replace('headerInfo":"',""))
        const result = JSON.parse(data)
        if (result.status_code == 200) {
          console.log(`【抽奖次数】:次数为${result.data.times}次`)
        }
        if (result.status_code == 10020) {
          console.log('【刷新抽奖】:失败🚫:' + result.message)
        }
      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}
//多看点提现
function dkdtx(timeout = 0) {
  return new Promise((resolve) => {
    let str = dkdtxhd.match(/headerInfo":"\w+/) + ''
    let url = {
      url: `http://dkd-api.dysdk.com/money/withdraw_do?${dkdtokenbodyVal}` + '&headerInfo=' + str.replace('headerInfo":"', ""),
      headers: JSON.parse($.getdata('dkdtxhd')),
      body: dkdtxbody,
    }
    $.post(url, async (err, resp, data) => {
      try {
        //$.log(str.replace('headerInfo":"',""))
        const result = JSON.parse(data)
        if (result.status_code == 200) {
          $.log(`【自动提现】:${result.message}🎉`);
        }
        if (result.status_code == 10020) {
          $.log(`【自动提现】:${result.message}🚫`);
        }
      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}
//多看点用户信息
function dkdxx(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: 'http://dkd-api.dysdk.com/user/index',
      headers: JSON.parse(dkdtokenkeyVal),
      body: `${dkdtokenbodyVal}`,
    }
    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.status_code == 200) {
          $.log("", $.name + '运行完毕！', "")
          $.log(`【用户名】:${result.data.nickname}`);
          $.log(`【当前余额】:¥${result.data.cash}元`);
          $.log(`【总金币】:${result.data.gold}金币🏅`);
          $.log(`【今日金币】:${result.data.today_gold}金币🏅`);
          tz += `【用户名】:${result.data.nickname}\n`
          tz += `【当前余额】:¥${result.data.cash}元\n`
          tz += `【总金币】:${result.data.gold}金币🏅\n`
          tz += `【今日金币】:${result.data.today_gold}金币🏅\n`
        }
        if (result.status_code == 10020) {
          $.log($.name, "", '运行完毕,用户信息获取失败🚫 ' + result.message)
          tz += `【用户信息】:失败🚫\n`
        }
      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}


////////////////////////////////////////////////////////////////////

//解码URIcode
function URIcodetranslate(code) {
  return decodeURIComponent(code);
}
//毫秒时间戳改日期 2021.01.08 05:30:13
function time(time) {
  var date = new Date(time + 8 * 3600 * 1000);
  return date.toJSON().substr(0, 19).replace('T', ' ').replace(/-/g, '.');
}
//安全获取
function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`⛔️服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}
//毫秒时间戳转时间 20200108
function formatDateTime(inputTime) {
  var date = new Date(inputTime);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  minute = minute < 10 ? ('0' + minute) : minute;
  second = second < 10 ? ('0' + second) : second;
  return y + m + d;
};

function Randomtime(mintime, maxtime) {
  return Math.round(Math.random() * (maxtime - mintime)) + mintime;
}

function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }
    get(t) {
      return this.send.call(this.env, t)
    }
    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports
    }
    isQuanX() {
      return "undefined" != typeof $task
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }
    isLoon() {
      return "undefined" != typeof $loon
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {}
      return s
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i))
      })
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), a = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(a, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }
    loaddata() {
      if (!this.isNode()) return {}; {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {}; {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i)
        if (r = Object(r)[t], void 0 === r) return s;
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }
    get(t, e = (() => {})) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body)
      }))
    }
    post(t, e = (() => {})) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      });
      else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t));
      else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o)
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body)
        })
      }
    }
    time(t) {
      let e = {
        "M+": (new Date).getMonth() + 1,
        "d+": (new Date).getDate(),
        "H+": (new Date).getHours(),
        "m+": (new Date).getMinutes(),
        "s+": (new Date).getSeconds(),
        "q+": Math.floor(((new Date).getMonth() + 3) / 3),
        S: (new Date).getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            }
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            }
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            }
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}
