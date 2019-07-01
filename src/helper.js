

const centsToDollar = (cents) => {
  const dollars =  cents / 100;
  return dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
}

module.exports = centsToDollar;