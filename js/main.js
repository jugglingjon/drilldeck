
var currentCard=0;
var cards={
	"upper":[
	{"name":"Upper 1","played":0},
	{"name":"Upper 2","played":0},
	{"name":"Upper 3","played":0},
	{"name":"Upper 4","played":0}
	],
	"core":[
	{"name":"Core 1","played":0},
	{"name":"Core 2","played":0},
	{"name":"Core 3","played":0},
	{"name":"Core 4","played":0}
	],
	"lower":[
	{"name":"Lower 1","played":0},
	{"name":"Lower 2","played":0},
	{"name":"Lower 3","played":0},
	{"name":"Lower 4","played":0}
	],
	"fullbody":[
	{"name":"Full Body 1","played":0},
	{"name":"Full Body 2","played":0},
	{"name":"Full Body 3","played":0},
	{"name":"Full Body 4","played":0}
	]
}

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

//begin buffer
function startBuffer(){
	log('buffer starts at '+workTime);
	log('in buffer');
	window.setTimeout(function(){
		workTime+=buffer;
		log('buffer ends at '+workTime);
		startExercise();
	},buffer*10);
}

//begin exercise
function startExercise(){
	if((workTime+(exTime+buffer))<timeSecs){
		log('exercise starts at '+workTime+' ('+deck[currentCard].name+')');
		log('exercising');
		var seconds=0;
		var currentTimer=setInterval(function(){
			seconds++;
			//console.log(seconds);
			if(seconds>=exTime){
				clearInterval(currentTimer);
			}
		},10);

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

			startBuffer();
		},exTime*10);
	}
	else{
		var remaining=timeSecs-(workTime);

		log(remaining + ' seconds gap time remain');
		end();
	}

}

//workout complete
function end(){
	$('.log').append('<p>done</p>');
}

//begin workout







function getChecked(set){
	var checked=[];

	$(set).filter(':checked').each(function(){
		checked.push($(this).attr('data-inputValue'));
	});


	return checked;

}

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
	$('#go').click(function(){
		deck=combineArrays(getChecked('[name="body-set"]'));
		
		//randomize deck
		shuffle(deck);
		console.log(deck);
		// console.log(getChecked('[name="sweat-set"]'));
		// console.log(getChecked('[name="time-set"]'));

		timeMins=parseInt(getChecked('[name="time-set"]')[0]);
		exTime=parseInt(getChecked('[name="sweat-set"]')[0]);
		timeSecs=timeMins*60;
		console.log(timeMins,exTime,timeSecs);
		startExercise();
	});
});