module.exports=i=>i.split``.reduce((r,v,i)=>({process:r.process+(v==='('?1:-1),b:r.process<0&&!r.b?i:r.b}),{process:0}).b
