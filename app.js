
$(function() { 
		var a1 = $("#a1");
		var b1 = $("#b1");
		var c1 = $("#c1");
		var d1 = $("#d1");
		var e1 = $("#e1");
		var f1 = $("#f1");
		var g1 = $("#g1");

		var a2 = $("#a2");
		var b2 = $("#b2");
		var c2 = $("#c2");
		var d2 = $("#d2");
		var e2 = $("#e2");
		var f2 = $("#f2");
		var g2 = $("#g2");

		var a3 = $("#a3");
		var b3 = $("#b3");
		var c3 = $("#c3");
		var d3 = $("#d3");
		var e3 = $("#e3");
		var f3 = $("#f3");
		var g3 = $("#g3");

		var a4 = $("#a4");
		var b4 = $("#b4");
		var c4 = $("#c4");
		var d4 = $("#d4");
		var e4 = $("#e4");
		var f4 = $("#f4");
		var g4 = $("#g4");

		var a5 = $("#a5");
		var b5 = $("#b5");
		var c5 = $("#c5");
		var d5 = $("#d5");
		var e5 = $("#e5");
		var f5 = $("#f5");
		var g5 = $("#g5");

		var a6 = $("#a6");
		var b6 = $("#b6");
		var c6 = $("#c6");
		var d6 = $("#d6");
		var e6 = $("#e6");
		var f6 = $("#f6");
		var g6 = $("#g6");

		var board = [
					[a6, b6, c6, d6, e6, f6, g6],
					[a5, b5, c5, d5, e5, f5, g5],
					[a4, b4, c4, d4, e4, f4, g4],
					[a3, b3, c3, d3, e3, f3, g3],
					[a2, b2, c2, d2, e2, f2, g2],
					[a1, b1, c1, d1, e1, f1, g1],
					];

	// ------------------------------------------------------------
		var winCombo = [
					[a1, b1, c1, d1],
					[a1, a2, a3, a4]
					];


	turn = 1;
	var columnA = $("#a");

	var detectWin = function(){
		for(var i = 0; i < winCombo.length; i++){
			var player1 = 0;
			var player2 = 0;

			for(var j = 0; j < winCombo[i].length; j++){
				if(winCombo[i][j].attr("class") == "empty1"){
					player1 += 1;
					if(player1 == 4){
						alert("Player 1 wins!")
						return true
					}
				else if(winCombo[i][j].attr("class") == "empty2") {
					player2 += 1;
					if(player2 == 4){
						alert("Player 2 wins!")
						return true
					}
					
					}
				}
			}
		}
	}

	var dropChipA = function(){
		detectWin();
		turn += 1;
		if (turn % 2 === 0){
			for(var i = 5; i <= 5; i--){
				if(board[i][0].hasClass("empty")){
					// detectWin();
					return (board[i][0].removeClass("empty").addClass("empty1"));
				}
			}
		}
		else {
		// detectWin();
			for(var i = 5; i <= 5; i--){
				if(board[i][0].hasClass("empty1" && "empty")){
					// detectWin();
					return (board[i][0].removeClass("empty1" && "empty").addClass("empty2"));
				}
			}
		}
	};
	


		var columnB = $("#b");

		var dropChipB = function(){
			turn += 1;
			detectWin();
			if (turn % 2 === 0){
			
				for(var i = 5; i <= 5; i--){
					if(board[i][1].hasClass("empty")){
						detectWin();
						return (board[i][1].removeClass("empty").addClass("empty1"));
					}
				}
			}
	 		else {
				for(var i = 5; i <= 5; i--){
					if(board[i][1].hasClass("empty1" && "empty")){
						detectWin();
						return (board[i][1].removeClass("empty1" && "empty").addClass("empty2"));
					}
				}
			}

		};


		var columnC = $("#c");

		var dropChipC = function(){
			turn += 1;
			detectWin();

			if (turn % 2 === 0){
		
			
			for(var i = 5; i <= 5; i--){
				if(board[i][2].hasClass("empty")){
					detectWin();
					return (board[i][2].removeClass("empty").addClass("empty1"));
				}
			}
		}

			else {
			
			for(var i = 5; i <= 5; i--){
				if(board[i][2].hasClass("empty1" && "empty")){
					detectWin();
					return (board[i][2].removeClass("empty1" && "empty").addClass("empty2"));
				}
			}
		}

		};

		var columnD = $("#d");

		var dropChipD = function(){
			turn += 1;
			detectWin();
			if (turn % 2 === 0){
			
			for(var i = 5; i <= 5; i--){
				if(board[i][3].hasClass("empty")){
					detectWin();
					return (board[i][3].removeClass("empty").addClass("empty1"));
				}
			}
		}

			else {
			
			for(var i = 5; i <= 5; i--){
				if(board[i][3].hasClass("empty1" && "empty")){
					detectWin();
					return (board[i][3].removeClass("empty1" && "empty").addClass("empty2"));
				}
			}
		}

		};

		var columnE = $("#e");

		var dropChipE = function(){
			turn += 1;
			detectWin();
			if (turn % 2 === 0){
				
			for(var i = 5; i <= 5; i--){
				if(board[i][4].hasClass("empty")){
					detectWin();
					return (board[i][4].removeClass("empty").addClass("empty1"));
				}
			}
		}

			else {
			
			for(var i = 5; i <= 5; i--){
				if(board[i][4].hasClass("empty1" && "empty")){
					detectWin();
					return (board[i][4].removeClass("empty1" && "empty").addClass("empty2"));
				}
			}
		}

		};

		var columnF = $("#f");

		var dropChipF = function(){
			detectWin();
			turn += 1;
			
			if (turn % 2 === 0){
			
			for(var i = 5; i <= 5; i--){
				if(board[i][5].hasClass("empty")){
					detectWin();
					return (board[i][5].removeClass("empty").addClass("empty1"));
				}
			}
		}

			else {
		
			for(var i = 5; i <= 5; i--){
				if(board[i][5].hasClass("empty1" && "empty")){
					detectWin();
					return (board[i][5].removeClass("empty1" && "empty").addClass("empty2"));
				}
			}
		}

		};

		var columnG = $("#g");

		var dropChipG = function(){
			detectWin();
			turn += 1;
			if (turn % 2 === 0){
			
			for(var i = 5; i <= 5; i--){
				if(board[i][6].hasClass("empty")){
					detectWin();
					return (board[i][6].removeClass("empty").addClass("empty1"));
				}
			}
		}

			else {	
			
			for(var i = 5; i <= 5; i--){
				if(board[i][6].hasClass("empty1" && "empty")){
					detectWin();
					return (board[i][6].removeClass("empty1" && "empty").addClass("empty2"));
				}
			}
		}

		};


	columnA.click(dropChipA);	
	columnB.click(dropChipB);
	columnC.click(dropChipC);
	columnD.click(dropChipD);
	columnE.click(dropChipE);
	columnF.click(dropChipF);
	columnG.click(dropChipG);

}); 









