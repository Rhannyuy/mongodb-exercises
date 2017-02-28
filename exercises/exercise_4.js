module.exports = function(db) {
	// Which month had the most checkouts overall?
	db.collection("checkouts").aggregate([
	{
		$sortByCount: "$month"
	},
	{
		$lookup: {
			from: "checkouts",
			localField: "_id",
			foreignField: "month",
			as: "monthData"
		}
	}

	],   function(err, max){
		    if(err){
		    	console.log(err);
		    }
	

	console.log("Exercise 4:\n\tMonth ${max[0].monthData[0].month} had the most checkouts: ${max[0].count}");
});
};