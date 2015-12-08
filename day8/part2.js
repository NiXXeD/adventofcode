module.exports = input => input.map(s => s.replace(/\\|"/g, 'aa') + 'aa').join('').length - input.join('').length
