const fibonacci = function(term) {
  let an_1 = 0;
  let an = 1;
  if (term < 0) return "OOPS";
  else if (term == 0) return an_1;
  else if (term == 1) return an;
  else
    for (let i = 2; i <= term; i++) {
      [an, an_1] = [an + an_1, an];
    }
  return an;
};

// Do not edit below this line
module.exports = fibonacci;
