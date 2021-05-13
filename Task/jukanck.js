 
 const ck = $.getdata('jukan_ck');
 const body = $.getdata('jukan_body');
 
 !(async () => {
	console.log(`聚看点ck为：${ck}`)
	console.log(`聚看点body为：${body}`)

})()
    .catch((e) => {
      $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
      $.done();
    })