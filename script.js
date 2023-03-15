  var carrito = [];
      var precios = {
        "Producto 1": 10,
        "Producto 2": 20,
        "Producto 3": 30
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
        alert("gracias por tu compra, te esperamos pronto")
      }
