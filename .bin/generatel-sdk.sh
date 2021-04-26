mkdir tmp
wget https://developer.getshifter.io/swagger.yaml -P tmp
docker run --rm \
    -v $PWD:/local openapitools/openapi-generator-cli generate \
    -i /local/tmp/swagger.yaml -g typescript-node -o /local/src
rm -rf tmp