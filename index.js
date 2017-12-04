var cheerio = require('cheerio')

const styleOptions = {
  'info-icon': {
    icon: 'fa fa-info-circle',
    style: 'info'
  },
  info: {
    style: 'info'
  },
  'tip-icon': {
    icon: 'fa fa-file-text-o',
    style: 'warning'
  },
  tip: {
    style: 'warning'
  },
  'danger-icon': {
    icon: 'fa fa-exclamation-circle',
    style: 'danger'
  },
  danger: {
    style: 'danger'
  },
  'success-icon': {
    icon: 'fa fa-check-circle',
    style: 'success'
  },
  success: {
    style: 'success'
  }
}

const getStyleName = $blockquote => {
  const $strong = $blockquote.find('p:first-child > strong:first-child')
  // if there is no strong tag then the user has not defined a style
  if (!$strong || $strong.length === 0) {
    return
  }
  // we dont want to render the strong tag because it is just telling us what style to use
  $strong.remove()

  return $strong.text().toLowerCase()
}
const getStyleOption = styleName => styleOptions[styleName]

const generateBlockquoteHtml = ({ style, icon = '', content }) => {
  return (
    `<div class="alert alert-${style} hints-alert">` +
    `<div class="hints-icon"><i class="fa ${icon}"></i></div>` +
    `<div class="hints-container">${content}</div>` +
    `</div>`
  )
}
module.exports = {
  book: {
    assets: './assets',
    css: ['plugin-styled-blockquotes.css']
  },
  hooks: {
    page: page => {
      const $ = cheerio.load(page.content)

      $('blockquote').each((i, blockquote) => {
        // define the cheerio elements
        const $blockquote = $(blockquote)
        const styleOption = getStyleOption(getStyleName($blockquote))
        if (!styleOption) {
          return
        }
        // define elements needed for the blockquote html
        const { style, icon } = styleOption
        const content = $blockquote.html()
        const blockquoteHtml = generateBlockquoteHtml({ style, icon, content })
        // append the new blockquote (as a div) to the parent
        $blockquote.before(blockquoteHtml)
        // remove the old blockquote tag, so we dont get the default styling
        $blockquote.remove()
        // update the page content html with the new html
        page.content = $('body').html()
      })
      return page
    }
  }
}
