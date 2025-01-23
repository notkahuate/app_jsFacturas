class compras extends HTMLElement {
    constructor(){

        super();
    }

    connectedCallback(){
        this.innerHTML =`

        <style>
        
        .form-containerc {
            background-color: #fff;
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
            <option value="1" data-code="P001" data-price="15000">Producto A</option>
            <option value="2" data-code="P002" data-price="25000">Producto B</option>
            <option value="3" data-code="P003" data-price="35000">Producto C</option>
        </select>

        <label for="code">Código</label>
        <input type="text" id="code" disabled>

        <label for="unit-price">Valor Unitario</label>
        <input type="text" id="unit-price" disabled>

        <label for="quantity">Cantidad</label>
        <input type="number" id="quantity" placeholder="Ingrese la cantidad">

        <button type="submit">Enviar</button>
        </form>
        </div>



        `;
    }
}

customElements.define('compras-d',compras);