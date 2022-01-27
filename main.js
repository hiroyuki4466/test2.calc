let number = "0";
let answer = 0;
let key = "";
let symbol = "";

function cal_run(btn) {
  if(!isNaN(btn)) {
    if(symbol == "=") {
        answer = 0;
        symbol = "";
    }
    if(!isNaN(key)) {
      if(number == "0") {
        number ="" + btn;
      }else {
        number += "" + btn;
    }
      }else {
        number = "" + btn;
    }
        document.getElementById("result").innerHTML = number;
  }else {
    if(!isNaN(key)) {
        if (symbol == "") answer = number;
	    else answer = window.eval(answer + symbol + number);
            number = "0";
            document.getElementById("result").innerHTML = answer;
    }
        symbol = btn;
    }
        document.getElementById("cal_type").innerHTML = symbol;
        key = btn;
}

function cal_period() {
    if(number.indexOf(".") < 0) number += ".";
        key = 0;
        document.getElementById("result").innerHTML = number;
}

function cal_equal() {
	document.title = key + "=" + ":" + answer + "[" + symbol + "]" + number;
	if (key == "=") {
		answer = 0;
		key = "";
	} else {
		if (symbol == "") answer = number;
		else answer = window.eval(answer + symbol + number);
		key = "=";
	}
	number = "0";
	symbol = key;
	document.getElementById("result").innerHTML = answer;
	document.getElementById("cal_type").innerHTML = key;
}

function cal_clear() {
    answer = 0;
    symbol = "";
    document.getElementById("result").innerHTML = answer;
    document.getElementById("cal_type").innerHTML = symbol;
}