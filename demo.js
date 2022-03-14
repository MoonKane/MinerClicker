$(document).ready(function() {

	let ppc = document.querySelectorAll(".ppc");
	let ppcs = [];

	let moneys = 5;
	let money = document.getElementById("money");
	money.innerHTML = moneys;

	let pops = 1;
	let pop = document.getElementById("pop");
	pop.innerHTML = pops;

	let changecrystal = 0.001;

	let upgratecost = document.querySelectorAll(".upgrate .cost");
	let upgratecosts = [25,150];

	let upgratecrystalcost = document.querySelectorAll(".upgratecrystal .cost");
	let upgratecrystalcosts = [2,1];

	let strength = document.querySelectorAll(".list .strength");
	let strengths = [0,1,3,5,7,9,11];

	let costsale = document.querySelectorAll(".whore .costsale");
	let costsales = [10000,1,5,20,50,100,250];

	let orecount = document.querySelectorAll(".whore .orecount");
	let orecounts = [0,0,0,0,0,0,0];

	let minercount = document.querySelectorAll(".mnore .minercount");
	let minercounts = [0,0,0,0,0,0,0];

	let pps = document.querySelectorAll(".mnore .pps");
	let ppss = [0,0,0,0,0,0,0];

	let costbroke = document.querySelectorAll(".broke .costbroke");
	let textopenbroke = document.querySelectorAll(".broke .open");
	let costbrokes = [0,5,500,1000,1500,2000,2500];

	let mcost = document.querySelectorAll(".fminer .cost");
	let mcosts = [0,25,700,1250,2000,2500,3250];
	
	let salemoney = document.querySelectorAll(".whore .salemoney");
	let salemoneys = [];
	for(let i = 0; i < salemoney.length; i++) {
		salemoneys[i] = costsales[i] * Math.floor(orecounts[i]);
	}

	for(let i = 1; i < strengths.length; i++) {
		window.timerId = window.setInterval(timer, 1000);
		function timer() {
			orecounts[i] += ppss[i];
			if(minercounts[i] >= 1) {
				let random = Math.random();
				if(random >= 0 && random <= changecrystal * minercounts[i]) {
					orecounts[0] += 1;
				}
			}
			multiply();
		}
	}

	function sall() {
		for(let i = 0; i < ppc.length; i++) {
			ppcs[i] = Number(pops / strengths[i]);
			if(pops / strengths[i] >= 1) {
				if(pops % strengths[i] == 0) {
					ppc[i].innerHTML = Number(pops / strengths[i]);
				} else {
					ppc[i].innerHTML = Number(pops / strengths[i]).toFixed(1);
				}
			} else {
				ppcs[i] = 0;
			}
		}
		money.innerHTML = moneys;
		pop.innerHTML = pops;
		for(let i = 0; i < upgratecosts.length; i++) {
			upgratecost[i].innerHTML = upgratecosts[i];
		}
		for(let i = 0; i < upgratecrystalcosts.length; i++) {
			upgratecrystalcost[i].innerHTML = upgratecrystalcosts[i];
		}
		for(let i = 0; i < strength.length; i++) {
			strength[i].innerHTML = Math.floor(strengths[i]);
			costsale[i].innerHTML = Math.floor(costsales[i]);
			orecount[i].innerHTML = Math.floor(orecounts[i]);
			minercount[i].innerHTML = Math.floor(minercounts[i]);
			if(window.timeId) {
				ppss[i] = pops / strengths[i] * minercounts[i] * 2;
			} else {
				ppss[i] = pops / strengths[i] * minercounts[i];
			}
			pps[i].innerHTML = Math.floor(ppss[i]);
			costbroke[i].innerHTML = Math.floor(costbrokes[i]);
			mcost[i].innerHTML = Math.floor(mcosts[i]);
			salemoney[i].innerHTML = Math.floor(salemoneys[i]);
			ppc[i].innerHTML = Math.floor(ppcs[i]);
		}
	}; sall();

	let multiplysale = document.querySelectorAll(".whore .multiplysale");
	let multiplysales = ["1x","10x","25x","100x","MAX"];
	for(let i = 0; i < multiplysale.length; i++) {
		multiplysale[i].innerHTML = multiplysales[0];
		multiplysale[i].addEventListener("click", function() {
			if(multiplysale[i].innerHTML == multiplysales[0]) {
				multiplysale[i].innerHTML = multiplysales[1];
			} else if(multiplysale[i].innerHTML == multiplysales[1]) {
				multiplysale[i].innerHTML = multiplysales[2];
			} else if(multiplysale[i].innerHTML == multiplysales[2]) {
				multiplysale[i].innerHTML = multiplysales[3];
			} else if(multiplysale[i].innerHTML == multiplysales[3]) {
				multiplysale[i].innerHTML = multiplysales[4];
			} else {
				multiplysale[i].innerHTML = multiplysales[0];
			}
			multiply();
		});
	}



	let sale = document.querySelectorAll(".whore .sale");
	for(let i = 0; i < sale.length; i++) {
		sale[i].addEventListener("click", function() {
			if(multiplysale[i].innerHTML == multiplysales[0]) {
				salemoneys[i] = parseInt(multiplysales[0]) * Math.floor(costsales[i]);
				orecounts[i] -= parseInt(multiplysales[0]);
				moneys += salemoneys[i];
			} else if(multiplysale[i].innerHTML == multiplysales[1]) {
				salemoneys[i] = parseInt(multiplysales[1]) * Math.floor(costsales[i]);
				orecounts[i] -= parseInt(multiplysales[1]);
				moneys += salemoneys[i];
			} else if(multiplysale[i].innerHTML == multiplysales[2]) {
				salemoneys[i] = parseInt(multiplysales[2]) * Math.floor(costsales[i]);
				orecounts[i] -= parseInt(multiplysales[2]);
				moneys += salemoneys[i];
			} else if(multiplysale[i].innerHTML == multiplysales[3]) {
				salemoneys[i] = parseInt(multiplysales[3]) * Math.floor(costsales[i]);
				orecounts[i] -= parseInt(multiplysales[3]);
				moneys += salemoneys[i];
			} else {
				salemoneys[i] = costsales[i] * Math.floor(orecounts[i]);
				orecounts[i] -= orecounts[i];
				moneys += salemoneys[i];
			}
			multiply();
		});
	}



	function multiply() {
		for(let i = 0; i < sale.length; i++) {
			if(multiplysale[i].innerHTML == multiplysales[0]) {
				salemoneys[i] = parseInt(multiplysales[0]) * Math.floor(costsales[i]);
			} else if(multiplysale[i].innerHTML == multiplysales[1]) {
				salemoneys[i] = parseInt(multiplysales[1]) * Math.floor(costsales[i]);
			} else if(multiplysale[i].innerHTML == multiplysales[2]) {
				salemoneys[i] = parseInt(multiplysales[2]) * Math.floor(costsales[i]);
			} else if(multiplysale[i].innerHTML == multiplysales[3]) {
				salemoneys[i] = parseInt(multiplysales[3]) * Math.floor(costsales[i]);
			} else {
				salemoneys[i] = costsales[i] * Math.floor(orecounts[i]);
			}
			sall();moneyblock();
		};
	} multiply();



	function moneyblock() {
		let ores = document.querySelectorAll(".ores");
		let fminer = document.querySelectorAll(".fminer");
		let upgrate = document.querySelectorAll(".upgrate");
		let upgratecrystal = document.querySelectorAll(".upgratecrystal");
		for(let i = 0; i < upgratecrystal.length; i++) {
			if(orecounts[0] >= upgratecrystalcosts[i]) {
				upgratecrystal[i].disabled = false;
			} else {
				upgratecrystal[i].disabled = true;
			}
		}
		for(let i = 0; i < upgrate.length; i++) {
			if(moneys >= upgratecosts[i]) {
				upgrate[i].disabled = false;
			} else {
				upgrate[i].disabled = true;
			}
		}
		for(let i = 0; i < mcost.length; i++) {
			if(moneys >= mcosts[i]) {
				fminer[i].disabled = false;
			} else {
				fminer[i].disabled = true;
			}
		}
		for(let i = 0; i < costbroke.length; i++) {
			if(ores[i].classList.contains("broke") == true) {
				if(moneys >= costbrokes[i]) {
					ores[i].disabled = false;
				} else {
					ores[i].disabled = true;
				}
			}
		}
		for(let i = 0; i < orecount.length; i++) {
			for(let j = 0; j < multiplysales.length; j++) {
				if(multiplysale[i].innerHTML == multiplysales[j]) {
					if(orecounts[i] >= parseInt(multiplysales[j])) {
						sale[i].disabled = false;
					} 
					if(orecounts[i] < parseInt(multiplysales[j])) {
						sale[i].disabled = true;
					} 
					if(orecounts[i] == 0) {
						sale[i].disabled = true;
					} else if(multiplysale[i].innerHTML == multiplysales[4]) {
						sale[i].disabled = false;
					}
				}
			}
		}
	}; moneyblock();






	let ores = document.querySelectorAll(".ores");
	for(let i = 0; i < ores.length; i++) {
		ores[i].addEventListener("click", function() {
			if(ores[i].classList.contains("broke") == true) {
				ores[i].classList.remove("broke");
				textopenbroke[i].style.display = "none";
				moneys -= costbrokes[i];
				ores[i].disabled = false;
			} else {
				let random = Math.random();
				if(random >= 0 && random <= changecrystal) {
					orecounts[0] += 1;
				}
				orecounts[i] += ppcs[i];
				multiply();
			}
		});
	}

	let fminer = document.querySelectorAll(".fminer");
	for(let i = 0; i < ores.length; i++) {
		fminer[i].addEventListener("click", function() {
			moneys -= mcosts[i];
			mcosts[i] = parseInt(mcosts[i] * 3.7);
			minercounts[i] += 1;
			multiply();
		});
	}

	let improve = document.getElementById("improve");
	improve.addEventListener("click", function() {
		pops += 1;
		moneys -= upgratecosts[0];
		upgratecosts[0] = parseInt(upgratecosts[0] * 3.7);
		multiply();
	})

	let increasechange = document.getElementById('increasechange');
	increasechange.addEventListener('click', function() {
		moneys -= upgratecosts[1];
		changecrystal *= 2;
		upgratecosts[1] = parseInt(upgratecosts[1] * 2);
		multiply();
	})



	let increasespeed = document.getElementById('increasespeed');
	increasespeed.addEventListener('click', function() {
		orecounts[0] -= upgratecrystalcosts[0];
		upgratecrystalcosts[0] = parseInt(upgratecrystalcosts[0] * 2);
		window.timeId = window.setTimeout(function() {
			for(let i = 1; i < ppss.length; i++) {
				ppss[i] /= 2;
			}
		}, 2000)
		window.timeclearId = window.setTimeout(function(){
			clearTimeout(window.timeId);
		}, 2050)
		multiply();
	})

});