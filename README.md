
## Development

### Data source
Open API Docs: https://developer.getshifter.io/swagger.yaml

### Build SDK

```bash
$ ./bin/generate-sdk.sh
```

### Update docs

```bash
$ git checkout master
$ yarn docs
$ git add ./docs/
$ git commit -m "docs: update docs"
$ git push origin master
```

### Publish SDK to npm

```bash
$ yarn build
$ npm version [patch|minor|major]
$ npm publish .
```