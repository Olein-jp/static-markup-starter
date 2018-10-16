# 静的ウェブページのマークアップ用開発環境

## Getting Started

### From GUI
使い方は以下の通りです。
- パッケージをダウンロード
- README.mdは削除してOK
- ディレクトリを保持するためにダミーファイルが置いてあるので必要なければ消してください
- `npm install`
- `gulp`でLive-Reloadやローカルサーバーが立ち上がる

詳しくは`gulpfile.js`を読んで下さい。また、こちらのセットを作る方法を書いたブログ記事もあるので、そちらも読んでもらうとわかりやすいかもしれません。

[いまさら始めるgulp入門](https://olein-design.com/blog/gulp-starter)

### From CLI

```
$ git clone git@github.com:Olein-jp/static-markup-starter.git
$ cd static-markup-starter
$ npm install
$ npm start
```

## Gulp Tasks

|commands|description|
|:--|:--|
|npm start / gulp| start Gulp task|
|npm run sass / gulp sass|Build Sass|
|npm run imagemin / gulp imagemin|Compress images|

## 使用プラグイン
- browser-sync
- gulp
- gulp-autoprefixer
- gulp-changed
- gulp-concat
- gulp-imagemin
- gulp-jshint
- gulp-plumber
- gulp-rename
- gulp-sass
- gulp-sourcemaps
- gulp-svgmin
- gulp-uglify
- imagemin-gifsicle
- imagemin-jpeg-recompress
- imagemin-pngquant
- jshint
