---
layout: default
title: VirtualBoxにWindows8 Release Previewをインストールする
---

VirtualBoxにWindows8 Release Previewをインストールする
=========================
「今度Windows8っていう新しいWindowsが出るらしい。試してみたい！」
「Windows8の新しいMetroスタイルアプリを作ってみたい！！」

『でもどうやってWindows8を試せば良いのかわからない……』


よくあると思います。
なので、


無料で最新のWindowsをインストール（＋開発環境の構築）をしてしまう！


その方法をご紹介したいと思います。


必要環境
-----
- OS : Windows, Mac OS X, 各種Linux　（VirtualBoxがインストールできれば何でもOK）
- HDD : 16GB程度の空き容量が必要（とりあえず試すだけなら）
がっつりWin8を使いたい場合は、もっと用意すると良いと思います。



Windows8 Release Previewのダウンロード
------
[Windows 8 Release Preview ISO イメージ](http://windows.microsoft.com/ja-jp/windows-8/iso) のページにアクセスします。少し下にスクロールすると、「ISOイメージ」の下に「日本語」と書かれたリンクがあるのでクリックします。
[画像１](/images/installwin8-1.png)
すると、64ビットと32ビットのどちらかを選べるようになりますが、ここでは「32ビット」をクリックしてダウンロードします。
なお、リンクの下に書かれている「プロダクトキー」は後で必要になりますので、控えておくと良いでしょう。
[画像２](/images/installwin8-2.png)
ダウンロードには時間がかかりますので、その間に次の手順に進みます。


Oracle VirtualBoxのダウンロード
------------
[Downloads - oracle VM VirtualBox](https://www.virtualbox.org/wiki/Downloads)のページにアクセスします。
「VirtualBox binaries」の下、「VirtualBox platform packages.」から、自分が使っているプラットフォーム用のVirtualBoxをインストールします。
私はMacでインストール作業を行うので、OS X用をダウンロードしました。
[画像３](/images/installwin8-3.png)
ダウンロード後は、適当にインストールを行います（管理者権限が必要になります）。
Windowsをお使いの方はWindows用を、Linuxをお使いの方はページの指示に従ってLinux用をインストールしてください。



Windows8のインストール
-------
Windows8のISOイメージのダウンロードと、VirtualBoxのインストールが終わったら、いよいよWindows8のインストールに進みます。
まずは仮想マシンを作成し、その上にWindows8をインストールする形になります。仮想マシンは、若干動きが遅いなど動作に難がありますが、HDDに空き領域さえあればいくらでも作成できるので、手軽に試すにはちょうど良いのです。

ではVirtualBoxを起動します。
[画像４](/images/installwin8-4.png)
左上の「新規(N)」をクリックして、「新規仮想マシンの作成」ウィザードを出します。

[画像５](/images/installwin8-5.png)
「続ける」をクリック。

[画像６](/images/installwin8-6.png)
仮想マシンの名前を決めます。
「名前」に「Windows8 RP」と入力し、「オペレーティング システム」が「Microsoft Windows」、「バージョン」が「Windows 8」になっていることを確認します。「続ける」をクリック。

[画像７](/images/installwin8-7.png)
仮想マシンのメモリサイズを決めます。後からでも変更できるので、ここで悩む必要はありません。
「続ける」をクリック。

[画像８](/images/installwin8-8.png)
仮想マシンのHDDを作成します。
「起動ディスク」にチェックが入っていて、「新規ハードディスクの作成」が選択されている事を確認して「続ける」をクリック。

[画像９](/images/installwin8-9.png)
「新規仮想ディスクの作成」ウィザードが立ち上がります。英語が読めなくてもなんとかなります。
「VDI (VirtualBox Disk IMage)」が選択されていることを確認して「続ける」をクリック。

[画像１０](/images/installwin8-10.png)
仮想ディスクの容量を可変にするか、固定にするか聞いてきます。可変の方が容量を食わなくていいので、可変にします。
「Dynamically allocated」が選択されていることを確認して、「続ける」をクリック。

[画像１１](/images/installwin8-11.png)
仮想ディスクの保存場所と、これからインストールするOSに通知される最大容量を決めます。
「場所」は変更せず、「サイズ」が「25.00 GB」になっていることを確認します。
ここで入力したサイズだけ物理マシンのHDDの容量が減る訳ではないので、ここは適当な値で大丈夫なのです。
「続ける」をクリック。

[画像１２](/images/installwin8-12.png)
確認画面です。
「Create」をクリックします。

[画面１３](/images/installwin8-13.png)
「新規仮想マシンの作成」ウィザードに戻ってきます。
「Create」をクリック。
これで仮想マシンが作成されます。

[画像１４](/images/installwin8-14.png)
VirtualBox最初の画面に帰ってきました。画像のように「Windows8 RP」が増えています。
この「Windows8 RP」を選択して、ウィンドウ左上の「起動(T)」をクリックしてください。

[画像１５](/images/installwin8-15.png)
新しいウィンドウが出て来て、「初回起動ウィザード」が始まります。
「続ける」をクリック。

[画像１６](/images/insyallwin8-16.png)
インストールするOSのディスクを選択する画面になります。
ここで、「メディア ソース」右隣のフォルダのアイコンをクリックしてください。

[画像１７](/images/installwin8-17.png)
ISOイメージを選択する画面になります。ここで先ほどダウンロードしてきたWindows8のISOイメージを選択して、「オープン」を押します。

[画像１８](/images/installwin8-18.png)
「続ける」をクリック。

[画像１９](/images/installwin8-19.png)
確認画面です。
「起動」をクリック。
これでWindows8のインストールが始まります！
次の画面が出てくるまでしばらく待ちます。

[画像２０](/images/installwin8-20.png)
こんなダイアログが出るかもしれませんが、適当に「OK」を押してすっ飛ばします。

[画像２１](/images/installwin8-21.png)
とうとうWindowsらしい画面が出てきました。
「次へ」を押します。

[画像２２](/images/installwin8-22.png)
「今すぐインストール」をクリック。
次の画面に進むまでしばらく時間がかかります。

[画像２３](/images/installwin8-23.png)
プロダクトキーの入力を求められます。
初めにISOイメージをダウンロードしたときに控えておいたプロダクトキーを打ち込みます。
打ち込んだら「次へ」をクリック。

[画像２４](/images/installwin8-24.png)
「同意します」にチェックを入れて「次へ」をクリック。

[画像２５](/images/installwin8-25.png)
インストールの種類を選択するように言われます。
「カスタム」をクリックします。

[画像２６](/images/installwin8-26.png)
「ドライブ0の割り当てられていない領域」が選択されている事を確認して、「ドライブ オプション（詳細）(A)」をクリック。

[画像２7](/images/installwin8-27.png)
「新規」をクリック。

[画像２８](/images/installwin8-28.png)
「適用」をクリック。

[画像２９](/images/installwin8-29.png)
こんな画面が出たら「OK」をクリック。

[画像３０](/images/installwin8-30.png)
「ドライブ 0 パーティション2」が選択されていることを確認して「次へ」をクリック。

[画像３１](/images/installwin8-31.png)
ファイルのコピーが始まります。時間がかかるので、のんびり待ちましょう。

