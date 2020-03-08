### Delete latest before release
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
        uses: ame-yu/action-delete-latest-release@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          GITHUB_REPOSITORY: $ {{ github.repository }}

      - name: Release
        uses: softprops/action-gh-release@v1
        with:
          name: type-your-release-name
          tag_name: tag-here
```
