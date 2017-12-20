module.exports = input => {
    let particles = input.map(str => str.match(/([\d-]+)/g).map(i => +i))
        .map(([px, py, pz, vx, vy, vz, ax, ay, az]) => ({pos: [px, py, pz], vel: [vx, vy, vz], acc: [ax, ay, az]}))
    const apply = (([x, y, z], [dx, dy, dz]) => ([x + dx, y + dy, z + dz]))
    const accelerate = p => p.vel = apply(p.vel, p.acc)
    const move = p => p.pos = apply(p.pos, p.vel)
    const key = p => `${p.pos[0]},${p.pos[1]},${p.pos[2]}`

    let noCollideCount = 0
    while (noCollideCount < 10) {
        particles.forEach(particle => {
            accelerate(particle)
            move(particle)
        })

        let lastCount = particles.length
        let counts = particles.reduce((acc, particle) => {
            let id = key(particle)
            acc[id] = (acc[id] || 0) + 1
            return acc
        }, {})
        particles = particles.filter(particle => counts[key(particle)] === 1)
        if (lastCount === particles.length) noCollideCount++
        else noCollideCount = 0
    }

    return particles.length
}
