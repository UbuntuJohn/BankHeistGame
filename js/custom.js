$(document).ready(function() {

	var weapon = ['fist'];
	var bankMoney = 100000000;
	var myMoney = 0;
	var myMoneyFix = myMoney.toFixed(2);
	var power;
	var nextWeapon = ['crow bar','hand gun', 'machine gun', 'flame thrower','bazooka'];
	


	
	function getStats() {
		

			$('.bankmoney').html(bankMoney);
			$('.mymoney').html(myMoney);
			$('.weapon').html(weapon[0] + " ("+power+" attack)");
			$('.nextWeapon').html(nextWeapon[0]);

			if(myMoney >= 10 && myMoney) {
				$('#upgrades').fadeIn(1000).html("<span style='font-weight: bold; cursor: pointer'>Buy "+nextWeapon[0]+"</span>");

				$('#upgrades').on("click", function() {
					weapon[0] = nextWeapon[0];
					nextWeapon.shift();
					//alert("next weapon is "+nextWeapon[0]);
					$('.weapon').html(weapon[0] + " ("+power+" attack)");
					//alert("Your weapon is now "+weapon[0]);

					if(weapon[0] == "fist") {
						power = 1;

						//attackBank();
						getStats();

						
					} else if(weapon[0] == "crow bar") {
						power = 5;
						getStats();
						//attackBank();
					} else if(weapon[0] == "hand gun") {
						power = 20;
						getStats();
					}

					else if(weapon[0] == "machine gun") {
						power = 45;
						getStats();
					}

					else if(weapon[0] == "flame thrower") {
						power = 75;
						getStats();
					}

					else if(weapon[0] == "bazooka") {
						power = 100000000;
						getStats();
					}
				});
			} else if(myMoney >= 50) {
				alert("testing");
			}

		
	} 

		$('.bank').on("click", function() {
				var randomnumber=Math.floor(Math.random()*26);
				var caught = myMoney / 2;
			bankMoney = bankMoney - power;
			myMoney = myMoney + power;
			getStats();

			if(randomnumber == 7) {
				myMoney = myMoney - caught;
				$('.status').html("You got caught! You lose half your money!");
				$('.mymoney').html(myMoneyFix);
				//alert(randomnumber);

			} else {
				$('.status').html("You got away safe!");
				//alert(randomnumber);

			}




		});

		

		/*

		if('.save').on("click", function() {
			document.cookie="bankmoney="+bankMoney+", mymoney="+myMoney;
		});
 		*/



	if(weapon[0] == "fist") {
		power = 1;

		//attackBank();
		getStats();

		
	} else if(weapon[0] == "crow bar") {
		power = 5;
		getStats();
		//attackBank();
	}



	//alert("My power is "+power);

});