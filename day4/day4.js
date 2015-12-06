for(x=1;!require('md5')(process.argv[2]+x++).startsWith('000000'););console.log(x)
