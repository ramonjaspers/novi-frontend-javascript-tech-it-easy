// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

/* opd 1 */
function getTelevisionStock() {
  let currentStock = 0;

  inventory.forEach(tv => {
    currentStock += tv.originalStock - tv.sold
  });

  return currentStock;
}

function populateStockDiv() {
  document.getElementById('currentStockBtn').disabled = true;

  const stockDiv = document.getElementById('currentStock');
  stockDiv.innerHTML += getTelevisionStock();
}

/* opd 2 */
function getAllTelevisionTypes() {
  let televisionTypes = []

  inventory.forEach(tv => {
    televisionTypes.push(tv.type);
  });

  return televisionTypes;
}

function getOutOfStockTelevisions() {
  let outOfStock = [];

  inventory.forEach(tv => {
    if ((tv.originalStock - tv.sold) <= 0) {
      outOfStock.push(tv);
    }
  });

  return outOfStock;
}

function getAmbiLightTelevisions() {
  let ambiLightTelevisions = [];

  inventory.forEach(tv => {
    if (tv.options.ambiLight === true) {
      ambiLightTelevisions.push(tv);
    }
  });

  return ambiLightTelevisions;
}

function sortTelevisionsByPrice() {
  return inventory.sort((a, b) => a.price - b.price);
}

/* opd 3 */
function getProfitGoal() {
  let profitGoal = 0;

  inventory.forEach(tv => {
    profitGoal += tv.originalStock * tv.price
  });

  return profitGoal;
}

function populateProfitGoalDiv() {
  document.getElementById('profitGoalBtn').disabled = true;

  const profitGoal = document.getElementById('profitGoal');
  profitGoal.innerHTML += '€ ' + getProfitGoal();
}

function getProfitMade() {
  let profit = 0;

  inventory.forEach(tv => {
    profit += tv.sold * tv.price
  });

  return profit;
}

function populatMadeProfitDiv() {
  document.getElementById('madeProfitBtn').disabled = true;

  const profitMade = document.getElementById('madeProfit');
  profitMade.innerHTML += '€ ' + getProfitMade();
}

/* opd 4 */
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    let highlightedTelevisions = [];
    const highlightedTelevisionsHtml = document.getElementById('highlightedTelevisions');
    for (let i = 0; i < 2; i++) {
      highlightedTelevisions.push(inventory[Math.floor(Math.random() * inventory.length)]);
    }
    highlightedTelevisionsHtml.innerHTML = '<ul>' + highlightedTelevisions[0].type + '<ul />';
    // opd 5d
    highlightedTelevisionsHtml.innerHTML += '<ul>' +
      getTvFullName(highlightedTelevisions[1])
      + '<br />' +
      getTvPrice(highlightedTelevisions[1])
      + '<br />' +
      getScreenSizes(highlightedTelevisions[1].availableSizes)
      + '</ul>';
  }
}

/* opd 5 */
function getTvFullName(tv) {
  return tv.brand + ' ' + tv.type + ' - ' + tv.name;
}

function getTvPrice(tv) {
  return '€ ' + tv.price + ',-';
}

function getScreenSizes(sizes) {
  let output = '';

  sizes.forEach(size => {

    const currentSizeInches = size;
    const currentSizeCm = size * 2.54;
    // we only add a seperator to the end of the string if output is not empty
    output += output ? ' | ' : '';
    output += currentSizeInches + ' inch (' + currentSizeCm + ' cm)';
  });

  return output;
}

function getAllTelevisions(televisions = inventory) {
  const televisionDiv = document.getElementById('televisions');
  //clean the html element bofore inserting values
  televisionDiv.innerHTML = ''
  televisions.forEach(tv => {
    televisionDiv.innerHTML +=
      '<ul>' +
      getTvFullName(tv)
      + '<br />' +
      getTvPrice(tv)
      + '<br />' +
      getScreenSizes(tv.availableSizes)
      + '</ul>';
  });
}