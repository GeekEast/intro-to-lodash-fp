import _ from 'lodash/fp';

// 三大特点: 
// 自动curry化
// 基本用法：迭代优先，数据置后
const ori_arr = [1, 2, 3];
const new_arr = _.map(x => x * 2, ori_arr);
console.log(new_arr);
console.log(ori_arr === new_arr)

// 支持只写方法
const mapMethod = _.map((x: number) => x * 2);
const filterMethod = _.filter((x: number) => x % 2 === 0);
const newData1 = filterMethod(mapMethod(ori_arr)); // 执行顺序从里到外
console.log(newData1);

// 使用flow从左到右依次执行
const flow_method = _.flow([mapMethod, filterMethod]);
const newData2 = flow_method(ori_arr)
console.log(newData2);

// 链式调用: 下一个函数的执行依赖于上一个函数的返回，顺序调整非常不方便
// 函数时编程: 不同方法能够通过flow轻易的组合，顺序调整方便,

// 柯里化一个函数
const abc = (a, b, c) => [a, b, c]
const curried = _.curry(abc);
console.log(abc(1, 2, 3))
console.log(curried(1)(2)(3))

// lodash函数本身就支持柯里化形式
_.delay(1500, () => console.log('delay')) // supported
_.delay(1500)(() => console.log('delay')) // automatically curried