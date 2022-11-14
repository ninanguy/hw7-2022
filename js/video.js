var video;

//on load run this function
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	// define what video is
	video = document.getElementById("player1");
	//on load do not autoplay
	video.autoplay = false;
	console.log("Auto play is set to " + video.autoplay);
	//on load do not loop
	video.loop = false;
	console.log("Loop is set to " + video.loop)
	//load video
	video.load();
});

// play video function
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

	//update volume information
	let volume = document.getElementById("slider").value;
	document.getElementById("volume").innerHTML=volume+"%";
});

// pause function
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

//volume slider
document.querySelector("#slider").addEventListener("click", function() {
	console.log("Change Volume");
	let volume = document.getElementById("slider").value;
	video.volume = volume * .01;
	document.getElementById("volume").innerHTML=volume+"%"; //volume percent
});

//mute button
document.querySelector("#mute").addEventListener("click", function() {
	let mute = document.getElementById("mute").value;
	const muteText = document.getElementById("mute").innerHTML;
	//if muteText "Mute", mute volume 
	//and change button text to "Unmute"
	if(muteText === "Mute"){
		console.log(muteText);
		video.muted = true;
		mute = "Unmute";
		document.getElementById("mute").innerHTML = mute;
	}
	else { //if muteText "Unmute", unmute volume
		//and change button text to "Mute"
		console.log(muteText);
		video.muted = false;
		mute = "Mute";
		document.getElementById("mute").innerHTML = mute;
	}
});

//slow down video by 10%
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= .9;
	console.log("Speed is " + video.playbackRate);
});

//speed up video proportionally by 10%
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= .9;
	console.log("Speed is " + video.playbackRate);
});

//skip ahead 10 seconds
document.querySelector("#skip").addEventListener("click", function() {
	let skip = video.currentTime + 10;
	//if current time + skip reaches past end, go back to beginning
	if(skip > video.duration){
		video.currentTime = 0;
	}
	else {
		video.currentTime = skip;
	}
	console.log("Video current time is " + video.currentTime);
});

//apply vintage filter
document.querySelector("#vintage").addEventListener("click", function() {
	const vintage = video.classList;
	vintage.add("oldSchool");
});

//remove vintage filter
document.querySelector("#orig").addEventListener("click", function() {
	const vintage = video.classList;
	vintage.remove("oldSchool");
});

