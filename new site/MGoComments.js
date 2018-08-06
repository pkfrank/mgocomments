
$(document).ready(function(){

	//Hey there, are you an MGoProgrammer? If so, shield your eyes
	//This was done by a complete novice.
	//Hit me up on Twitter, @PeterKimFrank
	//Or via email, peter.kim.frank -at- gmail

	// Create a variable for each comment
	var comment = $('[role="article"]');	
	
	//Let's hide some stuff
	$("#sidebar-second").hide();
	$(".child").css("border", "none");
	$(".child").css("margin", "10px 0px 0px 50px");
	$(".mgopoints").hide();
	$(".joined").hide();
	$(".comment__footer").hide();
	$(".comment__time").hide();

	//Let's take advantage of the new space
	$("#main-wrapper").css("width", "100%");
	$("#main-wrapper").css("margin", "0px auto");
	$("#main-wrapper").css("max-width", "95%");
	$("#content").css("width", "100%");
	$("#content").css("margin", "0px 0px 0px 0px");

	//Touch-Ups
	$(".image-style-thumbnail").css("cssText", "margin: 0px !important; display: inline-block !important; height: 60px; width: auto;");
	$(".field--name-comment-body").css("padding-top", "15px");
	$(".field--name-comment-body").css("line-height", "1.4");
	$(".comment-reply").css("margin-left", "20px");
	$(".comment-reply").css("margin-right", "10px");
	$(".comment-reply").css("list-style-type", "none");
	$(".thread-wrapper").css("background-color", "#fafafa");
	$(".thread-wrapper").css("box-shadow", "none");
	$(".thread-wrapper").css("margin", "0px");
	$(".thread-wrapper").css("padding", "0px");
	$(".mgo-vote-wrapper").css("line-height", "1px");
	$(".mgo-vote-wrapper").css("font-size", "18px");
	

	//Create new title for each post, including area for points, times, etc.
	$(comment).prepend("<div class='new-title'><div class='new-name'></div><span class='new-points'></span><div class='new-time'></div></div>");
	$(comment).css("line-height", "20px");
	$(comment).css("border", "1px solid");
	$(comment).css("border-color", "#cccccc");
	$(comment).css("margin-top", "8px");
	$(".new-name").css("display", "inline-block");
	$(".new-name").css("font-size", "18px");
	$(".new-name").css("font-weight", "bolder");
	$(".comment__author").css("margin", "0px 0px 0px 10px");
	$(".comment__author").css("color", "#000066");
	$(".new-title").css("background-color", "rgba(128, 128, 128, 0.08)");
	$(".new-title").css("font-family", "'Trebuchet MS',Tahoma,sans-serif");
	$(".new-title").css("height", "60px");
	$(".new-time").css("float", "right");
	$(".new-time").css("margin-top", "10px");
	$(".new-time").css("display", "flex");
	$(".new-time").css("align-items", "center");
	$(".comment-reply").css("float", "right");
	$(".comment__meta").css("height", "60px");

	// "Credits Section"
	$("#main-wrapper").prepend("<div class='credits'></div>");
	var credits = $('.credits');
	credits.css("padding-top", "10px");
	$(credits).append('You are using the <a href="https://github.com/pkfrank/mgocomments">MGoComment Enhancer</a> by <a href="https://mgoblog.com/users/pkf97">PKF97</a>');
	$(credits).append('<br>');
	$(credits).append('I figure I should include the "<a href="https://mgoblog.com/content/supporting-mgoblog">How to support MGoBlog</a>" section since this might hide some ads.');

	//Basically, go through each "comment" and do certain stuff, including:
	//Grabbing the name, points, title, reply itself, and time, and then append that
	//To the new title area I created above
	$(comment).each(function () {    
		var name = $(".comment__author", this);
		var points = $(".mgopoints", this);
		var postTitle = $(".forum-post-title", this);
		var time = $(".comment__time", this);
		var picture = $(".image-style-thumbnail", this);
		var reply = $(".comment-reply", this);
		var edit = $(".comment-edit", this);
		var vote = $(".mgo-vote-wrapper", this);
		

		time = time.text();
		time = time.split('^').join('')

		points = points.text();
		points = points.replace("MGoPoints:", "");
		points = (" - " + points);


		$(".new-title", this).append(postTitle);
		$(".new-time", this).append(time);
		$(".new-time", this).append(reply);
		$(".new-time", this).append(edit);
		$(".new-title", this).prepend(picture);
		$(".new-title", this).append(name);

		$(name, this).append(points);
		$(name, this).append(vote);	

	});

});
