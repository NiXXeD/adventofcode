module.exports = input => {
    let particles = input.map(str => str.match(/([\d-]+)/g).map(i => +i))
        .map(([px, py, pz, vx, vy, vz, ax, ay, az], i) => ({i, pos: [px, py, pz], vel: [vx, vy, vz], acc: [ax, ay, az]}))
    const distance = point => point.distance = point.pos.reduce((a, v) => a + Math.abs(v), 0)
    const apply = (([x, y, z], [dx, dy, dz]) => ([x + dx, y + dy, z + dz]))
    const accelerate = point => point.vel = apply(point.vel, point.acc)
    const move = point => point.pos = apply(point.pos, point.vel)

    for (let i = 0; i < 500; i++) {
        particles.forEach(particle => {
            accelerate(particle)
            move(particle)
            distance(particle)
        })
    }

    return particles.reduce((acc, val) => {
        if (val.distance < acc.distance) return val
        else return acc
    }, particles[0]).i
}
