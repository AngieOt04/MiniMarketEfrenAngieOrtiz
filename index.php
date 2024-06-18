<?php
$productos = [];

function agregarProducto(&$productos, $nombre, $precio, $inventario) {
    $producto = [
        "nombre" => $nombre,
        "precio" => $precio,
        "inventario" => $inventario
    ];
    $productos[] = $producto;
}

function mostrarProductos($productos) {
    foreach ($productos as $producto) {
        $valorTotal = $producto['precio'] * $producto['inventario'];
        $estado = $producto['inventario'] == 0 ? 'Agotado' : 'En stock';
        echo "
        <tr>
            <td class='px-4 py-2 border border-gray-300'>{$producto['nombre']}</td>
            <td class='px-4 py-2 border border-gray-300'>" . number_format($valorTotal, 2) . "</td>
            <td class='px-4 py-2 border border-gray-300'>{$estado}</td>
        </tr>
        ";
    }
}

// Ejemplo de uso:
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $precio = $_POST['precio'];
    $inventario = $_POST['inventario'];
    
    agregarProducto($productos, $nombre, $precio, $inventario);
    mostrarProductos($productos);
}
?>
