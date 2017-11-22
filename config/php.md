####

```ts

openssl genrsa -out private.key 1024
openssl genrsa -passout pass:_passphrase_ -out private.key 1024
openssl rsa -in private.key -pubout -out public.key
openssl rsa -in private.key -passin pass:_passphrase_ -pubout -out public.key
php -r 'echo base64_encode(random_bytes(32)), PHP_EOL;'

```