

$(document).ready(function(){

    $('#submit').click(function(e) {  
	    check();
	});

	function check() {
		var text = $('#text').val();
		var index = $('#index').val();


		var count = findIndex(text, index);

		$('#count').text(count);

	}

	function findIndex(text, index){

		var check = 1;

		if(text[index] != "("){

			alert('not an opening (');
			return;
		}

		let startingIndex = Number(index) + Number(1);

		for(let i = startingIndex; i < text.length; i++){
			var char = text[i];

			if(char === "("){

				check++;

			} else if( char == ")"){

				check--;

			}

			// found the corresponding closed parentheses
			if(check == 0){
				return i;
				break;
			}
		}

	}

});