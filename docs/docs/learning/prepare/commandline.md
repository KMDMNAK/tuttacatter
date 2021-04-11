---
id: commandline
title: コマンドライン
---

通常コンピュータは、プログラムを扱うインターフェースとして、  

**GUI**（グラフィックユーザーインターフェース；実行ファイルなどをダブルクリックして起動したり）  
**CUI**（キャラクタユーザインターフェース；コマンドラインを経由してプログラムを利用）  

の両方を提供している。  

開発では、CUIを使ったほうが何かと便利な場面も多いので、利用法を学んでおいて損はない。  

## windows

windowsではいくつかのコマンドラインインタープリタを提供している。  

### command prompt
- ```[winキー] + R``` を押してから```cmd```と入力
- ```[winキー]```を押して```cmd```と入力

### powershell
- ```[winキー] + R``` を押してから```powershell```と入力
- ```[winキー]```を押して```powershell```と入力

<br />

:::tip windows terminal
```[winキー] + R```を押して```wt```と入力するとwindows terminalが起動する。  
現在microsoftが注力しているインタープリタであり、設定の仕方がvscodeに似ている。  
:::


## Hello World

試しにコマンドプロンプトで以下のコマンドを実行してみましょう。  
```Ctrl + c```で終了できる。  

``` bat
FOR /L %N IN () DO @echo Hello World
```