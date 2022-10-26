function comission(input) {
    city = input[0]
    sellings = Number(input[1])

    switch (city) {
        case "Sofia":
            if (sellings >= 0 && sellings <= 500) {
                comission = 0.05 * sellings;
                console.log(comission.toFixed(2));
                break;
            } else if (sellings > 500 && sellings <= 1000) {
                comission = 0.07 * sellings;
                console.log(comission.toFixed(2));
                break;
            } else if (sellings > 1000 && sellings <= 10000) {
                comission = 0.08 * sellings;
                console.log(comission.toFixed(2));
                break;
            } else if (sellings > 10000 ) {
                comission = 0.12 * sellings;
                console.log(comission.toFixed(2));
                break
            }
        case "Varna":
            if (sellings >= 0 && sellings <= 500) {
                comission = 0.045 * sellings;
                console.log(comission.toFixed(2));
                break;
            } else if (sellings > 500 && sellings <= 1000) {
                comission = 0.075 * sellings;
                console.log(comission.toFixed(2));
                break;
            } else if (sellings > 1000 && sellings <= 10000) {
                comission = 0.1 * sellings;
                console.log(comission.toFixed(2));
                break;
            } else if (sellings > 10000 ) {
                comission = 0.13 * sellings;
                console.log(comission.toFixed(2));
                break;
            }
        case Sofia:
            if (sellings >= 0 && sellings <= 500) {
                comission = 0.055 * sellings;
                console.log(comission.toFixed(2));
            } else if (sellings > 500 && sellings <= 1000) {
                comission = 0.08 * sellings;
                console.log(comission.toFixed(2));
            } else if (sellings > 1000 && sellings <= 10000) {
                comission = 0.12 * sellings;
                console.log(comission.toFixed(2));
            } else if (sellings > 10000 ) {
                comission = 0.145 * sellings;
                console.log(comission.toFixed(2));
            }

        default:
            console.log("error")

    }   
}

comission(["Sofia", "1500"])