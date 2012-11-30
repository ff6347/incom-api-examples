var Incom = function() {
	
	var textTransform = function (text) {
		return text;
	}
	
	var renderProject = function(element, project) {
		var $el = $(element);
		$el.append('<h1>' + project.title + '</h1>');
		$el.append('<img src="' + project.image.preview + '" alt="' + project.image.text + '">');
		$el.append('<p>' + project.description + '</p>');
		
		var $authors = $("<ul></ul>");
		$.each(project.authors, function (index, author) {
			$authors.append('<li><img src="' + author.icon + '">' + author.name + '</li>')
		});
		$authors.appendTo(element);
		
		$.each(project.posts, function (index, post) {
			var $post = $('<div class="incom-post"></div>');
			$post.append('<h2>' + post.title + '</h2>');
			$post.append(textTransform(post.text));
			$post.appendTo(element);
		});
		
	}
	
	return {
		setTextTransformationFunction : function (fn) {
			textTransform = fn;
		},
		projects : function (selector) {
			$(selector).each(function (index, element) {
				if($(element).data('url')) {
					var url = $(element).data('url') + ".json";
					$.getJSON(url, function (response) {
						if(response.meta && response.meta.code == 200) {
							console.log(response.response);
							renderProject(element, response.response);
						} else {
							if(response.error) {
								console.log(response.error.message);
							}
						}
					});
				}				
			});
		}
	}
}();