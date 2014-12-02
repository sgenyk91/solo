var app = angular.module("main", []);

app.controller("ImageController", function() {
	this.image = 0;
	this.selectImage = function(setImage) {
		this.image = setImage;
	};
	this.isSelected = function(checkImage) {
		return this.image === checkImage;
	}
});

app.controller("MuralController", function() {
	this.mural = muralList;
});

app.controller("ReviewController", function() {
	this.review = {};
	this.addReview = function(mural) {
		console.log("mural", mural);

		mural.reviews.push(this.review);
		this.review = {};
	}
});

var muralList = [{
		name: "Eye of the Tiger",
		artist: "Nychos",
		location: "Geary and Shannon",
		imageUrl: "http://images.complex.com/complex/image/upload/t_article_image/gwativwwb1odfywe8fag.jpg",
		reviews: [{
			author: "Bob",
			rating: 5,
			comment: "Amazing mural!"
		}]
	}, {
		name: "On the Shoulders of a Wizard",
		artist: "Mark Bode and Os Gemeos",
		location: "Turk and Taylor",
		imageUrl: "http://www.sfmuralarts.com/pics/1627.jpg",
		reviews: [{
			author: "Dave",
			rating: 3.5,
			comment: "Pretty interesting, but overall very weird"
		}, {
			author: "Arthur",
			rating: 5,
			comment: "I like shrooms so I like this mural!"
		}]
	}, {
		name: "I'd Rather Starve",
		artist: "Unknown Artist",
		location: "Clarion and Mission",
		imageUrl: "http://www.sfmuralarts.com/pics/1748.jpg",
		reviews: [{
			author: "Melissa",
			rating: 4.5,
			comment: "Very deep."
		}]
	}, {
		name: "Boogie Birds",
		artist: "Chor Boogie",
		location: "Dore St and Howard St",
		imageUrl: "http://www.sfmuralarts.com/pics/1634.jpg",
		reviews: [{
	}]
	}, {
		name: "Beauty in Tragedy",
		artist: "Meggs",
		location: "866 Geary St",
		imageUrl: "http://www.sfmuralarts.com/pics/1671.jpg",
		reviews: [{
	}]
	}, {
		name: "Hummingbirds",
		artist: "Precita Eyes",
		location: "21st and Shotwell",
		imageUrl: "http://www.sfmuralarts.com/pics/1662.jpg",
		reviews: [{
	}]
	
}];