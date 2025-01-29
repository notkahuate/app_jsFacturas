


class factura extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
        .container {
            background-color: rgba(255, 255, 255, 0.8);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            width: 65vh;
            margin: 0 auto;
            margin-top: 5vh;
        }

        .card {
            border: 1px solid #ddd;
            border-radius: 10px;
            overflow: hidden;
        }

        .card-header {
            background-color: #f8f9fa;
            padding: 15px;
        }

        .card-header h3 {
            color: #333;
            text-align: center;
        }

        .card-body {
            padding: 20px;
        }

        .mt-3 p {
            font-size: 16px;
            margin-bottom: 15px;
            color: #333;
        }

        .mt-3 strong {
            font-weight: bold;
        }

        .text-center button {
            width: 100%;
            padding: 12px;
            background-color: #007BFF;
            color: #fff;
            font-size: 18px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .text-center button:hover {
            background-color: #0056b3;
        }

        @media (max-width: 768px) {
            .container {
                width: 80%;
            }

            .card-body {
                padding: 15px;
            }

            .text-center button {
                font-size: 16px;
                padding: 10px;
            }
        }
        </style>

        <div class="container mt-5">
            <div class="card">
                <div class="card-header text-center">
                    <h3>Invoice Detail</h3>
                </div>
                <div class="card-body">
                    <div class="mt-3">
                    <label for="subtotal">Subtotal</label>
                    <input type="text" id="subtotal" disabled>
    
                    <label for="iva">Iva (19%)</label>
                    <input type="text" id="iva" disabled>
    
                    <label for="total">Total</label>
                    <input type="number" id="total" disabled>
                    </div>
                </div>
            </div>
            <div class="text-center mt-4">
                <button class="btn btn-primary btn-lg" id="payBtn">Pay</button>
            </div>
        </div>
        `;
    }
}


document.addEventListener("submit",(event)=>{
    const nrofactura = document.getElementById("factura").value;
    const iduser = document.getElementById("id");
    const nombreuser = document.getElementById("nombre");
    const apellidouser = document.getElementById("apellido");
    const direccionuser = document.getElementById("direccion");
    const emailuser = document.getElementById("email");

    if(event.target.id === "prod"){

        if(nrofactura && iduser && nombreuser  && apellidouser  && direccionuser  && emailuser){
            const facturas = {
                "idFactura": nrofactura,
                "iduser" : iduser,
                "nombre": nombreuser,
                "apellido" : apellidouser,
                "direccion": direccionuser,
                "email": emailuser
            };
    
            fetch("http://localhost:3000/facturas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(factura)
            })
            .then(response => response.json())
            .then(data => {
                console.log("Pago registrado con éxito:", data);
            })
            .catch(error => {
                console.error("Error al enviar el pago:", error);
            });
        } else {
            alert("Debe ingresar el total y asegurarse de tener un ID de cliente.");
        }
        
    }
   
    


});



customElements.define('factura-d', factura);
