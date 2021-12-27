module.exports = function (api) {
  api.loadSource(store => {
    const data = require('./data/settings.json');
    const Menu = store.addContentType({typeName: 'Menu'})
    for(const item of data.sidebar){
    	Menu.addNode({
        section: item.section,
        topics: item.topics
	    })
    }
  })
  api.createPages(({ createPage }) => {
  })
}
