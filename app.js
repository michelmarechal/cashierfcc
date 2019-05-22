let coinArr = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]];

// calculate total in-cash
let totalCashier = (drawer) => {
    let acumulator = 0;
    for(let i in drawer) {
        acumulator += drawer[i][1];
    }
    return parseFloat(acumulator).toFixed(2);
}
// filter any zero value from cid
let cidFilteredArray = (cid, change) => {
    let filtered = cid.filter(function(n) {
        return n[1] > 0 && n[1] < change;
    });
    return filtered.reverse();
}

// Lopp throught cid to return change in cash
let changeInCash = (totalChange, cid, coinArr) => {
  let parsedChange = parseFloat(totalChange).toFixed(2);
  let finder = 0;
  let controlValue = 0;
  let returnedArray = [];
  let filteredCoinArr = coinArr.filter(function(n) {
      return totalChange > n[1];
  });
  // Loop through Cid to get the avaliable amount of each currency
  for (let coinToChange of filteredCoinArr) {
    if (parsedChange > coinToChange[1]) {
      finder = cid
    }
  }
}

// code run
let checkCashRegister = (price, cash, cid) => {
    // call totalCashier to get total in-cash
    let total = totalCashier(cid);
    let change = parseFloat(cash - price).toFixed(2);
    let currentCidFilteredArray = cidFilteredArray(cid, change);
    let cashStatus = {status: "", change: change};
    // test call to changeInCash
    changeInCash(change, currentCidFilteredArray, coinArr);
    if (change < 1 && change != total) {
        for (let insideFiltered of currentFilteredArray) {
            if (change > insideFiltered[1]) {
                cashStatus.status = "INSUFFICIENT_FUNDS";
                cashStatus.change = [];
                return cashStatus;
            }
        }
    } else if (change === total) {
        cashStatus.status = "CLOSED";
        cashStatus.change = cid;
        return cashStatus;
    }
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
