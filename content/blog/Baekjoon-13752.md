---
external: false
title: "Baekjoon 13752"
date: 2023-06-17
---

### 01. Problem

[문제 확인하기](https://www.acmicpc.net/problem/13752){:target="_blank"}

### 02. Solution 1 (Python, memory: 31256KB, time: 48ms)

```python
for _ in range(int(input())): print('=' * int(input()))
```

### 03. Solution 2 (C++ 17, memory: 2020KB, time: 4ms)

```C++
#include <iostream>
#include <string>
#include <string_view>

int main() {
    int n;
    std::cin >> n;
    while (n--) {
        int k;
        std::cin >> k;
        std::string equals(k, '=');
        std::cout << std::string_view(equals) << '\n';
    }
    return 0;
}
```