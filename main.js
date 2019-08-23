var num1 = document.querySelector("#n1");
var num2 = document.querySelector("#n2");
var num3 = document.querySelector("#n3");
var num4 = document.querySelector("#n4");
var num5 = document.querySelector("#n5");
var num6 = document.querySelector("#n6");
var num7 = document.querySelector("#n7");
var num8 = document.querySelector("#n8");
var num9 = document.querySelector("#n9");
var num0 = document.querySelector("#n0");

var tab = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num0];

var input = document.querySelector("input");


for (var i = 0; i < tab.length; i++) {
    tab[i].addEventListener("click", function () {
        if (add) input.value += this.value;
        else {
            input.value = this.value
            add = true
        }
    });
}

var selected = null;
var l1 = null;
var l2 = null;
var lastnum = null;
var add = true;
var lastresult = null;
let changed = false;

function licz(znak) {
    if (znak == "*") return l1 * l2;
    else if (znak == "+") return Number(l1) + Number(l2);
    else if (znak == "/") return l1 / l2;
    else if (znak == "sqrt") return Math.sqrt(l1);
    else if (znak == "-") return l1 - l2;
}

document.querySelector("#plus").addEventListener("click", function () {
    if (input.value != null) {
        if (selected != "+" && selected != null) {
            combo = false;
            if (l1 != null && l2 != null) {
                input.value = licz(selected);
                selected = "+";
                changed = true;
            }

        }
        if (l1 == null) {
            l1 = input.value;
            add = false;
            selected = "+"
        } else if (selected != null) {
            if (combo == true || changed == true) {
                changed = false;
                if (lastresult != null && input.value != lastresult) {
                    l1 = lastresult;
                    l2 = input.value;
                } else {
                    l1 = input.value;
                    input.value = licz(selected);
                    add = false;
                    lastresult = input.value;
                }

            } else {
                if (lastresult != null) {
                    l1 = l1;
                    l1 = lastresult;
                } else l2 = input.value;
                input.value = licz(selected);
                combo = true;
                add = false;
                lastresult = input.value;
            }
        }

    }
});


document.querySelector("#kropka").addEventListener("click", function () {
    input.value += ".";

});

document.querySelector("#razy").addEventListener("click", function () {
    if (input.value != null) {
        if (selected != "*" && selected != null) {
            combo = false;
            if (l1 != null && l2 != null) {
                input.value = licz(selected);
                selected = "*";
                changed = true;
            }

        }
        if (l1 == null) {
            l1 = input.value;
            add = false;
            selected = "*"
        } else if (selected != null) {
            if (combo == true || changed == true) {
                changed = false;
                if (lastresult != null && input.value != lastresult) {
                    l1 = lastresult;
                    l2 = input.value;
                } else {
                    l1 = input.value;
                    input.value = licz(selected);
                    add = false;
                    lastresult = input.value;
                }

            } else {
                if (lastresult != null) {
                    l1 = l1;
                    l1 = lastresult;
                } else l2 = input.value;
                input.value = licz(selected);
                combo = true;
                add = false;
                lastresult = input.value;
            }
        }

    }
});
var combo = false;
document.querySelector("#minus").addEventListener("click", function () {
    if (input.value != null) {
        if (selected != "-" && selected != null) {
            combo = false;
            if (l1 != null && l2 != null) {
                input.value = licz(selected);
                selected = "-";
                changed = true;
            }

        }
        if (l1 == null) {
            l1 = input.value;
            add = false;
            selected = "-"
        } else if (selected != null) {
            if (combo == true || changed == true) {
                changed = false;
                if (lastresult != null && input.value != lastresult) {
                    l1 = lastresult;
                    l2 = input.value;
                } else {
                    l1 = input.value;
                    input.value = licz(selected);
                    add = false;
                    lastresult = input.value;
                }

            } else {
                if (lastresult != null) {
                    l1 = l1;
                    l1 = lastresult;
                } else l2 = input.value;
                input.value = licz(selected);
                combo = true;
                add = false;
                lastresult = input.value;
            }
        }

    }
});

document.querySelector("#dziel").addEventListener("click", function () {
    if (input.value != null) {
        if (selected != "/" && selected != null) {
            combo = false;
            if (l1 != null && l2 != null) {
                input.value = licz(selected);
                selected = "/";
                changed = true;
            }

        }
        if (l1 == null) {
            l1 = input.value;
            add = false;
            selected = "/"
        } else if (selected != null) {
            if (combo == true || changed == true) {
                changed = false;
                if (lastresult != null && input.value != lastresult) {
                    l1 = lastresult;
                    l2 = input.value;
                } else {
                    l1 = input.value;
                    input.value = licz(selected);
                    add = false;
                    lastresult = input.value;
                }

            } else {
                if (lastresult != null) {
                    l1 = l1;
                    l1 = lastresult;
                } else l2 = input.value;
                input.value = licz(selected);
                combo = true;
                add = false;
                lastresult = input.value;
            }
        }

    }
});

