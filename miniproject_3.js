// BINGO


// Make a Bingo game.

// The user must introduce it's name and the program make a salute. The program, in first turn, 
// must show a card with random numbers without repeats, distributed in five columns by three rows, each turn a ball is taught with other random number, 
// if the number displayed matches any of the card, change the number of card matched to "X" or 0 and show again the card with 
// the matched numbers changed at the end of turn, say to user how much numbers are matched to now.
// The program should ask to user if wants continue with next turn or ends the game, if user continue, showing one different number every turn. Finally, 
// display a message when all ROW is matched. LINE X MATCHED!
// Of course, when all card numbers are matched the program should say BINGO and finish the game.
// When the game is over, the program should say in how much turns you completed the game. Ask to user, when the game is over, if wants play again.



// var nameUser = prompt('Enter your name: ');
// console.log('Welcome and gl with your card: ');




// window.onload = newCard;
// function newCard() {
// 	//creamos un for hasta 24 huecos en la tarjeta nueva
// 	for (var i=0; i<24; i++) {
// 		var newNum = Math.floor((Math.random() * 75) + 1);;
// 		document.getElementById("box" + i).innerHTML = newNum;
// 	}
// };


function random() { 
	return Math.floor(Math.random() * 15) + 1
};
function createCard (){
	var card = []
	console.log(card)
	for (var i = 0; i < 16; i++) {
		var posRandom = random()
		card.push(posRandom)
	}
	return card
}

function verify (){
	var randomNumber = random()
	card.forEach(function(part, num, array){
		if (num===randomNumber) {
			console.log('The random is' + randomNumber)
			console.log(num + ' ES EQUAL ' + randomNumber)
			array[num]= 'X'
		}
			else{
				console.log('not match')
			}
	})
	console.log(card)
	var next = prompt('next turn? y/n')
	if(next=='y'){
		verify();
	}else{console.log('bye')}
}





