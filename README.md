# Styled hint blocks in your docs

This plugins requires gitbook `>=2.0.0`.

## Install

Add the below to your `book.json` file, then run `gitbook install` :

```json
{
  "plugins": ["styled-blockquotes"]
}
```

## Usage

You can now provide styled blockquotes using the following syntax

```md
> **Info**
> content
```

Replace "Info" with any of the available styles to change the style

Available styles are:

* `info` (default)
* `tip`
* `danger`
* `working`

The above example will produce a styled alert, with an icon:

```html
<div class="alert alert-info hints-alert">
  <div class="hints-icon"><i class="fa fa-info"></i></div>
  <div class="hints-container">
    <p>Some random stuff here</p>
  </div>
</div>
```

![Example Markdown](assets/example-markdown.png)


## Acknowledgements

This project borrowed heavily from the following plugins:

* [Richquotes Plugin](https://github.com/erixtekila/gitbook-plugin-richquotes)
* [Hints Plugin](https://github.com/GitbookIO/plugin-hints)
