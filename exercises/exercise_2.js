module.exports = function(db) {
	// Which users checked out any of the Lord of the Rings trilogy?
   
   db.collection("movies").find({
   	title: {
   		$regex: /.* Lord of the.*/
   		}
   }).toArray(function(err, data) {
   	// console.log(data)
   	//data [objects,object]
   	var movieIdArray = [];

   		for (var obj of data){
   			//obj --> { movieId:"", _id:"", year:"",title:"" }
   			movieIdArray.push(obj.movieId.toString());
   		}

   		console.log(movieIdArray);

   		//movieIdArray ---> ["8","11","15"]

  	db.collection("checkouts").find({movieId:{$in: movieIdArray}}).toArray(function(err, data){
  		//data ---> [3,8,6,50] array of distinct user
  		console.log(data);
  		console.log("Exercise 2:\n\tThe LOTR movies were checked out by users " )	
  	})



	
   });
};
