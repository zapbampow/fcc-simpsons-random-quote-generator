
//The Quote Array
var quotes = [
	{quote: [
		"And this is the snack holder where I can put my beverage, or if you will, cupcake.", "Operator! Give me the number for 911!",
		  "Bart, with $10,000, we'd be millionaires! We could buy all kinds of useful things like...love!",
		  "When will I learn? The answer to life's problems aren't at the bottom of a bottle. They're on TV!",
		  "Marge, I can’t wear a pink shirt to work. Everybody wears white shirts. I’m not popular enough to be different.",
		  "Marge, it takes two to lie. One to lie and one to listen.",
		  "Mmmm… unprocessed fish sticks.",
		  "Sleeping bags on the floor, a roaring fire. It’ll be just like the time they kicked me out of the sporting goods store.",
		  "Note to self: Stop. Doing. Anything.",
		  "To alcohol! The cause of—and solution to—all of life’s problems.",
		  "Now we play the waiting game…Ahh, the waiting game sucks. Let’s play Hungry Hungry Hippos!"
	],
	person: "- Homer Simpson",
	img: "images/homer.png",
	color: "#a1be26",
	colorHover: "#11ecf5",
	},

	{quote: [
		"I'm Bart Simpson. Who the hell are you?",
		"¡Ay, caramba!",
		"You got the brains and talent to go as far as you want and when you do I'll be right there to borrow money.",
		"Milhouse, we’re living in the age of cooties. I can’t believe the risk you’re running.",
		"Alright, that’s it. I’ve been scorched by Krusty before. I got a rapid heartbeat from those Krusty Brand vitamins. My Krusty Kalculator didn’t have a seven or an eight. And Krusty’s autobiography was self-serving, with many glaring omissions. But this time, he’s gone too far!",
		"I thought dabbling in the Black Arts would be good for a chuckle. How wrong I was.",
		"Jessica, I don’t think we should hang out anymore. You’re turning me into a criminal when all I want to be is a petty thug.",
		"The Tooth Fairy’s made a donation in my name to the United Way. That gossamer witch!"
	],
	person: "- Bart Simpson",
	img: "images/bart.png",
	color: "#fb0101",
	colorHover: "#eb0101",
	},
	{quote: [
		"Why do I get the feeling that someday I’ll be describing this to a psychiatrist?",
		"Mom, romance is dead. It was acquired in a hostile takeover by Hallmark and Disney, homogenized, and sold off piece by piece.",
		"All the years I’ve wanted to be treated like an adult have blown up in my face."
	],
	person: "- Lisa Simpson",
	img: "images/lisa.jpg",
	color: "#ffafcc",
	colorHover: "#f2a6c2",
	},

	{quote: [
		"This family has had its differences and we’ve squabbled, but we’ve never had knife fights before. And I blame this house.",
		"I guess one person can make a difference. But most of the time, they probably shouldn’t.",
		"Homer, there’s something I don’t like about that severed hand.",
		"Homer don’t start stalking people again! It’s so… illegal.",
		"Listen to your mother, kids. Aim low. Aim so low no one will even care if you succeed. Dinner’s in the oven. If you want some butter it’s under my face."
	],
	person: "- Marge Simpson",
	img: "images/marge.png",
	color: "#f15f30",
	colorHover: "#f06b41",
	},

	{quote: [
		"I’d rather let a thousand guilty men go free than chase after them.",
		"Boy, I tell ya, they only come out at night. Or in this case, the daytime.",
		"Bake him away, toys.",
		"This is Papa Bear. Put out an APB for a male suspect, driving a…car of some sort, heading in the direction of…you know, that place that sells chili. Suspect is hatless. Repeat, hatless.",
		"Uh, no you’ve got the wrong number. This is 9-1… 2.",
		"If he was going to commit a crime, would he have invited the number one cop in town? Now where did I put my gun? Oh yeah, I set it down when I got a piece of cake."
	],
	person: "- Chief Wiggum",
	img: "images/chief.jpg",
	color: "#77bb47",
	colorHover: "#82cc4d",
	},

	{quote: [
		"But look! I got some cool pogs: Alf pogs! Remember Alf? He’s back…in pog form!",
		"Remember the time he ate my goldfish, and you lied to me and said I never had any goldfish. Then why’d I have the bowl, Bart? Why did I have the bowl?",
		"We started out like Romeo and Juliet, but it ended up in tragedy."
	],
	person: "- Milhouse Van Houten",
	img: "images/milhouse.jpg",
	color: "#0c72b0",
	colorHover: "#0d7fc4",
	},

	{quote: [
		"It tastes like…burning.",
		"Chocolate microscopes?",
		"Me fail English? That’s unpossible.",
		"My cat’s breath smells like cat food.",
		" If mommy's purse didn't belong in the microwave, why did it fit?",
		"I'm bembarassed for you.",
		"Principal Skinner, I got carsick in your office.",
		"This is my sandbox, I'm not allowed to go in the deep end."
	],
	person: "- Ralph Wiggum",
	img: "images/ralph.jpg",
	color: "#335356",
	colorHover: "#3c6266",
	},

	{quote: [
		" I used to be with it, but then they changed what “it” was, and now what I’m with isn’t it. And what’s “it” seems weird and scary to me.",
		"I’m filled with piss and vinegar! At first, I was just filled with vinegar.",
		"Homer, you’re as dumb as a mule and twice as ugly. If a strange man offers you a ride, I say take it!"
	],
	person: "- Grampa Simpson",
	img: "images/grampa.jpg",
	color: "#fcbea7",
	colorHover: "#f2b7a1",
	},

	{quote: [
		"Feels like I’m wearing nothing at all…nothing at all…nothing at all!",
		"I hold here a contract between myself and one Homer Simpson, pledging me his soul for a doughnut, which I delivered. And it was scrum-diddly-umptious!",
		" I'll have a Shirley... No, a virgin... No, a children's... Oh, what the heck? You only live once. Give me a white wine spritzer!",
		"Ho ho ho, you betcha. Team sports will keep you away from temptations like rock music and girls."
	],
	person: "- Ned Flanders",
	img: "images/flanders.jpg",
	color: "#b3cb7d",
	colorHover: "#abc277",
	}
];

