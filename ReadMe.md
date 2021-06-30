# ⚠ 【Action Deprecated】
## ❤ Use [github-script](https://github.com/actions/github-script) instead.
```
    steps:
      - uses: actions/github-script@v4
        with:
          github-token: ${{secrets.GITHUB_TOKEN}}
          script: |
            const { owner, repo } = context.repo
            const { data: { id } } = await github.repos.getLatestRelease({ owner, repo })
            await github.repos.deleteRelease({ owner, repo, release_id: id })
```
In most cases, that way meet your needs better.

more info, check <https://github.com/actions/github-script>

不再推荐使用这个Action，大部分情况[github-script](https://github.com/actions/github-script)同样能做到且更加灵活。

### Example 
```yml
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

| name         | value  | default | description                                                                             |
| ------------ | ------ | ------- | --------------------------------------------------------------------------------------- |
| github_token | string |         | Token for the repo. Can be passed in using `${{ secrets.GITHUB_TOKEN }}`.               |
| repository   | string | ''      | Repository name. Default or empty repository name represents current github repository. |