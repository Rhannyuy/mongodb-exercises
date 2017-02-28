module.exports = function(db) {
	// What user(s) had the most checkouts?
	db.collection("checkouts").aggregate([
	{
		$sortByCount: "$userId"

	}
	], function(err, max) {
		if(err){
			console.log(err);
			return;
		}

	console.log(max[0])
	console.log("Exercise 6:\n\tUser(s) ${max._id} had the most checkouts: ${max[0].count}");
    });

   }; 
