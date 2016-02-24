	document.write('<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>');

	document.write('<a href="index.html"><p id="home"><b>Home</b></p></a>');
	document.write('<center>');
	document.write('<a href="art.html"><p id="title">My Portfolio</p></a>');

		document.write('<a class="options" id="about" href="about.html">&nbsp; About &nbsp;</a>');
		document.write('<a class="options" href="paintings.html">&nbsp; Painting &nbsp;</a>');
		document.write('<a class="options" href="drawing.html">&nbsp; Drawing &nbsp;</a>');
		document.write('<a class="options" href="digital.html">&nbsp; Digital &nbsp;</a>');
		//document.write('<a class="options" href="figuredrawing.html">&nbsp; Figure Drawing &nbsp;<a>');
		//document.write('<a class="options" href="photos.html">&nbsp; Photography &nbsp;</a>');
		document.write('<a class="options" href="other.html">&nbsp; Other &nbsp;</a>');

	document.write('</center>');

	document.write('<script>');
			document.write('$(document).ready(function(){');
	   			document.write('$("img").each(function(){');
	   				document.write('$(this).fadeTo(1500,1);');
				document.write('});');
	 		document.write('});');
	document.write('</script>');