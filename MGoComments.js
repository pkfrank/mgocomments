$(document).ready(function(){

	//Hey there, are you an MGoProgrammer? If so, shield your eyes
	//This was done by a complete novice.
	//Hit me up on Twitter, @PeterKimFrank

	// Let's hide some stuff
	$("#sidebar-left").hide();
	$("#sidebar-right").hide();
	$(".author-signature").hide();
	$(".picture").hide();
	$(".mgoblog-hd-signature").hide();
	$(".forum-post-panel-sub").hide();
	$(".forum-post-info").hide();
	$(".forum-post-footer").hide();
	$("#comment-controls").hide();
	$(".forum-top-post-footer").hide();

	//Let's take advantage of that space
	$("#outer-container").css("width", "100%");
	$("#page-right").css("width", "100%");
	$("#page-left").css("width", "100%");
	$("#container").css("width", "100%");
	$("#inside-content").css("width", "100%");
	$("#mainContent").css("width", "98%");
	$(".forum-post-panel-main").css("margin-left","0px");
	$(".forum-post-panel-main").css("border-left","none");

	//And work on the forum content itself
	$(".forum-post-panel-main").css("min-height", "50px");
	$(".forum-post-info").css("background", "grey");
	$(".forum-post-title").css("padding-left", "0px");
	$(".indented").css("margin-left", "55px");
	$(".forum-post-title").css("border-bottom", "none");
	$(".forum-post").css("border", "none");
	$(".forum-post-content p").css("max-width", "80%");

	//Create new title for each post, including area for points, times, etc.
	$(".forum-post-panel-main").prepend("<div class='new-title'><div class='new-name'></div><span class='new-points'></span><span class='new-time'></span></div>");
	$(".new-name").css("display", "inline-block");
	$(".new-name").css("font-size", "18px");
	$(".new-name").css("font-weight", "bolder");
	$(".new-title").css("padding", "10px 0px 5px 5px");
	$(".new-title").css("background-color", "rgba(128, 128, 128, 0.08)");
	$(".new-time").css("float", "right");

	//Add the reply button and style it up
	$(".af-button-small").css("background", "rgba(255, 235, 0, 0.27)");
	$(".af-button-small").css("width", "50px");
	$(".af-button-small").css("height", "20px");
	$(".af-button-small span").css("padding", "0px");
	$(".af-button-small span").css("line-height", "0px");
	$(".af-button-small span").css("margin", "0px");
	$(".af-button-small span").css("background", "none");
	$(".comment_reply").css("float", "right");
	$(".comment_reply").css("margin-top", "-21px");	

	//mGo Guilt / Header Area
	$("#mainContent").prepend("<div class='new-hero'></div>");
	var paypal = $("#paypal");
	var amazon = $("#block-block-38");
	$(".new-hero").append(amazon);
	$(".new-hero").append(paypal);
	amazon.css("padding", "0px");
	amazon.css("width", "19%");
	amazon.css("display", "inline-block");
	paypal.css("margin", "0px");
	paypal.css("padding-right", "15px");
	paypal.css("vertical-align", "middle");
	paypal.wrap("<a href='https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=mgoblog%40gmail%2ecom&item_name=MGoBlog&no_shipping=1&cn=Any%20req'></a>")
	//evidently it was this point that I realized I could save some time by declaring variables

	//Some credits
	$(".new-hero").append("<div class='credit'><a href='https://github.com/pkfrank/mgocomments'>mGoCommentEnhancer</a> by <a href='http://mgoblog.com/users/pkf97'>PKF97</a></div>");
	$(".credit").css("float", "right");
	$(".credit").css("line-height", "32px");	

	//Basically, go through each "post" and do certain stuff, including:
	//Grabbing the name, points, title, reply itself, and time, and then append that
	//To the new title area I created above
	$(".forum-post").each(function () {    
		var name = $(".author-name", this);
		var points = $(".author-points", this);
		var postTitle = $(".forum-post-title", this);
		var reply = $(".comment_reply", this);
		var time = $(".forum-post-info", this);

		time = time.text();

		points = points.text();
		points = points.slice(12,99);
		points = (" - " + points);

		$(".new-name", this).append(name);
		$(".new-points", this).append(points);
		$(".new-title", this).append(postTitle);
		$(".new-title", this).append(reply);
		$(".new-time", this).append(time);
	});
});
