function microondas(alimento,timing){

    var tempoPipoca = 10;
    var tempoMacarrao = 8;
    var tempoCarne = 15;
    var tempoFeijao = 12;
    var tempoBrigadeiro = 8;

    switch(alimento){
        case "pipoca":
            console.log("pipoca");
            if (timing > (3 * tempoPipoca)){
                console.log("Kabumm! Adeus pipoca!");
            } else if (timing > (2 * tempoPipoca)){
                console.log("Xiii, a pipoca queimou!");
            } else if (timing < tempoPipoca){
                console.log( "Tempo insuficiente. Sua pipoca não esquentou.");
            } else{
                console.log( "A pipoca está pronta, bom apetite!");
            }
            break;

        case "macarrão":
            console.log("macarrão");
            if (timing > (3 * tempoMacarrao)){
                console.log("Kabumm! Adeus macarrão!");
            } else if (timing > (2 * tempoMacarrao)){
                console.log("Xiii, o macarrão queimou!");
            } else if (timing < tempoMacarrao){
                console.log( "Tempo insuficiente. Seu macarrão não esquentou.");
            } else{
                console.log( "O macarrão está pronto, bom apetite!");
            }
            break;

        case "carne":
            console.log("carne");
            if (timing > (3 * tempoCarne)){
                console.log("Kabumm! Adeus churrasco!");
            } else if (timing > (2 * tempoCarne)){
                console.log("Xiii, a carne queimou!");
            } else if (timing < tempoCarne){
                console.log( "Tempo insuficiente. Sua carne não esquentou.");
            } else{
                console.log( "A carne está pronta, bom apetite!");
            }
            break;

        case "feijão":
            console.log("feijão");
            if (timing > (3 * tempoFeijao)){
                console.log("Kabumm! Adeus feijãozinho!");
            } else if (timing > (2 * tempoFeijao)){
                console.log("Xiii, o feijão queimou");
            } else if (timing < tempoFeijao){
                console.log( "Tempo insuficiente. Seu feijão não esquentou.");
            } else{
                console.log( "O feijão está pronto, bom apetite!");
            }
            break;

        case "brigadeiro":
            console.log("brigadeiro");
            if (timing > (3 * tempoBrigadeiro)){
                console.log("Kabumm! Adeus brigadeiro!");
            } else if (timing > (2 * tempoBrigadeiro)){
                console.log("Xiii, o brigadeiro queimou");
            } else if (timing < tempoBrigadeiro){
                console.log( "Tempo insuficiente. Seu brigadeiro não esquentou.");
            } else{
                console.log( "O brigadeiro está pronto, bom apetite!");
            }
            break;

        default:
            console.log("Prato estranho, esse eu não conheço!");
    }

}

microondas("brigadeiro",10);