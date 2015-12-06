module.exports = input => {for(x=1;!require('md5')(input+x++).startsWith('000000'););return x}
