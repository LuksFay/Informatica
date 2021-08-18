const sanguche1={
    ingredientes:['tomate', 'lechuga'],
    cuerpo: 'pollo',
    adere: 'mostaza'
}
const sanguche2={
    ingredientes:['cebolla', 'pepino'],
    cuerpo: 'carne',
    adere: 'ketchup'
}

const queTiene = (estosereemplaza) => {
    console.log('esto es de uno de los sanguches')
        console.log('esto mostrara el tipo de carne del sanguche', estosereemplaza.cuerpo);
        console.log('esto mostrara el tipo de adherezo del sanguche', estosereemplaza.adere);
        console.log('esto mostrara el primer ingrediente del sanguche', estosereemplaza.ingredientes[0]);
        console.log('esto mostrara el segundo ingrediente del sanguche', estosereemplaza.ingredientes[1]);
}

queTiene(sanguche1);
queTiene(sanguche2);