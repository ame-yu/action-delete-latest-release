# Delete latest before release
## Usage
### Example Workflow file
In this case i want keep my repository just 1 release.
```yml
name: Main

on: push

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Delete
        uses: ame-yu/action-delete-latest-release@v2
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}

      - name: Release
        uses: softprops/action-gh-release@v1
        with:
          name: type-your-release-name
          tag_name: tag-here
```
### Inputs

| name | value | default | description |
| ---- | ----- | ------- | ----------- |
| github_token | string | | Token for the repo. Can be passed in using `${{ secrets.GITHUB_TOKEN }}`. |
| repository | string | '' | Repository name. Default or empty repository name represents current github repository.|