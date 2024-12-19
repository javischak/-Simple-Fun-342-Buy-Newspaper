function buyNewspaper(s1, s2) {
  let i = 0, j = 0, k, n = 1;
  while (j < s2.length) {
    k = i;
    i = s1.indexOf(s2[j], i);
    if (i === -1 && k === 0)
      return -1;
    if (i === -1)
      n++;
    else
      j++;
    i++;
  }
  return n;
}
