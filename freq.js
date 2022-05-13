// const counts = {};
// const sampleArray = ['a', 'a', 'b', 'c'];
// sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
// console.log(counts)

const mostFrequent = arr => {
    var result = {}
    var max = 0
    var frequent = ''
    arr.map( value => {
      if (result[value]) {
        result[value] += 1;
      }
      else {
        result[value] = 1;
      }
      if (max < result[value]) {
        max = result[value];     
        frequent = value;
      }     
    })
    console.log(frequent)
    return frequent;
  }

mostFrequent(['a', 'b', 'c', 'b']);

  


  