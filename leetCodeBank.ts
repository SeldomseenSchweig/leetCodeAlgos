function totalMoney(n: number): number {
  let start = 0;
  let small_res = 0;
  let add = 1;
  let res = 0;

  for (let x = 0; x < n; x++) {
    if (x % 7 === 0 && x != 0) {
      res += small_res;
      small_res = 0;
      add = 1;
      start++;
    }
    let part = add + start;
    small_res = small_res + part;
    console.log(add, start, part, small_res);
    add++;
  }
  console.log(small_res);
  if (n < 7) {
    return small_res;
  } else {
    return res + small_res;
  }
}
