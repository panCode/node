

// function sf(req,res){
// 	res.sendFile('./assets/test1.html',{root:__dirname});
// }
// function show(req,res,con){
// 	con.query('select * from persons',(err,rows,fields)=>{
// 		res.send(rows);
// 	})
// }
function check(req,res,con){
	console.log("<");
	console.log(req.body.username);
	console.log(req.body.password);
	con.query('select * from persons',function(err,rows,fields){
		var t=0;
		for(var i=0;i<rows.length;++i){
			if(req.body.username===rows[i].username && req.body.password===rows[i].password){
				t=1;
				break;
			}
		}
		if(t==1){
			console.log('<<');
			res.json({status:1,message:'authenticated'});
		}
		else{
			console.log('<>');
			res.json({status:-1,message:'unaunthenticated'});
		}
});
}
function reg(req,res){
	res.sendFile('./assets/test3.html',{root:__dirname});
}
function insert(req,res,con){
	con.query('select * from persons',function(err,rows,fields){
		var t=0;
		for(var i=0;i<rows.length;++i){
			if(req.body.username===rows[i].username){
				t=1;
				break;
			}
		}
		if(t===1)res.sendFile('./assets/test4.html',{root:__dirname});
		else {
				var sql ="insert into persons (username, password) values ('"+req.body.username+"', '"+req.body.password+"')";
			    con.query(sql,(err,result)=>{
					if(err) throw err;
					console.log(result);
			    })
			    res.redirect('/login');
			}
	});

}
//exports.sf=sf;
//exports.show=show;
exports.check=check;
exports.reg=reg;
exports.insert=insert;