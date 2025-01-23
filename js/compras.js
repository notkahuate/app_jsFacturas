class compras extends HTMLElement {
    constructor(){

        super();
    }

    connectedCallback(){
        this.innerHTML =`

        <style>
        
        .form-containerc {
            background-color: rgba(255, 255, 255, 0.8);
            padding: 20px 30px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            width: 65vh;
            display: grid;
            gap: 20px;
            margin-top: 2vh;
        }
    
        form p {
            font-weight: bold;
            margin-bottom: 5px;
            color: #333;
        }
    
        form label {
            font-weight: bold;
            margin-bottom: 5px;
            color: #333;
            display: block;
        }
    
        select,
        input[type="text"],
        input[type="number"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
            color: #555;
            box-sizing: border-box;
        }
    
        select:focus,
        input[type="text"]:focus,
        input[type="number"]:focus {
            border-color: #007BFF;
            outline: none;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.2);
        }
    
        .datos {
            display: flex;
            gap: 10px;
        }
    
        .datos p,
        .datos input {
            flex: 1;
        }
    
        button {
            width: 100%;
            padding: 10px;
            background-color: #007BFF;
            color: #fff;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
        }
    
        button:hover {
            background-color: #0056b3;
            transition: background-color 0.3s ease;
        }

            
        </style>

        <div class="form-containerc">


        <form id="product-form">
        <label for="product">Nombre del Producto</label>
        <select id="product">
            <option value="" disabled selected>Selecciona un producto</option>
            <option value="1" data-code="P001" data-price="15000">leche</option>
            <option value="2" data-code="P002" data-price="25000">aguacate</option>
            <option value="3" data-code="P003" data-price="35000">fresas</option>
        </select>

        <label for="code">Código</label>
        <input type="text" id="code" disabled>

        <label for="unit-price">Valor Unitario</label>
        <input type="text" id="unit-price" disabled>

        <label for="quantity">Cantidad</label>
        <input type="number" id="quantity" placeholder="Ingrese la cantidad">

        <button type="submit">
        <img src="img/shop-cart-svgrepo-com (1).svg" alt="Icono" style="width: 20px; height: 20px; margin-right: 10px;">
     
        </button>
        </form>
        </div>



        `;
    }
}

customElements.define('compras-d',compras);

//select los diferetnes productos

document.getElementById("product").addEventListener("change", function () {
    const selectedOption = this.options[this.selectedIndex];

   
    const code = selectedOption.getAttribute("data-code");
    const price = selectedOption.getAttribute("data-price");

   
    document.getElementById("code").value = code ;
    document.getElementById("unit-price").value = price ;
});





document.getElementById("product-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que el formulario se envíe y recargue la página

    const productSelect = document.getElementById("product");
    const productName = productSelect.options[productSelect.selectedIndex].text;
    const productCode = document.getElementById("code").value;
    const productPrice = document.getElementById("unit-price").value;
    const productQuantity = document.getElementById("quantity").value;

    // Calculamos el total
    const totalPrice = (productPrice * productQuantity).toFixed(2);

    // Creamos una nueva fila en la tabla
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${productCode}</td>
        <td>${productName}</td>
        <td>${productQuantity}</td>
        <td>${totalPrice}</td>
    `;

    // Añadimos la nueva fila al cuerpo de la tabla
    document.getElementById("summary-body").appendChild(newRow);

    // Limpiar los campos después de agregar el producto
    document.getElementById("product").value = "";
    document.getElementById("code").value = "";
    document.getElementById("unit-price").value = "";
    document.getElementById("quantity").value = "";
});