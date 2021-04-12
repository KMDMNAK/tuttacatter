---
id: github
title: Github
sidebar-title: Github
---


[Github](https://github.com/)はGitシステムを提供するウェブサービスです。  

githubを使えば自分のソースコードをウェブ上で管理することができます。従来はプライベートレポジトリなどを利用する場合は有料プランが必要でしたが、  
microsoftに買収されてから、フリープランの自由度が格段に上がりました。  

### Git
Gitシステムとは、ソースコードのバージョンを管理できるシステムのことです。  
コマンドを通じて、ソースコードを管理することができます。  
Gitシステムをウェブを通じて提供しているサービスの一つがGithubです。  
いろいろな会社が同様のサービスを提供しており、GitLabやbacklogなども該当します。  

利用するサービスは異なっていても、扱うgitコマンドは共通です。  
現在のチーム開発の場面においてgitを使っていないということはほぼないでしょう。  
主要なコマンドなどを覚えて、簡単に使ってみましょう。  



## SSH keyの生成

ローカルのコマンドラインで秘密鍵と公開鍵を作成します。

``` bash
ssh-keygen -t rsa
```

SSH鍵の作成についての[参考記事](https://qiita.com/digdagdag/items/9e5c061e7d86e0af9a57)


## Githubへ鍵の登録
鍵を生成したら、下記リンクを参考にgithubに登録しましょう。


https://docs.github.com/ja/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account

公開鍵をgithubに登録することで、コマンドライン上などで認証のフローを簡略化することができるます。  
登録していない場合、認証要求時に毎回パスワードを入力する必要があるので留意。  

