
var currentCard=0,
	deckCycle=1;

var cards={
	"upper": [
	{
		"name": "Upper 1",
		"frames": [
			"chairsit1.png",
			"chairsit2.png"
		],
		"type": "Upper Body",
		"description": [
			"Description line 1",
			"Description line 2"
		],
		"target":[
			"Biceps",
			"Shoulders",
			"Triceps"
		]
	},
	{
		"name": "Upper 2",
		"frames": [
			"1.png",
			"2.png"
		],
		"type": "Upper Body",
		"description": [
			"Description line 1",
			"Description line 2"
		],
		"target":[
			"Biceps",
			"Shoulders",
			"Triceps"
		]
	},
	{
		"name": "Upper 3",
		"frames": [
			"chairsit1.png",
			"chairsit2.png"
		],
		"type": "Upper Body",
		"description": [
			"Description line 1",
			"Description line 2"
		],
		"target":[
			"Biceps",
			"Shoulders",
			"Triceps"
		]
	},
	{
		"name": "Upper 4",
		"frames": [
			"1.png",
			"2.png"
		],
		"type": "Upper Body",
		"description": [
			"Description line 1",
			"Description line 2"
		],
		"target":[
			"Biceps",
			"Shoulders",
			"Triceps"
		]
	}
	],
	"core": [
	{
		"name": "Core 1",
		"frames": [
			"1.png",
			"2.png"
		],
		"type": "Core",
		"description": [
			"Description line 1",
			"Description line 2"
		],
		"target":[
			"Biceps",
			"Shoulders",
			"Triceps"
		]
	},
	{
		"name": "Core 2",
		"frames": [
			"1.png",
			"2.png"
		],
		"type": "Core",
		"description": [
			"Description line 1",
			"Description line 2"
		],
		"target":[
			"Biceps",
			"Shoulders",
			"Triceps"
		]
	},
	{
		"name": "Core 3",
		"frames": [
			"1.png",
			"2.png"
		],
		"type": "Core",
		"description": [
			"Description line 1",
			"Description line 2"
		],
		"target":[
			"Biceps",
			"Shoulders",
			"Triceps"
		]
	},
	{
		"name": "Core 4",
		"frames": [
			"1.png",
			"2.png"
		],
		"type": "Core",
		"description": [
			"Description line 1",
			"Description line 2"
		],
		"target":[
			"Biceps",
			"Shoulders",
			"Triceps"
		]
	}
	],
	"lower": [
	{
		"name": "Lower 1",
		"frames": [
			"1.png",
			"2.png"
		],
		"type": "Lower Body",
		"description": [
			"Description line 1",
			"Description line 2"
		],
		"target":[
			"Biceps",
			"Shoulders",
			"Triceps"
		]
	},
	{
		"name": "Lower 2",
		"frames": [
			"1.png",
			"2.png"
		],
		"type": "Lower Body",
		"description": [
			"Description line 1",
			"Description line 2"
		],
		"target":[
			"Biceps",
			"Shoulders",
			"Triceps"
		]
	},
	{
		"name": "Lower 3",
		"frames": [
			"1.png",
			"2.png"
		],
		"type": "Lower Body",
		"description": [
			"Description line 1",
			"Description line 2"
		],
		"target":[
			"Biceps",
			"Shoulders",
			"Triceps"
		]
	},
	{
		"name": "Lower 4",
		"frames": [
			"1.png",
			"2.png"
		],
		"type": "Lower Body",
		"description": [
			"Description line 1",
			"Description line 2"
		],
		"target":[
			"Biceps",
			"Shoulders",
			"Triceps"
		]
	}
	],
	"fullbody": [
	{
		"name": "Full Body 1",
		"frames": [
			"1.png",
			"2.png"
		],
		"type": "Full Body",
		"description": [
			"Description line 1",
			"Description line 2"
		],
		"target":[
			"Biceps",
			"Shoulders",
			"Triceps"
		]
	},
	{
		"name": "Full Body 2",
		"frames": [
			"1.png",
			"2.png"
		],
		"type": "Full Body",
		"description": [
			"Description line 1",
			"Description line 2"
		],
		"target":[
			"Biceps",
			"Shoulders",
			"Triceps"
		]
	},
	{
		"name": "Full Body 3",
		"frames": [
			"1.png",
			"2.png"
		],
		"type": "Full Body",
		"description": [
			"Description line 1",
			"Description line 2"
		],
		"target":[
			"Biceps",
			"Shoulders",
			"Triceps"
		]
	},
	{
		"name": "Full Body 4",
		"frames": [
			"1.png",
			"2.png"
		],
		"type": "Full Body",
		"description": [
			"Description line 1",
			"Description line 2"
		],
		"target":[
			"Biceps",
			"Shoulders",
			"Triceps"
		]
	}
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
	time=Math.floor(time);
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

var ms=100,
	timeRemaining=0,
	donutSeconds=0;
	state='buffer'
	globalGapTime=null;

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
	$('.frontCard:first .card-type').text(deck[currentCard].type+' Workout');

	$.each(deck[currentCard].description,function(){
		$('.frontCard:first .card-description').append('<p>'+this+'</p>');
	});

	var targets=deck[currentCard].target.join(', ');
	$('.frontCard:first .card-description-target').append(targets);

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
		globalGapTime=timeSecs-workTime;
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
	//set cycle state to buffer;
	state='buffer';
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
	activeCard.find('.card-timer').knob({
		readOnly : true,
		thickness : .15,
		max : 10,
		width: 130,
		height: 130,
		step: .1,
		bgColor: '#E0E0E0',
		fgColor: '#EF832C',
		displayInput: false
	});
	console.log()
	activeCard.find('.card-timer').val(buffer-seconds).trigger('change');
	activeCard.find('.card-timer-time').text(buffer-seconds);
	bufferTimer=setInterval(function(){
		
		seconds++;
		workTime++;
		updateWorkoutTimer();
		activeCard.find('.card-timer').val(buffer-seconds).trigger('change');
		activeCard.find('.card-timer-time').text(buffer-seconds);
		timeRemaining=(buffer-seconds);
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
		"top":"80px"
	});

	$('.card').eq(0).css({
		"transform":"scale(.9)",
		"top":"45px"
	}).clone().prependTo('.cards').css({
		"transform":"scale(.8)",
		"top":"10px"
	});

	setTimeout(function(){
		$('.card').last().remove();
	},1000);
}

//begin exercise
function startExercise(gapTime){
	var timerTime=exTime;

	//set cycle state to exercising
	state="exercise";

	if(gapTime){
		timerTime=gapTime;
		console.log('GAP TIME BEING UTILIZED ('+timerTime+')');
	}

	var activeCard=$('.frontCard').first();

	activeCard.removeClass('buffering');
	log('exercise starts at '+workTime+' ('+deck[currentCard].name+')');
	log('exercising');

	activeCard.find('.card-timer').trigger(
        'configure',
        {
            readOnly : true,
			max : exTime
        }
    );
    activeCard.find('canvas').fadeIn();


	var seconds=0;
	activeCard.find('.card-timer').val(exTime-seconds).trigger('change');
	activeCard.find('.card-timer-time').text(minSec(exTime-seconds));
	currentTimer=setInterval(function(){
		seconds++;
		workTime++;
		updateWorkoutTimer();
		activeCard.find('.card-timer').val(exTime-seconds).trigger('change');
		activeCard.find('.card-timer-time').text(minSec(exTime-seconds));
		timeRemaining=exTime-seconds;
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
			if(deckCycle<=3){
				shuffle(deck);
				currentCard=0;
				deckCycle++;
			}
			else{
				end();
			}
		}
		advanceCards();
		startCycle();
	},timerTime*ms);


}



