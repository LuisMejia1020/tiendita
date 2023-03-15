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
        carrito.push({nombre: nombre, precio: precio});
        actualizarVistaCarrito();
        actualizarVistaTotal();
      }

      

      function actualizarCarrito() {
        var carritoElement = document.getElementById("carrito");
        carritoElement.innerHTML = "";
      
        for (var i = 0; i < carrito.length; i++) {
          var productoElement = document.createElement("li");
          productoElement.textContent = carrito[i];
          carritoElement.appendChild(productoElement);
      
          // Agregar botón de borrar para cada elemento del carrito
          var botonBorrar = document.createElement("button");
          botonBorrar.textContent = "Borrar";
          botonBorrar.dataset.index = i; // Almacenar el índice del artículo en el dataset del botón
          botonBorrar.addEventListener("click", function() {
            var index = parseInt(this.dataset.index);
            carrito.splice(index, 1); // Eliminar el artículo correspondiente del carrito
            actualizarCarrito(); // Actualizar la vista del carrito
            actualizarTotal(); // Actualizar el total
          });
          productoElement.appendChild(botonBorrar);
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

      function borrarArticulo(index) {
        carrito.splice(index, 1);
        actualizarVistaCarrito();
        actualizarVistaTotal();
      }

      function actualizarVistaCarrito() {
        var contenedorCarrito = document.getElementById("carrito");
        contenedorCarrito.innerHTML = "";
        if (carrito.length === 0) {
          contenedorCarrito.innerHTML = "<p>El carrito esta vacio</p>";
        } else {
          for (var i = 0; i < carrito.length; i++) {
            var itemCarrito = document.createElement("div");
            var botonBorrar = document.createElement("button");
            botonBorrar.textContent = "Borrar";
            botonBorrar.addEventListener("click", borrarArticulo.bind(null, i));
            itemCarrito.innerHTML = carrito[i].nombre + " - $" + carrito[i].precio;
            itemCarrito.appendChild(botonBorrar);
            contenedorCarrito.appendChild(itemCarrito);
          }
        }
      }

      function actualizarVistaTotal() {
        var contenedorTotal = document.getElementById("total");
        var total = 0;
        for (var i = 0; i < carrito.length; i++) {
          total += carrito[i].precio;
        }
        contenedorTotal.textContent = total;
      }

    
      

      var mesVencimiento = document.getElementById("mes-vencimiento").value;
      var anioVencimiento = document.getElementById("anio-vencimiento").value;


     

      

     

      
      
      
