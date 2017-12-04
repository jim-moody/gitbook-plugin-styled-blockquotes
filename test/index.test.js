var tester = require('gitbook-tester')
var pluginDir = require('path').join(__dirname, '..')
const examples = require('./examples')

const setupBook = content => {
  return tester
    .builder()
    .withContent(content)
    .withLocalPlugin(pluginDir)
    .create()
}
describe('Rendering blockquotes with and without styling', () => {
  jest.setTimeout(20000)

  it('should return an unchanged blockquote when there is no style defined', done => {
    setupBook(examples.none)
      .then(function (results) {
        expect(results[0].content).toMatchSnapshot()
      })
      .then(done)
      .done()
  })
  test('should return an unchanged blockquote when the defined style is invalid', done => {
    setupBook(examples.invalid)
      .then(results => {
        expect(results[0].content).toMatchSnapshot()
      })
      .then(done)
      .done()
  })
  test('should return correctly rendered html when the defined style is info', done => {
    setupBook(examples.info)
      .then(results => {
        expect(results[0].content).toMatchSnapshot()
      })
      .then(done)
      .done()
  })
  test('should return correctly rendered html when the defined style is info with icon', done => {
    setupBook(examples.infoIcon)
      .then(results => {
        expect(results[0].content).toMatchSnapshot()
      })
      .then(done)
      .done()
  })
  test('should return correctly rendered html when the defined style is tip', done => {
    setupBook(examples.tip)
      .then(results => {
        expect(results[0].content).toMatchSnapshot()
      })
      .then(done)
      .done()
  })
  test('should return correctly rendered html when the defined style is danger', done => {
    setupBook(examples.danger)
      .then(results => {
        expect(results[0].content).toMatchSnapshot()
      })
      .then(done)
      .done()
  })
  test('should return correctly rendered html when the defined style is success', done => {
    setupBook(examples.success)
      .then(results => {
        expect(results[0].content).toMatchSnapshot()
      })
      .then(done)
      .done()
  })
})