//workout complete
function end(){
	log('done');


	//populate open end modal window
	

	switch(parseInt(getChecked('[name="sweat-set"]')[0])/30){
		case 1:
			$('.endBox-intensity-title').text('Low');
			$('.endBox-intensity-drops').html('<i class="ddicon ddicon-drop"></i>');
			break;
		case 2:
			$('.endBox-intensity-title').text('Medium');
			$('.endBox-intensity-drops').html('<i class="ddicon ddicon-drop"></i><i class="ddicon ddicon-drop"></i>');
			break;
		case 3:
			$('.endBox-intensity-title').text('High');
			$('.endBox-intensity-drops').html('<i class="ddicon ddicon-drop"></i><i class="ddicon ddicon-drop"></i><i class="ddicon ddicon-drop"></i>');
			break;
	}

	$('.endBox-time-number').text(minSec(workTime));

	$('.endBox-focusArea-image-overlay').hide();
	$.each(getChecked('[name="body-set"]'),function(){
		$('.endBox-focusArea-image-overlay.endBox-focusArea-image-'+this).show();
	});

	// $('#endModal .end-elapsed').text(minSec(workTime));
	// $('#endModal .end-sweat').text(parseInt(getChecked('[name="sweat-set"]')[0])/30);
	// $('#endModal .end-body').text(getChecked('[name="body-set"]').join(','));
	$('#endModal').modal();

	//after modal shown, reset
	$('#endModal').on('shown.bs.modal',function(){
		deckCycle=1;
		clearInterval(currentTimer);
		clearInterval(bufferTimer);
		clearInterval(animationTimer);
		window.clearTimeout(exerciseTimeout);
		window.clearTimeout(bufferTimeout);
		globalGapTime=null;
		$('.animation').empty();
		workTime=0;
		updateWorkoutTimer();
		$('.workout').hide();
		$('.settings').show();
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

	//scan radios for sufficient checked, add or remove disabled class
	function assessButtons(){
		if($('input[name=time-set]:checked').length>=1&&$('input[name=sweat-set]:checked').length>=1&&$('input[name=body-set]:checked').length>=1){
			$('#btn-go').removeClass('disabled');
		}
		else{
			$('#btn-go').addClass('disabled');
		}
	};
	assessButtons();

	//assess go button state
	$('.set-input').change(function(){
		assessButtons();
	});

	//go button clicked
	$('body').on('click','#btn-go:not(".disabled")',function(){

		$('.settings').fadeOut(function(){
			$('.workout').fadeIn(function(){
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
			deckCycle++;
		}
		advanceCards();
		startCycle();
	});

	$('#btn-pause').click(function(){
		clearInterval(currentTimer);
		clearInterval(bufferTimer);
		window.clearTimeout(exerciseTimeout);
		window.clearTimeout(bufferTimeout);

		$('#pauseModal').modal({backdrop:'static'});
		console.log(state,timeRemaining);
	});

	$('#btn-resume').click(function(){
		var activeCard=$('.frontCard').first(),
			originalTimeRemaining=timeRemaining;

		if(state=='buffer'){
			var seconds=0;

			activeCard.find('.card-timer').val(originalTimeRemaining-seconds).trigger('change');
			activeCard.find('.card-timer-time').text(minSec(originalTimeRemaining-seconds));
			bufferTimer=setInterval(function(){
				
				seconds++;
				workTime++;
				updateWorkoutTimer();
				activeCard.find('.card-timer').val(originalTimeRemaining-seconds).trigger('change');
				activeCard.find('.card-timer-time').text(minSec(originalTimeRemaining-seconds));
				timeRemaining=(originalTimeRemaining-seconds);
				//console.log(seconds);
				if(seconds>=originalTimeRemaining){
					clearInterval(bufferTimer);
				}
			},ms);


			bufferTimeout=window.setTimeout(function(){
				//workTime+=buffer;
				log('buffer ends at '+workTime);

				if(globalGapTime){
					startExercise(globalGapTime-buffer);
				}
				else{
					startExercise();
				}
				
			},originalTimeRemaining*ms);
		}
		else{

			var seconds=0;
			activeCard.find('.card-timer').val(originalTimeRemaining-seconds).trigger('change');
			activeCard.find('.card-timer-time').text(minSec(originalTimeRemaining-seconds));
			currentTimer=setInterval(function(){
				seconds++;
				workTime++;
				updateWorkoutTimer();
				activeCard.find('.card-timer').val(originalTimeRemaining-seconds).trigger('change');
				activeCard.find('.card-timer-time').text(minSec(originalTimeRemaining-seconds));
				timeRemaining=exTime-seconds;
				//console.log(seconds);
				if(seconds>=originalTimeRemaining){
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
					if(deckCycle<=3){
						shuffle(deck);
						currentCard=0;
						deckCycle++;
					}
					else{
						end();
					}
					
				}
				advanceCards();
				startCycle();
			},originalTimeRemaining*ms);
		}
	});

	$('.btn-end').click(function(){
		end();
		return false;
	});
	$('.btn-pause-end').click(function(){
		$('#pauseModal').modal('hide');
		end();
		return false;
	});

	$('.cards').on('click','.card-title',function(){
		$('.frontCard').first().find('.card-description').slideToggle();
	});
});