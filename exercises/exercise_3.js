module.exports = function(db) {
	//What is the title of the movie(s) that was the most checked out?

	db.collection("checkouts").aggregate([ 
				{
					$sortByCount: "$movieId"
				},
				
				{
					$lookup: {
						from: "movies",
						localField: "_id",
						foreignField: "movieId",
						as: "movieData"
					}
				}
		], function(err, max) {
			if (err) {
				console.log(err);

				return;
			}
			
		}	

	console.log ("Exercise 3:\n\tThe movie(s) ${max[0].movieData[0].title} --was checked out ${max[0].count} times");
});
};	
