		var myVideo = document.getElementById("video1"); 

		function playPause() { 
		  if (myVideo.paused) 
		    myVideo.play(); 
		  else 
		    myVideo.pause(); 
		} 

		function ficarGrande() { 
		    myVideo.width = 560; 
		} 

		function ficarPequeno() { 
		    myVideo.width = 320; 
		} 

		function ficarNormal() { 
		    myVideo.width = 420; 
		}