function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");

  messageElement.textContent = message;
  messageElement.classList.remove("form__message--success", "form__message--error");
  messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
  inputElement.classList.add("form__input--error");
  inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
  inputElement.classList.remove("form__input--error");
  inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");

  document.querySelector("#linkCreateAccount").addEventListener("click", e => {
      e.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");
  });

  document.querySelector("#linkLogin").addEventListener("click", e => {
      e.preventDefault();
      loginForm.classList.remove("form--hidden");
      createAccountForm.classList.add("form--hidden");
  });

  loginForm.addEventListener("submit", e => {
      e.preventDefault();

      // Perform your AJAX/Fetch login

      setFormMessage(loginForm, "error", "Invalid username/password combination");
  });

  document.querySelectorAll(".form__input").forEach(inputElement => {
      inputElement.addEventListener("blur", e => {
          if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 6) {
              setInputError(inputElement, "Username must be at least 6 characters in length");
          }
      });

      inputElement.addEventListener("input", e => {
          clearInputError(inputElement);
      });
  });
}); 

function ocultar() {
  var div = document.getElementById("formularios");
  div.classList.add("oculto");
}

 

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
        alert("Producto agregado")
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
          botonBorrar.classList.add("botonCarrito")
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


      function irAlLogin() {
        var checkoutElement2 = document.getElementById("formularios");
        checkoutElement2.style.display = "block";
      }

      function ciaoLogin(){
        var formsElement = document.getElementById("formularios")
        formsElement.style.display = "none"
      }

      function ciao(){
        console.log("gracias por tu compra, te esperamos pronto")
        alert("gracias! tu compra ya esta en camino")
        borrarCarrito()
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
            botonBorrar.classList.add("botonCarrito")
            botonBorrar.addEventListener("click", borrarArticulo.bind(null, i));
            itemCarrito.innerHTML = carrito[i].nombre + " - L" + carrito[i].precio;
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



    

    




    

            


     

      

     

      
      
      
