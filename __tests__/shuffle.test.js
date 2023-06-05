const shuffle = require("../src/shuffle");

const data = ["blue", "green", "red"]

describe("shuffle should...", () => {
  // CODE HERE
  //check that shuffle returns an array
  test('shuffle returns array', () => {
    let testData = shuffle(data)
    expect(typeof testData).toBe('array')
  })


  test('shuffle length', () => {
    let testData2 = shuffle(data)
    expect(testData2.length).toBe(data.length)
  })



});
