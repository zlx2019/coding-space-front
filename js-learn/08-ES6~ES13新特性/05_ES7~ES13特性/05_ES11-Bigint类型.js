/**
 * 在Js中，能表示的数字是有限的，一旦超出了该范围，那么则会精度丢失，或者数据不准确;
 */

// 能表示的最大数字 Number.MAX_SAFE_INTEGER + 1
console.log(Number.MAX_SAFE_INTEGER + 1); // 9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2); // 9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 10); // 9007199254741000
console.log(Number.MAX_SAFE_INTEGER + 111); // 9007199254741102

// Bigint是ES11提供的新数据类型，它可以支持更大的数字
console.log(9007199254740992231312n); // 9007199254740992231312n
console.log(900719925474099223131221312312312n);