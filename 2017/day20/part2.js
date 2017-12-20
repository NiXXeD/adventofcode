module.exports = input => {
    let particles = input.map(str => str.match(/([\d-]+)/g).map(i => +i))
        .map(([px, py, pz, vx, vy, vz, ax, ay, az]) => ({pos: [px, py, pz], vel: [vx, vy, vz], acc: [ax, ay, az]}))
    const apply = (([x, y, z], [dx, dy, dz]) => ([x + dx, y + dy, z + dz]))
    const accelerate = point => point.vel = apply(point.vel, point.acc)
    const move = point => point.pos = apply(point.pos, point.vel)

    let noCollideCount = 0
    while (noCollideCount < 10) {
        particles.forEach(particle => {
            accelerate(particle)
            move(particle)
        })

        let lastCount = particles.length
        particles = particles
            .filter(a => particles
                .filter(b =>
                    a.pos[0] === b.pos[0] && a.pos[1] === b.pos[1] && a.pos[2] === b.pos[2]
                ).length === 1
            )
        if (lastCount === particles.length) noCollideCount++
        else noCollideCount = 0
    }

    return particles.length
}
