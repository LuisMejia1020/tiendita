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
