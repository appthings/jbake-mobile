
declare var fluxify: any
declare var RSSParser: any

// fluxify
function act(action, arg) {// sugar
	fluxify.doAction(action, arg )
}

var story = fluxify.createStore({
	id: 'story',
	actionCallbacks: {
		updateStory: function( updater, arg ){
			updater.set({
				store: arg
			})//set
		}//action
	}//c-bs
})//()
console.log('model ready' )

/*
var item = new Object();
item.a = 'b'

set up event listener s
story.on( 'change', function( updates ){
	console.log( story.getState() )
})

act('updateStory', item )
*/

//fetch ///////////////
const CORS = 'https://cors-anywhere.herokuapp.com/'
const RED =  'https://www.reddit.com/.rss'
const STAR = 'assets/feed.xml'

var parser = new RSSParser()
function access() {//specify url
	console.log('fetching')
	return CORS+RED;
}