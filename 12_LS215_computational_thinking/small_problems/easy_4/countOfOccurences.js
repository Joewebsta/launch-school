const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(vehicles) {
  let counts = vehicles.reduce((count, vehicle) => {
    count[vehicle] = count[vehicle] || 0;
    count[vehicle] += 1;

    return count;
  }, {})

  for (let vehicle in counts) {
    console.log(`${vehicle} => ${counts[vehicle]}`)
  }  
}

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2