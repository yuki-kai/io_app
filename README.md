# io_app

## 環境
- nginx
- MySQL8
- PHP8
- Laravel9
	- Sanctum
	- Fortify

## 環境構築
```shell script
$ cp src/.env.example src/.env
$ docker compose up -d
$ docker compose exec app bash
$ composer install
$ php artisan key:generate
$ php artisan migrate --seed
```

## 参考記事
- [Laravel9 Sail & React SPA 環境構築](https://zenn.dev/strange_bun/articles/9204e49e28da1c)
- [Laravel Sanctum SPA認証の実装](https://zenn.dev/yudai64/articles/7caaa3c828b828)
- [Laravel 9.x Laravel Sanctum](https://readouble.com/laravel/9.x/ja/sanctum.html)
- [Laravel 9.x Laravel Fortify](https://readouble.com/laravel/9.x/ja/fortify.html)
