//将 obj 类型转化为jsonArr类型
export const objToJsonArr = (obj: any) => {
  let arr: any[] = [];
  for (var i in obj) {
    var keys = obj?.[0]
    var values = obj?.[1]
    var decimals = obj?.[2]
  }
  keys && keys.forEach((item: any, index: number) => {
    arr.push({
      address: item,
      balance: values[index],
      decimals: decimals[index]
    })
  })
  return arr;
}

// 格式化数字千分位
export const format_num_to_K = (str_num: string) => {
  var part_a = str_num.split('.')[0];
  var part_b = str_num.split('.')[1];

  var reg = /\d{1,3}(?=(\d{3})+$)/g;
  part_a = (part_a + '').replace(reg, '$&,');

  return part_a + '.' + part_b;
}

export const format_bn = (numStr: string, decimals: number, decimalPlace = decimals) => {
  numStr = numStr.toLocaleString().replace(/,/g, "");
  // decimals = decimals.toString();

  // var str = (10 ** decimals).toLocaleString().replace(/,/g, '').slice(1);
  var str = Number(`1e+${decimals}`)
    .toLocaleString()
    .replace(/,/g, "")
    .slice(1);

  var res = (numStr.length > decimals
    ? numStr.slice(0, numStr.length - decimals) +
    "." +
    numStr.slice(numStr.length - decimals)
    : "0." + str.slice(0, str.length - numStr.length) + numStr
  ).replace(/(0+)$/g, "");

  res = res.slice(-1) === "." ? res + "00" : res;

  if (decimalPlace === 0) return res.slice(0, res.indexOf("."));

  var length = res.indexOf(".") + 1 + decimalPlace;
  return res.slice(0, length >= res.length ? res.length : length);
  // return res.slice(-1) == '.' ? res + '00' : res;
};
