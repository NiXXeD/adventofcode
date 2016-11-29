module.exports=(i,t=40)=>[...Array(t)].reduce(r=>r.match(/(.)\1*/g).map(v=>v.length+v[0]).join``,i).length
