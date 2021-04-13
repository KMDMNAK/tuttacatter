---
id: task-algorithm
title: 課題：Algorithm
---

:::tip
アプリケーション開発においてアルゴリズムの知識は必須ではない。
難しかったら飛ばしてよい。
:::


### [課題名]sorting

:::danger 課題
乱数を無作為に発生させて、長さ```N```の配列```A```を作る。  
```A```を昇順にならべるプログラムを作れ。

:::

<br/>
<br/>

例としてpythonでのソート  

``` python
from random import random

def createArray(N):
    return [random() for i in range(N)]

def bubble_sort(A):
    c = 0
    tmp_array = A.copy()
    while c != len(tmp_array)-1:
        if(tmp_array[c] <= tmp_array[c+1]):
            c += 1
            continue
        tmp_array[c] ,tmp_array[c+1] = tmp_array[c+1] ,tmp_array[c]
        c = 0
    return tmp_array
        
```

:::info memo
このような配列の並び替え問題をソート問題といい、コンピュータ科学の主要なトピックの一つ。  
いろいろなアルゴリズムが発明されており、それぞれ計算効率などが違う。  
:::

<br/>

### [課題名]taxi

:::danger 課題
東京都のタクシーは、初乗り1052メートルまでは410円で、以後237メートルごとに80円加算されていく。  
利用距離が```M```メートルの場合の運賃を計算するプログラムを作れ。
:::