//Some Functions
      function randomPersonNum (arr){
        return Math.floor(Math.random() * arr.length);
      }

      function randomQuoteNum (arr){
        return Math.floor(Math.random() * arr[pnum].quote.length);
      }

      function theQuote(arr){
        return arr[pnum].quote[qnum];
      }

      function quotePerson(arr){
        return arr[pnum].person;
      }

      function fimg(arr){
        return arr[pnum].img;
      }

	  function colorFunc(arr) {
		  return arr[pnum].color;
	  }

	  function colorHoverFunc(arr) {
		  return arr[pnum].colorHover;
	  }


      var pnum = randomPersonNum(quotes);
      var qnum = randomQuoteNum(quotes);
      var aQuote;
      var aPerson;
      var aQuoteAPerson;



//Load a quote and the person once page has loaded
$("#quote").html(function(){
	aQuote = theQuote(quotes, pnum);
  return aQuote;
});

$("#person").html(function(){
	aPerson = quotePerson(quotes, pnum);
  return aPerson;
});

aQuoteAPerson = aQuote + " " + aPerson



//On button click
$("#thebutton").on("click", function(){
      pnum = randomPersonNum(quotes);
      qnum = randomQuoteNum(quotes);
	$("body").css({
		"background-image":function(){return "url(\"" + fimg(quotes); + ")"},
		"background-color":function(){return colorFunc(quotes);},
		"color":function(){return colorFunc(quotes);}
	});

	$(".single-color").css("color", function(){
		return colorFunc(quotes);
		});

	$(".single-color:hover").css("color", function(){
		return colorHoverFunc(quotes);
		});

	$(".btn-single-color").css({
		"background-color":function(){return colorFunc(quotes);},
		"border-color":function(){return colorFunc(quotes);}
		});

  $("#quote").html(function(){
    aQuote = theQuote(quotes, pnum);
    return aQuote;
  });

  $("#person").html(function(){
    aPerson = quotePerson(quotes, pnum);
    return aPerson;
  });

  aQuoteAPerson = aQuote + " " + aPerson;

});

$("#twitter-button").on("click", function(){
  var twitterURL = "http://twitter.com/share?text="+ aQuoteAPerson;
  window.open(twitterURL, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=350,width=600");
});
