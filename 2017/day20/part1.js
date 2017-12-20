module.exports = input => {
    let particles = input.map(str => str.match(/([\d-]+)/g).map(i => +i))
        .map(([px, py, pz, vx, vy, vz, ax, ay, az], i) => ({i, pos: [px, py, pz], vel: [vx, vy, vz], acc: [ax, ay, az]}))
    const distance = p => p.pos.reduce((a, v) => a + Math.abs(v), 0)
    const apply = (([x, y, z], [dx, dy, dz]) => ([x + dx, y + dy, z + dz]))
    const accelerate = p => p.vel = apply(p.vel, p.acc)
    const move = p => p.pos = apply(p.pos, p.vel)

    for (let i = 0; i < 500; i++) {
        particles.forEach(particle => {
            accelerate(particle)
            move(particle)
        })
    }

    return particles.reduce((acc, val) => {
        if (distance(val) < distance(acc)) return val
        else return acc
    }, particles[0]).i
}
