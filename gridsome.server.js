module.exports = function (api) {
  api.loadSource(store => {
    const data = require('./data/menu.json');
    const contentType = store.addContentType({
	    typeName: 'Menu',
    });
    for(const item of data){
    	contentType.addNode({
	        section: item.section,
	        topics: item.topics
	     })
    }
  })
  api.createPages(({ createPage }) => {
  })
}
