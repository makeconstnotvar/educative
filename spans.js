function simpleStockSpan(quotes) {
  let spans = [];
  for (let i = 0; i < quotes.length; i++) {
    let k = 1;
    let end = false;
    while (i - k >= 0 && !end) {
      if(quotes[i-k]<=quotes[i])
        k++;
      else
        end=true;
    }
    spans[i]=k;
  }
  return spans;
}
let quotes = [6,10,7,6,5,7,8];
simpleStockSpan(quotes);