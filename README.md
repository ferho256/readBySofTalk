# readBySofTalk

Meryの文章読み上げマクロ  
文章を耳で聴くことで推敲を支援する

## セットアップ

1. [Mery](https://www.haijin-boys.com/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8)を入手する

2. [SofTalk](https://w.atwiki.jp/softalk/pages/15.html)を入手する

3. readBySofTalk.jsをダウンロードする

    保存場所はどこでも良い  
    こだわりがなければ`Mery/Macros`フォルダに保存

4. readBySofTalk.jsのpathToSofTalkを設定する

    readBySofTalk.jsを適当なエディタで開き、9行目付近の`pathToSofTalk`に先程入手した`softalk.exe`のフルパスを指定
    
5. (オプション)readLineWithCursorの真偽値を変える

    文字列を選択していないときの挙動を変更できる
    true : カーソルのある行のみ読む  
    false(default) : 文章全体を読む  

6. マクロ読み込み

    メニューバーの マクロ > 選択 から、先程のreadBySofTalkを指定

7. (オプション) 右クリックメニューにマクロ追加

    メニューバーの ツール > ポップアップメニューの設定から、カテゴリをマクロに、コマンドをreadBySofTalk.jsに指定

## 使い方

読み上げたい文章を選択肢、マクロを実行するとSofTalkが起動して読み上げる  
文章を選択しなかった場合、全文が選択され読み上げられる(デフォルト)
