---
title: 二分搜索lower_bound与upper_bound
date: 2023-12-22
author: Colina
category:
  - c++
tag: 
  - 算法
  - c++
  - 二分搜索
star: true
sticky: true
---

lower_bound与upper_bound是C++标准库中提供的模板算法，这两个算法都是对有序容器进行二分查找，默认是使用`<`，不同点在于lower_bound()返回第一个小于等于val的元素，upper_bound()返回第一个大于val的元素（默认查询范围内是满足<，即有序）。

<!-- more -->

## lower_bound

`lower_bound(beg, end, val)`

`lower_bound(beg, end, val, comp)`

有两个重载版本，返回一个迭代器，表示第一个小于等于val的元素，如果不存在，返回end。

示例：

``` c++
vector<int> nums{1, 2, 3, 3, 4, 4, 5, 10};
auto i1 = lower_bound(nums.begin(), nums.end(), 4) - nums.begin();
cout << "index: " << i1 << ", value: " << nums[i1] << endl;

//out: index: 4, value: 4
```

关于`comp`，默认的类似于`bool comp(const &x, const &val) return x < val;`，第一个参数为搜索范围内的数值，第二个为查询的val。

## upper_bound

`upper_bound(beg, end, val)`

`upper_bound(beg, end, val, comp)`

有两个重载版本，返回一个迭代器，表示第一个小于等于val的元素，如果不存在，返回end。

示例：

``` c++
vector<int> nums{1, 2, 3, 3, 4, 4, 5, 10};
auto i1 = upper_bound(nums.begin(), nums.end(), 4) - nums.begin();
cout << "index: " << i1 << ", value: " << nums[i1] << endl;

//out: index: 6, value: 5
```

关于`comp`，正好是相反的，默认的类似于`bool comp(const &val, const &x) return val < x;`，第一个参数为查询的val，第二个为搜索范围内的数值。

## 常见用法与注意事项

- 在容器升序时（从小到大），`lower_bound(beg, end, val)`查找第一个大于等于val的元素，`upper_bound(beg, end, val)`查找第一个大于val的元素；
- 在容器降序时（从大到小），`lower_bound(beg, end, val, greater<type>())`查找第一个小于等于val的元素，`upper_bound(beg, end, val, greater<type>())`查找第一个小于val的元素；
- 有序指搜索范围内有序即可，对于`lower_bound`来说，使`comp`成立的元素都在不成立的左边，即`true`向右搜索，`false`向左搜索，返回第一个**不符合**`comp`的迭代器；对`upper_bound`来说，使`comp`成立的元素都在不成立的右边，即`true`向左搜索，`false`向右搜索，返回第一个**符合**`comp`的迭代器。只要满足这个要求就能正常使用。
- 只要求*前向迭代器*，对于支持*随机访问迭代器*的容器，会有更好的性能（`n logn`）。
