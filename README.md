### Lodash/fp

#### 三大核心
- **自动curry化**: `一个多参函数` -> `多个单参函数`
```javascript
import _ from 'lodash/fp';

// 柯里化一个函数
const abc = (a, b, c) => [a, b, c]
const curried = _.curry(abc);
console.log(abc(1, 2, 3))
console.log(curried(1)(2)(3))

// lodash函数本身就支持柯里化形式
_.delay(1500, () => console.log('delay')) // 不清楚顺序
_.delay(1500)(() => console.log('delay')) // 1500秒后执行一个函数
```
- **迭代优先、数据置后**
```javascript
const ori_arr = [1, 2, 3];
const new_arr = _.map(x => x * 2, ori_arr); // 数据置后
console.log(new_arr); // [2,4,6]
console.log(ori_arr === new_arr) // false 生成的结果是immutable的
```
- **Immutable**
```javascript
var mapMethod2 = (row)=> row*2;
var process2 = fp.map(mapMethod2);
mapMethod2 = (row)=> row*3;
process2([1,2,3]) // -> [2,4,6]; 传入的参数是immutable的
```

### References
- [详解Lodash中的fp实现](https://zhuanlan.zhihu.com/p/20883095)