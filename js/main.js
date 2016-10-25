
var currentCard=0;
var cards={
	"upper":[
	{"name":"Upper 1","frames":["chairsit1.png","chairsit2.png"]},
	{"name":"Upper 2","frames":["1.png","2.png"]},
	{"name":"Upper 3","frames":["chairsit1.png","chairsit2.png"]},
	{"name":"Upper 4","frames":["1.png","2.png"]}
	],
	"core":[
	{"name":"Core 1","frames":["1.png","2.png"]},
	{"name":"Core 2","frames":["1.png","2.png"]},
	{"name":"Core 3","frames":["1.png","2.png"]},
	{"name":"Core 4","frames":["1.png","2.png"]}
	],
	"lower":[
	{"name":"Lower 1","frames":["1.png","2.png"]},
	{"name":"Lower 2","frames":["1.png","2.png"]},
	{"name":"Lower 3","frames":["1.png","2.png"]},
	{"name":"Lower 4","frames":["1.png","2.png"]}
	],
	"fullbody":[
	{"name":"Full Body 1","frames":["1.png","2.png"]},
	{"name":"Full Body 2","frames":["1.png","2.png"]},
	{"name":"Full Body 3","frames":["1.png","2.png"]},
	{"name":"Full Body 4","frames":["1.png","2.png"]}
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

//converts seconds to min:sec
function minSec(time){
	var minutes=Math.floor(time/60);
	var seconds=time - minutes *60;
	if (seconds<10){
		seconds='0'+seconds;
	}

	return minutes+':'+seconds;
}

//create test array of upper and lower body exercises

var deck=[];


//time settings
var timeMins=5,
buffer=10,
exTime=30;

var ms=1000;

var timeSecs=timeMins*60;
var bufferTimer, currentTimer, exerciseTimeout, bufferTimeout, animationTimer;

var workTime=0;

//adds message text to visua log
function log(message){
	//$('.log').append('<p>'+message+'</p>');
	console.log(message);
}



//show card
function showCard(){
	$('.frontCard:first .card-title').text(deck[currentCard].name);
	$('.card').show();
}

function updateWorkoutTimer(){
	var percentWidth=workTime/timeSecs*100;
	$('.workout-timer-elapsed').css('width',percentWidth+'%');
}

//assess and begin buffer/workout cycle
function startCycle(){
	if((workTime+(exTime+buffer))<=timeSecs){
		startBuffer();
	}
	else if(timeSecs-workTime>=30){
		startBuffer(timeSecs-workTime);
	}
	else{
		var remaining=timeSecs-(workTime);

		log(remaining + ' seconds gap time remain');
		end();
	}
}

//begin buffer
function startBuffer(gapTime){
	console.log(gapTime);

	var activeCard=$('.frontCard').first();

	activeCard.addClass('buffering');
	showCard();

	$.each(deck[currentCard].frames,function(){
		activeCard.find('.animation').append($('<img src="img/'+this+'" class="animation-frame">'));
	});

	activeCard.find('.animation-frame:first').addClass('animation-frame-visible');
	animationTimer = setInterval(function(){
		if($('.animation-frame-visible').next().length){
			$('.animation-frame-visible').removeClass('animation-frame-visible').next().addClass('animation-frame-visible');
		}
		else{
			$('.animation-frame-visible').removeClass('animation-frame-visible');
			$('.animation-frame').first().addClass('animation-frame-visible');
		}
	},1500);

	log('buffer starts at '+workTime +' ('+deck[currentCard].name+')');
	log('in buffer');

	var seconds=0;
	activeCard.find('.card-timer').text(buffer-seconds);
	bufferTimer=setInterval(function(){
		seconds++;
		workTime++;
		updateWorkoutTimer();
		activeCard.find('.card-timer').text(buffer-seconds);
		//console.log(seconds);
		if(seconds>=buffer){
			clearInterval(bufferTimer);
		}
	},ms);


	bufferTimeout=window.setTimeout(function(){
		//workTime+=buffer;
		log('buffer ends at '+workTime);

		if(gapTime){
			startExercise(gapTime-buffer);
		}
		else{
			startExercise();
		}
		
	},buffer*ms);
}

function advanceCards(){
	$('.card').eq(2).css({
		"transform":"scale(1.2)",
		"opacity":1,
		"transform":"translateX(500px) rotate(30deg)"
	});

	$('.card').eq(1).addClass('frontCard').css({
		"transform":"scale(1)",
		"top":"100px"
	});

	$('.card').eq(0).css({
		"transform":"scale(.9)",
		"top":"60px"
	}).clone().prependTo('.cards').css({
		"transform":"scale(.8)",
		"top":"20px"
	});

	setTimeout(function(){
		$('.card').last().remove();
	},1000);
}

//begin exercise
function startExercise(gapTime){
	var timerTime=exTime;

	if(gapTime){
		timerTime=gapTime;
		console.log('GAP TIME BEING UTILIZED ('+timerTime+')');
	}

	var activeCard=$('.frontCard').first();

	activeCard.removeClass('buffering');
	log('exercise starts at '+workTime+' ('+deck[currentCard].name+')');
	log('exercising');

	var seconds=0;
	activeCard.find('.card-timer').text(exTime-seconds);
	currentTimer=setInterval(function(){
		seconds++;
		workTime++;
		updateWorkoutTimer();
		activeCard.find('.card-timer').text(exTime-seconds);
		//console.log(seconds);
		if(seconds>=timerTime){
			clearInterval(currentTimer);
			clearInterval(animationTimer);
		}
	},ms);

	exerciseTimeout=window.setTimeout(function(){
		//workTime+=exTime;
		log('exercise ends at '+workTime);

		if(currentCard<(deck.length-1)){
			currentCard++;
		}
		else{
			shuffle(deck);
			currentCard=0;
		}
		advanceCards();
		startCycle();
	},timerTime*ms);


}



//workout complete
function end(){
	log('done');
	$('.workout-timer').hide();

	//populate open end modal window
	$('#endModal .end-elapsed').text(minSec(workTime));
	$('#endModal .end-sweat').text(parseInt(getChecked('[name="sweat-set"]')[0])/30);
	$('#endModal .end-body').text(getChecked('[name="body-set"]').join(','));
	$('#endModal').modal();

	//after modal shown, reset
	$('#endModal').on('shown.bs.modal',function(){
		clearInterval(currentTimer);
		clearInterval(bufferTimer);
		clearInterval(animationTimer);
		window.clearTimeout(exerciseTimeout);
		window.clearTimeout(bufferTimeout);
		$('.animation').empty();
		workTime=0;
		updateWorkoutTimer();
		$('.settings').show();
		$('.card').hide();
	});
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
	$('#btn-go').click(function(){

		$('.settings').fadeOut(function(){
			$('.workout-timer').show();

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

	//skips current card
	$('#btn-skip').click(function(){
		clearInterval(currentTimer);
		clearInterval(bufferTimer);
		clearInterval(animationTimer);
		window.clearTimeout(exerciseTimeout);
		window.clearTimeout(bufferTimeout);

		//workTime+=exTime;
		log('exercise ends at '+workTime);

		//remove this card from rotation
		deck.splice(currentCard,1);

		//if deck is depleted, end
		if(deck.length==0){
			end();
		}

		if(currentCard<(deck.length-1)){
			currentCard++;
		}
		else{
			shuffle(deck);
			currentCard=0;
		}
		advanceCards();
		startCycle();
	});

	$('.btn-end').click(function(){
		end();
		return false;
	});
});