document.querySelector("#sqrt").addEventListener("click", function () {

    if (input.value != null) {
        if (selected != "sqrt") {
            if (l1 != null && l2 != null) {
                input.value = licz(selected);
                selected = "sqrt";
            }
            lastresult = null;
            l2 = null;
        }
        l1 = input.value;
        input.value = licz("sqrt");
        add = false;

    }
});

document.querySelector("#off").addEventListener("click", function () {
    input.value = null;
    l1 = null;
    l2 = null;
    combo = false;
    lastresult = null;
});

document.querySelector("#rowna").addEventListener("click", function () {
    if (l1 != null && selected != null) {
        if (combo == true) {
            if (lastresult != null && input.value != lastresult) {
                l1 = lastresult;
                l2 = input.value;
            } else l1 = input.value;
            input.value = licz(selected);
            add = false;
            lastresult = input.value;

        } else {
            if (lastresult != null) {
                l2 = l1;
                l1 = lastresult;
            } else l2 = input.value;
            input.value = licz(selected);
            combo = true;
            add = false;
            lastresult = input.value;
        }
    }

});

document.querySelector("html").addEventListener("keydown", function (event) {
    if (event.key == "Escape") {
        document.querySelector("#off").style.backgroundColor = "#0b486bb6";
        input.value = null;
        l1 = null;
        l2 = null;
        combo = false;
        lastresult = null;
    }
    if (event.key == "Enter") {
        document.querySelector("#rowna").style.backgroundColor = "#0b486bb6";
        if (l1 != null && selected != null) {
            if (combo == true) {
                if (lastresult != null && input.value != lastresult) {
                    l1 = lastresult;
                    l2 = input.value;
                } else l1 = input.value;
                input.value = licz(selected);
                add = false;
                lastresult = input.value;

            } else {
                if (lastresult != null) {
                    l2 = l1;
                    l1 = lastresult;
                } else l2 = input.value;
                input.value = licz(selected);
                combo = true;
                add = false;
                lastresult = input.value;
            }
        }
    }
    if (event.key == "0") {
        num0.style.backgroundColor = "#0b486bb6";
        if (add) input.value += 0;
        else {
            input.value = 0;
            add = true;
        }
    }
    if (event.key == "1") {
        num1.style.backgroundColor = "#0b486bb6";
        if (add) input.value += 1;
        else {
            input.value = 1;
            add = true;
        }
    }
    if (event.key == "2") {
        num2.style.backgroundColor = "#0b486bb6";
        if (add) input.value += 2;
        else {
            input.value = 2;
            add = true;
        }
    }
    if (event.key == "3") {
        num3.style.backgroundColor = "#0b486bb6";
        if (add) input.value += 3;
        else {
            input.value = 3;
            add = true;
        }
    }
    if (event.key == "4") {
        num4.style.backgroundColor = "#0b486bb6";
        if (add) input.value += 4;
        else {
            input.value = 4;
            add = true;
        }
    }
    if (event.key == "5") {
        num5.style.backgroundColor = "#0b486bb6";
        if (add) input.value += 5;
        else {
            input.value = 5;
            add = true;
        }
    }
    if (event.key == "6") {
        num6.style.backgroundColor = "#0b486bb6";
        if (add) input.value += 6;
        else {
            input.value = 6;
            add = true;
        }
    }
    if (event.key == "7") {
        num7.style.backgroundColor = "#0b486bb6";
        if (add) input.value += 7;
        else {
            input.value = 7;
            add = true;
        }
    }
    if (event.key == "8") {
        num8.style.backgroundColor = "#0b486bb6";
        if (add) input.value += 8;
        else {
            input.value = 8;
            add = true;
        }
    }
    if (event.key == "9") {
        num9.style.backgroundColor = "#0b486bb6";
        if (add) input.value += 9;
        else {
            input.value = 9;
            add = true;
        }
    }
    if (event.key == "+") {
        document.querySelector("#plus").style.backgroundColor = "#0b486bb6";
        if (input.value != null) {
            if (selected != "+") {
                combo = false;
                l1 = null;
                l2 = null;
                lastresult = null;
            }
            if (l1 == null) {
                l1 = input.value;
                add = false;
                selected = "+"
            } else if (selected == "+") {
                if (combo == true) {
                    if (lastresult != null && input.value != lastresult) {
                        l1 = lastresult;
                        l2 = input.value;
                    } else l1 = input.value;
                    input.value = licz(selected);
                    add = false;
                    lastresult = input.value;

                } else {
                    if (lastresult != null) {
                        l2 = l1;
                        l1 = lastresult;
                    } else l2 = input.value;
                    input.value = licz(selected);
                    combo = true;
                    add = false;
                    lastresult = input.value;
                }
            }

        }
    }
    if (event.key == "-") {
        document.querySelector("#minus").style.backgroundColor = "#0b486bb6";
        if (input.value != null) {
            if (selected != "-") {
                combo = false;
                l1 = null;
                l2 = null;
                lastresult = null;
            }
            if (l1 == null) {
                l1 = input.value;
                add = false;
                selected = "-"
            } else if (selected == "-") {
                if (combo == true) {
                    if (lastresult != null && input.value != lastresult) {
                        l1 = lastresult;
                        l2 = input.value;
                    } else l1 = input.value;
                    input.value = licz(selected);
                    add = false;
                    lastresult = input.value;

                } else {
                    if (lastresult != null) {
                        l2 = l1;
                        l1 = lastresult;
                    } else l2 = input.value;
                    input.value = licz(selected);
                    combo = true;
                    add = false;
                    lastresult = input.value;
                }
            }

        }
    }
    if (event.key == "/") {
        document.querySelector("#dziel").style.backgroundColor = "#0b486bb6";
        if (input.value != null) {
            if (selected != "/") {
                combo = false;
                l1 = null;
                l2 = null;
                lastresult = null;
            }
            if (l1 == null) {
                l1 = input.value;
                add = false;
                selected = "/"
            } else if (selected == "/") {
                if (combo == true) {
                    if (lastresult != null) {
                        l1 = lastresult;
                    } else l1 = input.value;
                    input.value = licz(selected);
                    add = false;
                    lastresult = input.value;

                } else {
                    if (lastresult != null) {
                        l2 = l1;
                        l1 = lastresult;
                    } else l2 = input.value;
                    input.value = licz(selected);
                    combo = true;
                    add = false;
                    lastresult = input.value;
                }
            }

        }
    }
    if (event.key == "*") {
        document.querySelector("#razy").style.backgroundColor = "#0b486bb6";
        if (input.value != null) {
            if (selected != "*") {
                combo = false;
                l1 = null;
                l2 = null;
                lastresult = null;
            }
            if (l1 == null) {
                l1 = input.value;
                add = false;
                selected = "*"
            } else if (selected == "*") {
                if (combo == true) {
                    if (lastresult != null && input.value != lastresult) {
                        l1 = lastresult;
                        l2 = input.value;
                    } else l1 = input.value;
                    input.value = licz(selected);
                    add = false;
                    lastresult = input.value;

                } else {
                    if (lastresult != null) {
                        l2 = l1;
                        l1 = lastresult;
                    } else l2 = input.value;
                    input.value = licz(selected);
                    combo = true;
                    add = false;
                    lastresult = input.value;
                }
            }

        }
    }
    if (event.key == ".") {
        document.querySelector("#kropka").style.backgroundColor = "#0b486bb6";
        input.value += ".";
    }
});

