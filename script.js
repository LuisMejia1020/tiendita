  var carrito = [];
      var precios = {
        "Camiseta talla L marca Polo": 10,
        "Camisa talla M marca Polo": 20,
        "Camiseta marca el toro talla S": 30,
        "Jean mamey de Pull n bear": 30,
        "Carta de Yugioh": 30,
        "Bicicleta Nimbus 2001": 30
      };

      function agregarProducto(nombre, precio) {
        carrito.push(nombre);
        actualizarCarrito();
        actualizarTotal(precio);
      }

      function actualizarCarrito() {
        var carritoElement = document.getElementById("carrito");
        carritoElement.innerHTML = "";

        for (var i = 0; i < carrito.length; i++) {
          var productoElement = document.createElement("li");
          productoElement.textContent = carrito[i];
          carritoElement.appendChild(productoElement);
        }
      }

      function actualizarTotal(precio) {
        var totalElement = document.getElementById("total");
        var total = parseInt(totalElement.textContent);
        total += precio;
        totalElement.textContent = total;

        var totalCheckoutElement = document.getElementById("totalCheckout");
        totalCheckoutElement.textContent = total;
      }

      function irAlCheckout() {
        var checkoutElement = document.getElementById("checkout");
        checkoutElement.style.display = "block";
      }

      function ciao(){
        console.log("gracias por tu compra, te esperamos pronto")
        alert("gracias! tu compra ya esta en camino")
      }

      function borrarCarrito() {
        // Borrar el carrito de compras
        carrito = [];
        // Actualizar la vista del carrito de compras
        actualizarVistaCarrito();
        actualizarVistaTotal();
      }

      function actualizarVistaCarrito() {
        // Obtener el contenedor del carrito de compras
        var contenedorCarrito = document.getElementById("carrito");
        // Eliminar todos los elementos del contenedor
        contenedorCarrito.innerHTML = "";
        // Verificar si el carrito está vacío
        if (carrito.length === 0) {
          // Añadir un mensaje indicando que el carrito está vacío
          contenedorCarrito.innerHTML = "<p>El carrito esta vacio</p>";
        } else {
          // Recorrer los elementos del carrito de compras y crear elementos HTML para cada uno
          for (var i = 0; i < carrito.length; i++) {
            var itemCarrito = document.createElement("div");
            itemCarrito.innerHTML = carrito[i].nombre + " - $" + carrito[i].precio;
            contenedorCarrito.appendChild(itemCarrito);
          }
        }
      }

      function actualizarVistaTotal() {
        // Obtener el contenedor del carrito de compras
        var contenedorTotal = document.getElementById("total");
        // Eliminar todos los elementos del contenedor
        contenedorTotal.innerHTML = "";
        // Verificar si el carrito está vacío
        if (carrito.length === 0) {
          // Añadir un mensaje indicando que el carrito está vacío
          contenedorCarrito.innerHTML = "<p>su total es 0</p>";
        } else {
          // Recorrer los elementos del carrito de compras y crear elementos HTML para cada uno
          for (var i = 0; i < carrito.length; i++) {
            var itemCarrito = document.createElement("div");
            itemCarrito.innerHTML = carrito[i].nombre + " - $" + carrito[i].precio;
            contenedorCarrito.appendChild(itemCarrito);
          }
        }
      }

      var mesVencimiento = document.getElementById("mes-vencimiento").value;
      var anioVencimiento = document.getElementById("anio-vencimiento").value;


     

      

     

      
      
      
