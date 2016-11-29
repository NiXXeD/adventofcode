module.exports=i=>i.join``.length-i.map(s=>s.replace(/\\\\|\\"|\\x[a-f0-9]{2}/g,'a')).join``.length+i.length*2
