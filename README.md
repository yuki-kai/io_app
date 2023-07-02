# io_app

## 環境
- nginx
- MySQL8
- PHP8
- Laravel9

## 環境構築
```shell script
$ cp src/.env.example src/.env
$ docker compose up -d
$ docker compose exec app bash
$ composer install
$ php artisan key:generate
$ php artisan migrate --seed
```