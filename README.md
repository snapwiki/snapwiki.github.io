# snapwiki.github.io

Website for the Snap! Wiki at https://snapwiki.github.io.
Huge thanks to @ScratchAddons/website for the entire base.

## Building

- If you haven't already, clone the repo using

```shell
git clone https://github.com/snapwiki/snapwiki.github.io.git
```

- Then, get into the folder by typing

```shell
cd snapwiki.github.io
```

1. You will need [Ruby](https://www.ruby-lang.org/en/) and [Bundler](https://bundler.io/) to use [Jekyll](https://jekyllrb.com/). Read [Using Jekyll with Bundler](https://jekyllrb.com/tutorials/using-jekyll-with-bundler/) to install the requirements.

2. Install the dependencies in the `Gemfile`:

```shell
bundle install
```

3. Serve the website (`localhost:4000` by default):

```shell
bundle exec jekyll serve
```
