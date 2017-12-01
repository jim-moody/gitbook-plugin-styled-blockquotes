var cheerio = require('cheerio')

const icons = {
  info: 'fa fa-info-circle',
  tip: 'fa fa-mortar-board',
  danger: 'fa fa-exclamation-circle',
  working: 'fa fa-wrench'
}

const getStyle = $blockquote => {
  const $strong = $blockquote.find('p:first-child > strong:first-child')
  // if there is no strong tag then the user has not defined a style
  if (!$strong || $strong.length === 0) {
    return
  }
  // get the user defined style
  const style = $strong.text().toLowerCase()
  // we dont want to render the strong tag because it is just telling us what style to use
  $strong.remove()

  return style
}
const generateBlockquoteHtml = ({ style, icon, content }) => {
  return `<div class="alert alert-${style} hints-alert">
		<div class="hints-icon"><i class="fa ${icon}"></i></div>
		<div class="hints-container">${content}</div>
		</div>`
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

        // define elements needed for the blockquote html
        const style = getStyle($blockquote) || 'info'
        const content = $blockquote.html()
        const icon = icons[style]

        const blockquoteHtml = generateBlockquoteHtml({ style, icon, content })

        // append the new blockquote (as a div) to the parent
        $blockquote.before(blockquoteHtml)
        // remove the old blockquote tag, so we dont get the default styling
        $blockquote.remove()
        // update the page content html with the new html
        page.content = $.html()
      })
      return page
    }
  }
}
