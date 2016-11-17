
var currentCard=0,
	deckCycle=1;

var cards={
	"upper": [{
		"name": "Chair Dips",
		"frames": [
			"Chair-sit-1.png",
			"Chair-sit-2.png"
		],
		"type": "Upper Body",
		"description": [
			"Hold onto chair edge. Slide your butt off the seat and hold yourself up with your arms straight.",
			"Bend your elbows as you lower your body for 2 seconds. Push up, straightening your arms for 2 seconds."
		],
		"target":[
			"Triceps",
			"Forearms",
			"Chest",		
			"Shoulders"
		]
	},
	{
		"name": "Push-ups",
		"frames": [
			"Push-Ups-1.png",
			"Push-Ups-2.png"
		],
		"type": "Upper Body",
		"description": [
			"Lay face down on the floor.",
			"Tuck hands under shoulders and push up.",
			"Lower your body until your chest almost touches the floor, keeping your back flat, and push back up."
		],
		"target":[
			"Deltoids",
			"Triceps",
			"Abdominals"
		]
	},
	{
		"name": "Arm Circles",
		"frames": [
			"Arm-Circle-Backward-1.png",
			"Arm-Circle-Backward-2.png",
			"Arm-Circle-Backward-3.png",
			"Arm-Circle-Backward-4.png",
			"Arm-Circle-Forward-1.png",
			"Arm-Circle-Forward-2.png",
			"Arm-Circle-Forward-3.png",
			"Arm-Circle-Forward-4.png"
		],
		"type": "Upper Body",
		"description": [
			"Standing, extend arms out to your side.",
			"Make small circles with your outstretched arms for preferred amount of time.",
			"Repeat in the opposite direction for the same amount of time."
		],
		"target":[
			"Deltoids",
			"Rotator Cuff Muscles"
		]
	},
	{
		"name": "Reverse Plank",
		"frames": [
			"Reverse-Plank-1.png",
			"Reverse-Plank-2.png"
		],
		"type": "Upper Body",
		"description": [
			"Sit with your legs extended in front of you, and place your palms on the ground below your shoulders.",
			"Push up into a reverse plank with your arms and legs extended, squeezing butt and thighs."
		],
		"target":[
			"Deltoids",
			"Lower Back"
		]
	}],
	"core": [{
		"name": "Plank",
		"frames": [
			"Plank.png"
		],
		"type": "Core",
		"description": [
			"Lay face down on floor. Push up onto forearms, squeezing abs and glutes.",
			"Keep your neck and spine in a neutral position, looking at a spot about 1 foot beyond your hands."		
		],
		"target":[
			"Abdominals",
			"Obliques"
		]
	},
	{
		"name": "Heel Touches",
		"frames": [
			"Heel-Touch-1.png",
			"Heel-Touch-2.png"
		],
		"type": "Core",
		"description": [
			"Lay on back with your arms by your side. Raise shoulders slightly on the ground.",
			"With your core engaged, reach your right hand down to your right foot and then back to center.",
			"Repeat with left hand and left foot. Do preferred number of reps on each side."		
		],
		"target":[
			"Abdominals",
			"Obliques"
		]
	},
	{
		"name": "Reverse Crunches",
		"frames": [
			"Reverse-Crunch-1.png",
			"Reverse-Crunch-2.png"
		],
		"type": "Core",
		"description": [
			"Lay on your back. Lift your legs so they form a 90° angle with the floor, keeping feet together.",
			"While inhaling, move your legs towards your torso as you roll your pelvis backwards and you raise your hips on the floor.",
			"Hold for 1 second, then exhale while moving back to starting position."		
		],
		"target":[
			"Abdominals"
		]
	},
	{
		"name": "Core Twists",
		"frames": [
			"Core-Twist-1.png",
			"Core-Twist-2.png",
			"Core-Twist-3.png",
			"Core-Twist-4.png",
			"Core-Twist-5.png"
		],
		"type": "Core",
		"description": [
			"Sit on the floor with your knees bent and your feet flat on the ground.",
			"Tilt back so your torso is at a 45° angle to floor and your feet are slightly lifted.",
			"Lace your hands and rotate arms from left to right for each rep."		
		],
		"target":[
			"Abdominals",
			"Obliques"
		]
	}],
	"lower": [
		{
		"name": "High Knees",
		"frames": [
			"Knee-High-1.png",
			"Knee-High-2.png"
		],
		"type": "Lower Body",
		"description": [
			"Quickly jump from one foot to the other, lifting each knee to hip height."
		],
		"target":[
			"Quadriceps",
			"Calves",
			"Glutes"
		]
	},
	{
		"name": "Wall-sit",
		"frames": [
			"Wall-sit-1.png",
			"Wall-sit-2.png"
		],
		"type": "Lower Body",
		"description": [
			"Stand with your back against a wall and your feet about 2 feet in front of you.",
			"Slide down until knees are at a 90° angle. Hold in place, keeping abs tight."		
		],
		"target":[
			"Quadriceps",
			"Hamstrings"
		]
	},
	{
		"name": "Lunges",
		"frames": [
			"Lunges-1.png",
			"Lunges-2.png",
			"Lunges-3.png",
			"Lunges-4.png"
		],
		"type": "Lower Body",
		"description": [
			"Step forward with one leg, lowering hips until both knees are at a 90° angle.",
			"Be sure your front knee is directly above your ankle and the other knee isn’t touching the floor.",
			"Push back up to starting position and repeat on the other side. Do preferred number of reps on each side."		
		],
		"target":[
			"Hamstrings",
			"Quadriceps",
			"Glutes"
		]
	},
	{
		"name": "Squats",
		"frames": [
			"Squats-1.png",
			"Squats-2.png"
		],
		"type": "Lower Body",
		"description": [
			"Stand up straight with feet hip-width apart. Slowly lower your body by pushing hips back and bending knees, sinking your weight into heels.",
			"Keep your spine straight and never let your knees go over your toes.",
			"Pause and then lift back up in a controlled movement to the starting position."		
		],
		"target":[
			"Hip Flexors",
			"Glutes",
			"Hamstrings",
			"Calves",
			"Quadriceps",
			"Adductors"
		]
	}],
	"fullbody": [{
		"name": "Burpees",
		"frames": [
			"Burpee-1.png",
			"Burpee-2.png",
			"Burpee-3.png",
			"Burpee-4.png",
			"Burpee-5.png"
		],
		"type": "Full Body",
		"description": [
			"Bend down to touch the floor and kick your feet back so you are in push-up position.",
			"Do a push-up.",
			"Stand up, then jump into the air reaching your arms overhead."		
		],
		"target":[
			"Full Body"
		]
	},
	{
		"name": "Star Jumps",
		"frames": [
			"Star-Jump-1.png",
			"Star-Jump-2.png",
			"Star-Jump-3.png"
		],
		"type": "Full Body",
		"description": [
			"Jump to fully extend your body, stretching out your legs and arms.",
			"As you land, bring your limbs back in and slightly bend your knees to absorb the impact through your legs.",
			"Quickly jump back to standing position and repeat in-air motions."		
		],
		"target":[
			"Full Body"
		]
	},
	{
		"name": "Jumping Jacks",
		"frames": [
			"Jumping-Jacks-1.png",
			"Jumping-Jacks-2.png",
			"Jumping-Jacks-3.png"
		],
		"type": "Full Body",
		"description": [
			"Slightly bend your knees and jump up while moving your legs outward and raising your arms overhead.",
			"Quickly jump back to standing position."		
		],
		"target":[
			"Full Body"
		]
	},
	{
		"name": "Climber",
		"frames": [
			"Climber-1.png",
			"Climber-2.png",
			"Climber-3.png",
			"Climber-4.png"
		],
		"type": "Full Body",
		"description": [
			"Start in push-up position. Lift your right foot on the floor and slowly raise your knee as close to your chest as you can, keeping your back straight.",
			"Return to the starting position and repeat with your left leg. Do preferred number of reps on each side."		
		],
		"target":[
			"Full Body"
		]
	}]
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

var ms=1000,
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
		"top":"50px"
	});

	$('.card').eq(0).css({
		"transform":"scale(.9)",
		"top":"20px"
	}).clone().prependTo('.cards').css({
		"transform":"scale(.8)",
		"top":"-10px"
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

	if(workTime>=timeSecs-1&&workTime<=timeSecs+1){
		workTime=timeSecs;
	}


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

	$('#disclaimerModal .btn').click(function(){
		localStorage.setItem('DDdisclaimer','true');
	});
	if(!localStorage.getItem('DDdisclaimer')){
		$('#disclaimerModal').modal();
	}

	//restore settings from localstorage
	function restoreSettings(settings){
		$.each(settings,function(){
			$('.set-input').eq(this).attr('checked','checked');
		});
	}
	if(localStorage.getItem('DDsettings')){
		restoreSettings(JSON.parse(localStorage.getItem('DDsettings')));
	}

	//scan radios for sufficient checked, add or remove disabled class
	function assessButtons(){
		if($('input[name=time-set]:checked').length>=1&&$('input[name=sweat-set]:checked').length>=1&&$('input[name=body-set]:checked').length>=1){
			$('#btn-go').removeClass('disabled').text('I\'m ready, let\'s go!');
		}
		else{
			$('#btn-go').addClass('disabled').text('Pick your settings');
		}
	};
	assessButtons();

	//assess go button state
	$('.set-input').change(function(){
		assessButtons();
	});

	//go button clicked
	$('body').on('click','#btn-go:not(".disabled")',function(){

		//store settings
		var settingsArray=[];
		$('.set-input:checked').each(function(){
			settingsArray.push($('.set-input').index($(this)));
		});
		localStorage.setItem('DDsettings',JSON.stringify(settingsArray));

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