var util = require('util'),
    twitter = require('twitter');
var twit = new twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});
//----------------------------------------------------------------------
twit.stream('filter', { track: "i heard" }, function(stream) {
	//this is the event where stuff happens
    stream.on('data', function(data) {
    	output(data);//this calls the function that prints the tweets
	});

});

//----------------------------------------------------------------------
function output(data){
	//if we receive data...

	if(typeof data !== 'undefined' && 
	   typeof data.user !== 'undefined'){
	   	//^ if the data is good, and Not 'undefined' do this:
		printFragment("Created at", data.created_at);
		printFragment("Created by", data.user.name);
		printFragment("Tweet:", data.text);
		 console.log("");		 			 		 
		return true;
	}else return false; //error receiving tweet			
}
function printFragment(prefixMessage, value){
	if(typeof value !== 'undefined') console.log(prefixMessage+" "+value);