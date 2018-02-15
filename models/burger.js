var mysequelize ={  //see FIG.01 below

		createTable: function(v, tableName, col1, col1_datatype, col2, col2_datatype, col3, col3_datatype, col4, col4_datatype, con ){ 
				var v = con.define(tableName, {
					col1: col1_datatype,
					col2: col2_datatype,
					col3: col3_datatype,
					col4: col4_datatype

				});

		
		},		

};






module.exports = mysequelize;

// ******************************************************************SUQELIZE CODE***************************************************************

//*************to create table in sequalize****************FIG.01
// var Article = connection.define('article', {
// 	title: Sequelize.STRING,
// 	body: Sequelize.TEXT 
// });

	//custom table creation
				// var Article = connection.define('article', {
				// slug: {
				// 		type: Sequelize.STRING
				// 		primaryKey: true //to make column primary key
				// 	},

				// 	title: {
				// 		type: Sequelize.STRING
				// 		unique: true, //make column unique
				// 		allowNull: false //whether to allow nulls
				//		validate: { len: [10, 150]} /validation setting the min and max length of the string **OPTIONAL
				// 	},
				// 	body: {
				// 		type: Sequelize.TEXT
				// 		//defaultValue: "your default column value" //the default text if there if no text on the insert statement but does not work on text datatype
				// 	} 
    //               }, {

    //               	timestamps: false // to disable timestamp columns creation

    //               }

				// });
// ************************CREATE***************************

//********* connection.sync() to sync database and connect and generate sql to create table***********
// connection.sync().then(function (){ // connection.sync().then PROMISE to sync database and connect and generate sql to rows in the table
// 	Article.create({
// 		title:'demo title', 
// 		body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
// 	});

// });

// ************************READ***************************

	
//***************to find records by id********************
// connection.sync().then(function (){ 
// 	Article.findById(1).then(function(article){

// 		console.log(article.dataValues);
// 	});

// });

//***************to find ALL records********************

// connection.sync().then(function (){ 
// 	Article.findAll().then(function(articles){

// 		console.log(articles.length);
// 	});

// });

// ***************or *********************************
// connection.sync().then(function (){ 
// 	Article.findAll().then(function(articles){

// 		console.log(articles[0].dataValues);
// 	});

// });

//***************to find ALL records where********************
// connection.sync().then(function (){ 
// 	Article.findAll({ where: { id: [1, 2] } }).then(function(articles){

// 		console.log(articles);
// 	});

// });

// ************************UPDATE***************************






// ************************DELETE***************************

//********************* to delete all tables in db******
// connection.sync({
// force:true}).then (function () {


// });

// to catch errors gracefully 

// connection
//.sync({
// force:true})
//.then (function () {

// }).catch(function(error){ //. catch function to catch errors gracefully and console.log
//console.log(error);

//});



