let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return data.map(band => {
    updateCountry(band);
    capitalizeBandName(band);
    removeDotsInBandName(band);
    return band;
  });
}

function updateCountry(band) {
  band.country = 'Canada'
}

function capitalizeBandName(band) {
  band.name = band.name.split(' ')
                       .map(capitalizeString)
                       .join(' ');
}

function capitalizeString(string) {
  return (string[0].toUpperCase() + string.slice(1));
}

function removeDotsInBandName(band) {
  band.name = band.name.replace(/\./g, '');
}

// function processBands(data) {
//   return data.map(band => {
//     return {
//       name: format(band.name),
//       country: 'Canada',
//       active: band.active,
//     }
//   })
// }

// function format(name) {
//   return capitalize(removePeriod(name));
// }

// function removePeriod(name) {
//   return name.replace(/\./g, '');
// }

// function capitalize(name) {
//   return name.split(' ').map(word => {
//     return (word[0].toUpperCase() + word.slice(1));
//   }).join(' ');
// }

console.log(processBands(bands));

// should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]