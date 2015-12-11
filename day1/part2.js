module.exports=i=>i.split``.reduce((r,v,i)=>({f:r.f+(v==='('?1:-1),b:r.f<0&&!r.b?i:r.b}),{f:0}).b
