# adventofcode
Solving http://adventofcode.com puzzles

I'm mostly doing [code golf](https://en.wikipedia.org/wiki/Code_golf) with these solutions, so they will seem very terse.
No, I don't code like this at work.

Using Node v6 for ES6 syntax and features.

To run one day/part
---
```
# run a specific year, day, part
npm start <year#> <day#> <part#>
 
# assumes latest year
npm start <day#> <part#>
 
# assumes latest year and day
npm start <part#>
 
# assumes latest year, day, and part
npm start
```

Example run
---
```
npm start 2015 6 1
 
> 6.1 running...
> 6.1 answer:	   543903
> 6.1 time:	   00:09:7400
```

To test
---
```
# run tests for 2015
npm run test-2016
 
# run tests for 2016
npm run test-2016
 
# run tests for latest year
npm test
```

To set up a new day
---
Creates the folder `dayN`, the files `input`, `part1.js`, `part2.js`, and tests in 
`test.js` for the provided year.

```
# set up the next day in the current year
npm run setup
 
# set up an exact year / day
npm run setup 2016 12
```
