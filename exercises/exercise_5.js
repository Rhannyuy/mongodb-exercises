module.exports = function(db) {
	// Which movie(s) had the most checkouts in April?

	   db.collection("checkouts").aggregate([
			    {
			        $match : { month : "apr" }
			    },
			    {
			        $sortByCount: "$movieId"
			    },
			    {
			        $lookup : {
			            from: "checkouts",
			            localField: "movieId",
			            foreignField: "month",
			            as: "monthData"
			        }
			    }
			    ], function(err, max) {
			            if(err){
			                console.log(err);
			                return;
			        }

	console.log("Exercise 5:\n\tMovies X, Y had the most checkouts in April: Z");
	            console.log(max)
                
                 })

               };
