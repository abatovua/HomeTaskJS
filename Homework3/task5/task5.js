function createChessDesk(size) {
	var chessDesk = "";
	var rowLength = size;
	for (var i = 0; i < rowLength; i++) {
	  for (var j = 0; j < rowLength; j++) {
	    if ((i + j) % 2 == 0)
	      chessDesk += "#";
	    else
	      chessDesk += " ";
	  }
	  chessDesk += "\n";
	}
	console.log(chessDesk);
}

createChessDesk(8);