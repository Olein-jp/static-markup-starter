# 静的ウェブページのマークアップ用開発環境

Gulpを利用した開発環境を用意しました。

使い方は以下の通りです。
- パッケージをダウンロード
- README.mdは削除してOK
- `npm install`
- `gulp`でLive-Reloadやローカルサーバーが立ち上がる
- `gulp deploy` で `dist`ディレクトリに本番環境にアップロードするためのソースが用意される

詳しくは`gulpfile.js`を読んで下さい。

## 使用プラグイン
- gulp
- gulp-sass
- gulp-sourcemaps
- browser-sync
- gulp-autoprefixer
- gulp-imagemin
- imagemin-mozjpeg
- imagemin-pngquant
- gulp-notify
- gulp-rename（実際には使ってない）
- gulp-plumber
- gulp-cssmin