document.querySelector("html").addEventListener("keyup", function (event) {
    if (event.key == "Escape") {
        document.querySelector("#off").style.backgroundColor = "";

    }
    if (event.key == "Enter") {
        document.querySelector("#rowna").style.backgroundColor = "";
    }
    if (event.key == "0") {
        num0.style.backgroundColor = "";
    }
    if (event.key == "1") {
        num1.style.backgroundColor = "";
    }
    if (event.key == "2") {
        num2.style.backgroundColor = "";
    }
    if (event.key == "3") {
        num3.style.backgroundColor = "";
    }
    if (event.key == "4") {
        num4.style.backgroundColor = "";
    }
    if (event.key == "5") {
        num5.style.backgroundColor = "";
    }
    if (event.key == "6") {
        num6.style.backgroundColor = "";

    }
    if (event.key == "7") {
        num7.style.backgroundColor = "";

    }
    if (event.key == "8") {
        num8.style.backgroundColor = "";

    }
    if (event.key == "9") {
        num9.style.backgroundColor = "";

    }
    if (event.key == "+") {
        document.querySelector("#plus").style.backgroundColor = "";
    }
    if (event.key == "-") {
        document.querySelector("#minus").style.backgroundColor = "";
    }
    if (event.key == "/") {
        document.querySelector("#dziel").style.backgroundColor = "";
    }
    if (event.key == "*") {
        document.querySelector("#razy").style.backgroundColor = "";
    }
    if (event.key == ".") {
        document.querySelector("#kropka").style.backgroundColor = "";
    }
});