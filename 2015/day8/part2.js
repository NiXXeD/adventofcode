module.exports=i=>i.map(s =>s.replace(/\\|"/g,'aa')+'aa').join``.length-i.join``.length
