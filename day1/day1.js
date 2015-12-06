console.log(Array.from(process.argv[2]).reduce((r, v, i) => ({f: r.f + (v === '(' ? 1 : -1), b: r.f < 0 && !r.b ? i : r.b}), {f:0}))
