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

You can now style blockquotes using the following syntax

```md
> **Info**
> content
```

Replace "Info" with any of the available styles to change the style (case does not matter)

### Available Styles

* `info` (default)
* `tip`
* `danger`
* `success`

Append `-icon` to add the default icon for that type

### HTML

The above example will produce the following html

#### Markup

```html
<div class="alert alert-info hints-alert">
  <div class="hints-icon"><i class="fa fa-info"></i></div>
  <div class="hints-container">
    <p>Some random stuff here</p>
  </div>
</div>
```

#### Rendered

![Example Markdown](https://user-images.githubusercontent.com/26190589/33501641-4fd61e00-d6ab-11e7-9b71-b11441d9c55c.png)

## Acknowledgements

This project borrowed heavily from the following plugins:

* [Richquotes Plugin](https://github.com/erixtekila/gitbook-plugin-richquotes)
* [Hints Plugin](https://github.com/GitbookIO/plugin-hints)
