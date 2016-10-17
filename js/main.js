
var currentCard=0;
var cards={
	"upper":[
	{"name":"Upper 1"},
	{"name":"Upper 2"},
	{"name":"Upper 3"},
	{"name":"Upper 4"}
	],
	"core":[
	{"name":"Core 1"},
	{"name":"Core 2"},
	{"name":"Core 3"},
	{"name":"Core 4"}
	],
	"lower":[
	{"name":"Lower 1"},
	{"name":"Lower 2"},
	{"name":"Lower 3"},
	{"name":"Lower 4"}
	],
	"fullbody":[
	{"name":"Full Body 1"},
	{"name":"Full Body 2"},
	{"name":"Full Body 3"},
	{"name":"Full Body 4"}
	]
};

//array shuffle function
function shuffle(a) {
	var j, x, i;
	for (i = a.length; i; i--) {
		j = Math.floor(Math.random() * i);
		x = a[i - 1];
		a[i - 1] = a[j];
		a[j] = x;
	}
}

//create test array of upper and lower body exercises

var deck=[];


//time settings
var timeMins=5,
buffer=10,
exTime=30;

var timeSecs=timeMins*60;

var workTime=0;

//adds message text to visua log
function log(message){
	$('.log').append('<p>'+message+'</p>');
}



//show card
function showCard(){
	$('.card .card-title').text(deck[currentCard].name);
	$('.card').show();
}


//assess and begin buffer/workout cycle
function startCycle(){
	if((workTime+(exTime+buffer))<=timeSecs){
		startBuffer();
	}
	else{
		var remaining=timeSecs-(workTime);

		log(remaining + ' seconds gap time remain');
		end();
	}
}

//begin buffer
function startBuffer(){
	$('.card').addClass('buffering');
	showCard();

	log('buffer starts at '+workTime +' ('+deck[currentCard].name+')');
	log('in buffer');

	var seconds=0;
	$('.card .card-timer').text(buffer-seconds);
	var bufferTimer=setInterval(function(){
		seconds++;
		$('.card .card-timer').text(buffer-seconds);
		//console.log(seconds);
		if(seconds>=buffer){
			clearInterval(bufferTimer);
		}
	},1000);


	window.setTimeout(function(){
		workTime+=buffer;
		log('buffer ends at '+workTime);
		startExercise();
	},buffer*1000);
}

//begin exercise
function startExercise(){
	$('.card').removeClass('buffering');
	log('exercise starts at '+workTime+' ('+deck[currentCard].name+')');
	log('exercising');

	var seconds=0;
	$('.card .card-timer').text(exTime-seconds);
	var currentTimer=setInterval(function(){
		seconds++;
		$('.card .card-timer').text(exTime-seconds);
		//console.log(seconds);
		if(seconds>=exTime){
			clearInterval(currentTimer);
		}
	},1000);

	window.setTimeout(function(){
		workTime+=exTime;
		log('exercise ends at '+workTime);

		if(currentCard<(deck.length-1)){
			currentCard++;
		}
		else{
			shuffle(deck);
			currentCard=0;
		}

		startCycle();
	},exTime*1000);


}

//workout complete
function end(){
	$('.log').append('<p>done</p>');
}







//get checked form controls from set, return array of selected values
function getChecked(set){
	var checked=[];

	$(set).filter(':checked').each(function(){
		checked.push($(this).attr('data-inputValue'));
	});


	return checked;

}

//combine arrays and return combined
function combineArrays(array){
	var newArray=[];
	$.each(array,function(){
		$.each(cards[this],function(){
			newArray.push(this);
		});
	});
	return newArray;
}


$(document).ready(function(){

	//go button clicked
	$('#go').click(function(){

		//combine deck from selected body sections
		deck=combineArrays(getChecked('[name="body-set"]'));
		
		//randomize deck
		shuffle(deck);

		//pull time and intensity settings
		timeMins=parseInt(getChecked('[name="time-set"]')[0]);
		exTime=parseInt(getChecked('[name="sweat-set"]')[0]);
		timeSecs=timeMins*60;

		//begin initial workout cycle
		startCycle();
	});
});