 !(async () => {
	console.log(`聚看点ck为：$.getdata('jukan_ck')`)
	console.log(`聚看点body为：$.getdata('jukan_body')`)

})()
    .catch((e) => {
      $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
      $.done();
    })