# MGo Comment Enhancer
*Making MGoBoard a little more readable*

![Comparison](comparison.png)

## Background
I'm a huge fan and reader of [MGoBlog](http://MGoBlog.com), and the community at [MGoBoard](http://mgoblog.com/mgoboard).  I wanted to put together a little script to modify the CSS of the page to produce (what I think is) a cleaner and more compact overall look.

**So, how does it work?** It's basically a little piece of code that activates only when you're at MGoBlog.com/MGoBoard.  It tells your web browser to change the styles of certain elements: for example-- remove the sidebar areas, make the posts wider, hide the author profile picture and signature, make the indents more prominent, etc.

It only activates on this one site, and does not interact with the MGoBlog server or slow down your experience.  The code is open-source so you can play around to ensure there's no funny business going on.  ✌🏽

## Installation
The script can be installed using [TamperMonkey](http://tampermonkey.net/), which is a well-supported and open-source userscript manager that supports most major browsers.

Once you've installed TamperMonkey, simply click this link and press "Install" -- https://openuserjs.org/scripts/pkfrank/MGo_Comment_Enhancer

<img src="install.png" width="500px">

Head to MGoBoard, toggle it on/off, and hit refresh.

<img src="enable.png" width="350px">

**Recap**:

Step 1) Install [TamperMonkey](http://tampermonkey.net/)

Step 2) Go to [this link](https://openuserjs.org/scripts/pkfrank/MGo_Comment_Enhancer)

Step 3) Click install

Step 4) Navigate to MGoBoard

Step 5) Make sure it's "enabled" via TamperMonkey (you might need to refresh)

## Technical Notes
I put this together over a weekend or two using Javascript/JQuery.  I'm a complete novice, so it's probably not as efficient/clean as it could be.  Please contribute if you see missing features or have ideas to make it better.

I'm including an Example.html and the corresponding files to make it easier to test in a local environment.

I'm also curious to know how much "page weight" the extension adds.  My estimation is that it doesn't really impact loading time, but I'd love to eventually have some empirical data to back that up.

Anyway, this project is open-source under the MIT License, and I welcome you to do whatever you want with it.

##Contact
Problems? Comments? MGoSnark?

Ping me here, on Twitter [@PeterKimFrank](http://twitter.com/peterkimfrank), or via email at peter.kim.frank -at- gmail

**GO BLUE.**