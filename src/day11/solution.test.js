const { part1, part2, parse, step } = require('./solution');

const input = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`;

const step1 = `6594254334
3856965822
6375667284
7252447257
7468496589
5278635756
3287952832
7993992245
5957959665
6394862637`;

const step2 = `8807476555
5089087054
8597889608
8485769600
8700908800
6600088989
6800005943
0000007456
9000000876
8700006848`;

const step3 = `0050900866
8500800575
9900000039
9700000041
9935080063
7712300000
7911250009
2211130000
0421125000
0021119000`;

const step4 = `2263031977
0923031697
0032221150
0041111163
0076191174
0053411122
0042361120
5532241122
1532247211
1132230211`;

const step5 = `4484144000
2044144000
2253333493
1152333274
1187303285
1164633233
1153472231
6643352233
2643358322
2243341322`;

const step6 = `5595255111
3155255222
3364444605
2263444496
2298414396
2275744344
2264583342
7754463344
3754469433
3354452433`;

const step7 = `6707366222
4377366333
4475555827
3496655709
3500625609
3509955566
3486694453
8865585555
4865580644
4465574644`;

const step8 = `7818477333
5488477444
5697666949
4608766830
4734946730
4740097688
6900007564
0000009666
8000004755
6800007755
`;

const step9 = `9060000644
7800000976
6900000080
5840000082
5858000093
6962400000
8021250009
2221130009
9111128097
7911119976`;

const step10 = `0481112976
0031112009
0041112504
0081111406
0099111306
0093511233
0442361130
5532252350
0532250600
0032240000`;

test('11.1: Calculates total flashes after 100 steps', () => {
  expect(part1(input)).toBe(1656);
});

test('11.2: Finds the first step during which all octopuses flash', () => {
  expect(part2(input)).toBe(195);
});

test('11: Tick examples', () => {
  let grid = parse(input);
  let flashes = 0;

  [grid, flashes] = step(grid, flashes);
  expect(grid).toEqual(parse(step1));

  [grid, flashes] = step(grid, flashes);
  expect(grid).toEqual(parse(step2));

  [grid, flashes] = step(grid, flashes);
  expect(grid).toEqual(parse(step3));

  [grid, flashes] = step(grid, flashes);
  expect(grid).toEqual(parse(step4));

  [grid, flashes] = step(grid, flashes);
  expect(grid).toEqual(parse(step5));

  [grid, flashes] = step(grid, flashes);
  expect(grid).toEqual(parse(step6));

  [grid, flashes] = step(grid, flashes);
  expect(grid).toEqual(parse(step7));

  [grid, flashes] = step(grid, flashes);
  expect(grid).toEqual(parse(step8));

  [grid, flashes] = step(grid, flashes);
  expect(grid).toEqual(parse(step9));

  [grid, flashes] = step(grid, flashes);
  expect(grid).toEqual(parse(step10));
});
