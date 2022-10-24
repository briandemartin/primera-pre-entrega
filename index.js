//! variables
let producto = parseInt(prompt('elegi el producto que quieras comprar 1-iphone-Pro-Max -- 2-Sansung-Galaxy-A71 -- 3-MacBook-Pro-Max -- 4-MacBook'))
let seguirComprando = true
let totalCompra = 0
//! variables

//* desarrollo
//! if-else
while(seguirComprando) {
    if (producto === 1){
        totalCompra = totalCompra + 100
    }else if (producto === 2){
        totalCompra = totalCompra + 150
    }else if (producto === 3){
        totalCompra = totalCompra + 500
    }else if (producto === 4){
        totalCompra = totalCompra + 800
    }
    
    decision = parseInt (prompt ('¿Quieres seguir comprando? 1-SI 2-NO'))

    if (decision === 1){
        producto = parseInt(prompt('elegi el producto que quieras comprar 1-iphone-Pro-Max -- 2-Sansung-Galaxy-A71 -- 3-MacBook-Pro-Max -- 4-MacBook'))
    }else {
        seguirComprando = false
    }

}


alert (`El total de tu compra es ${totalCompra}`)

//! if-else
//* desarrollo
