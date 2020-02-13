const setDefaults = require('../_lib/setDefaults')

const defaults = {
  sentences: true
}

const toHtml = function(options) {
  options = setDefaults(options, defaults)
  let html = ''
  if (options.sentences === true) {
    html += this.sentences()
      .map(s => s.html(options))
      .join('\n')
  }
  return html
}
module.exports = toHtml
