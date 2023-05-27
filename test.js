const hash = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
};

function shift(elm) {
  let diff = hash[elm];

  for (let [key, value] of Object.entries(hash)) {
    if (hash[key] >= diff) {
      hash[key] = hash[key] - diff;
    } else {
      hash[key] = hash[key] + (diff - 1);
    }
  }
}

shift('d');
