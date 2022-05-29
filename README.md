# とりあえすローカル版

とにかく動くものを作る目的でローカル版を作成
アクセストークンをローカルストレージに保存していますがこれは本来ダメです、クッキーに保存してください。
設定がdevelopmentなのでbase64を使っていますが（developmentで完結するため）プロダクション版はs3を使って画像ファイルをアップロードする仕様にする予定
今、terraformとfargateを使うべく学習中なので近日中に
AWSにデプロイする。

本来ならローカルストレージではなくuniversal-cookieを使うべき
https://www.npmjs.com/package/universal-cookie

あとsliceもloginのsliceだけでなくgoogle mapの部分もsliceに切り出してconfigureStoreにまとめるべきです。 何かがーーと作ってそのまんまになっているがそのうち纏めます。時間があったら自動ログインとかにも手を出したい。

アプリの実行時の画像
<img src="https://github.com/yousuke-shiraishi/react_rails_gmaps/blob/main/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2021-09-09_8.59.07.png" width="350px">
