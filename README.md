# Incom API Examples

With this page we want to show some possible examples on how to use the public APIs available for Incom.

Incom is the communication and collaboration platform for higher education institutions and project groups. [Learn more about Incom](http://about.incom.org)

------

The first very early and very basic example will show you, how to include a project documented in Incom into you personal website.

*Note: For this you need to be able to edit your websites HTML files.*

Download the incom-project.js file from the project/ folder and take a look at the following example HTML:

	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<title>Project Example – Incom API</title>
			<script src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
			<script src="https://raw.github.com/evilstreak/markdown-js/master/lib/markdown.js"></script>
			<script src="incom-project.js"></script>
		</head>
		<body>
			<div class="incom-project" data-url="http://localhost/incom/projekt/15"></div>
			<script>
				Incom.setTextTransformationFunction(markdown.toHTML);
				Incom.projects(".incom-project", {});
			</script>
		</body>
	</html>


