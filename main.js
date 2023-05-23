// ES 1: Realizzare un oggetto che rappresenti un garage, dovrà contenere una lista di automobili. Ciascuna automobile dovra’ avere una marca (es. Fiat) ed una lista di modelli (es. Pandino tattico rosso bello come Charizard).
//   Scrivere un metodo che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.

// creo un oggetto
let garage = {
    // l'oggetto ha una proprietà che come valore ha un array di oggetti
    'automobiles': [
        {'brand': 'mercedes','model': 'class A'},
        {'brand': 'fiat','model': '500'},
        {'brand': 'volvo','model': 'xc80'},
        {'brand': 'volvo','model': 'xc40'}
        
    ],
    // adesso devo chiedere alla funzione di cercare nell'oggetto ciclicamente quando riceve un input
    'search': function (marchio) {
        // let macchina_trovata=false
        this.automobiles.forEach((macchina)=>{
           if (marchio.toLowerCase() ==macchina.brand) {
            // macchina_trovata=true
            console.log(macchina.model);
        } 
        }) 
        // if (!macchina_trovata) { 
        //     console.log('nessuna macchina trovata');
        // }
        
    
    }
} 
garage.search('volvo')

