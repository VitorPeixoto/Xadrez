var tabuleiro = [	[['T', '1'], ['C', '1'], ['B', '1'], ['Q', '1'], ['K', '1'], ['B', '1'], ['C', '1'], ['T', '1']],
					[['P', '1'], ['P', '1'], ['P', '1'], ['P', '1'], ['P', '1'], ['P', '1'], ['P', '1'], ['P', '1']],
					[['0', '0'], ['0', '0'], ['0', '0'], ['0', '0'], ['0', '0'], ['0', '0'], ['0', '0'], ['0', '0']],
					[['0', '0'], ['0', '0'], ['0', '0'], ['0', '0'], ['0', '0'], ['0', '0'], ['0', '0'], ['0', '0']],
					[['0', '0'], ['0', '0'], ['0', '0'], ['0', '0'], ['0', '0'], ['0', '0'], ['0', '0'], ['0', '0']],
					[['0', '0'], ['0', '0'], ['0', '0'], ['0', '0'], ['0', '0'], ['0', '0'], ['0', '0'], ['0', '0']],
					[['P', '2'], ['P', '2'], ['P', '2'], ['P', '2'], ['P', '2'], ['P', '2'], ['P', '2'], ['P', '2']],
					[['T', '2'], ['C', '2'], ['B', '2'], ['Q', '2'], ['K', '2'], ['B', '2'], ['C', '2'], ['T', '2']],	];

var isPecaSelected = false;
var p;

var Peca = function(pecaName, movementType, moveRange) {
	this.pecaName = pecaName;
	this.movementType = movementType;
	this.moveRange = moveRange;
};

Peca.prototype.getMovementType = function() {
	return this.movementType;
};


var Bispo = function() {
	Peca.call(this, "Bispo", "DIAGONAIS", "MAX");	
};

Bispo.prototype = new Peca();
Bispo.prototype.constructor = Bispo;


var Cavalo = function() {
	Peca.call(this, "Cavalo", "MOVIMENTO_EM_L", "4");
};

Cavalo.prototype = new Peca();
Cavalo.prototype.constructor = Cavalo;


var King = function() {
	Peca.call(this, "King", "QUALQUER_DIRECAO", "1");	
};

King.prototype = new Peca();
King.prototype.constructor = King;


var Peao = function() {
	Peca.call(this, "Peão", "FRENTE_E_DIAGONAIS", "1");	
};

Peao.prototype = new Peca();
Peao.prototype.constructor = Peao;


var Queen = function() {
	Peca.call(this, "Queen", "QUALQUER_DIRECAO", "MAX");
};

Queen.prototype = new Peca();
Queen.prototype.constructor = Queen;


var Tower = function() {
	Peca.call(this, "Tower", "FRENTE_E_LATERAIS", "MAX");	
};

Tower.prototype = new Peca();
Tower.prototype.constructor = Tower;


function getPecaByAlias(alias) {
	switch(alias) {
		case 'B':
			return(new Bispo()).getMovementType();
		case 'C':
			return (new Cavalo()).getMovementType();
		case 'K':
			return (new King()).getMovementType();
		case 'P':
			return (new Peao()).getMovementType();
		case 'Q':
			return (new Queen()).getMovementType();
		case 'T':
			return (new Tower()).getMovementType();			
	}	
}

function canMove(movementType, pos) {
	if(tabuleiro[pos.r][pos.c][1] == tabuleiro[p.r][p.c][1]) alert('Para!');//return false;	
}

function clickHandler(row, col) {
	if(isPecaSelected && canMove(getPecaByAlias(tabuleiro[p.r][p.c][0]), {r: row, c: col})) {

	} 
	
	else if(tabuleiro[row][col] != ['0', '0']) {
		isPecaSelected = true;
		p = {r: row, c: col};
	}	
}