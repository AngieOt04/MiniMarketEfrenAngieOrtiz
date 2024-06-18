document.getElementById('form-producto').addEventListener('submit', function(event) {
    event.preventDefault();
    agregarProducto();
});

let productos = [];

function agregarProducto() {
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const precio = parseFloat(document.getElementById('precio').value);
    const inventario = parseInt(document.getElementById('inventario').value);

    // Validar los campos
    let valid = true;
    document.getElementById('error-nombre').textContent = '';
    document.getElementById('error-precio').textContent = '';
    document.getElementById('error-inventario').textContent = '';

    if (!nombre) {
        document.getElementById('error-nombre').textContent = 'El nombre es obligatorio.';
        valid = false;
    }
    if (isNaN(precio) || precio <= 0) {
        document.getElementById('error-precio').textContent = 'El precio debe ser un número positivo.';
        valid = false;
    }
    if (isNaN(inventario) || inventario < 0) {
        document.getElementById('error-inventario').textContent = 'El inventario debe ser un número no negativo.';
        valid = false;
    }

    if (!valid) {
        return;
    }

    // Crear el producto y agregarlo al array
    const producto = {
        nombre: nombre,
        precio: precio,
        inventario: inventario
    };
    productos.push(producto);

    // Actualizar la tabla
    mostrarProductos(productos);

    // Limpiar el formulario
    document.getElementById('form-producto').reset();
}

function mostrarProductos(productos) {
    const tbody = document.getElementById('tbody-productos');
    tbody.innerHTML = '';

    productos.forEach(producto => {
        const valorTotal = producto.precio * producto.inventario;
        const estado = producto.inventario === 0 ? 'Agotado' : 'En stock';

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="px-4 py-2 border border-gray-300">${producto.nombre}</td>
            <td class="px-4 py-2 border border-gray-300">${valorTotal.toFixed(2)}</td>
            <td class="px-4 py-2 border border-gray-300">${estado}</td>
        `;
        tbody.appendChild(tr);
    });
}
