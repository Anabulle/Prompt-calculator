let operation;
let b;
let d;
let reco;

function addition(b, d) {
    let a = b + d;
    return a;
}

function soustraction(b, d) {
    let a = b - d;
    return a;
}

function multiplication(b, d) {
    let a = b * d;
    return a;
}

function division(b, d) {
    let a = b / d;
    return a;
}

do {
    do {
        operation = prompt("opération a faire (addition,soustraction,multiplication ou division)");
    } while (operation == "" || operation == null);

    do {
        b = parseInt(prompt("entrez un nombre"));
    } while (isNaN(b) || b == null || b == "");

    do {
        d = parseInt(prompt("entrez un nombre"));
    } while (isNaN(d) || d == null || d == "");
    switch (operation.toLowerCase()) {
        case 'addition':
            a = addition(b, d);
            break;
        case 'soustraction':
            a = soustraction(b, d);
            break;
        case "multiplication":
            a = multiplication(b, d);
            break;
        case "division":
            a = division(b, d);
            break;
        default:
            operation;
    }
    alert(a);
    reco = prompt("voulez vous recommencer? tapez oui / non");
} while (reco === "oui");