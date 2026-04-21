# Laboratorio 6: ShopApp

ShopApp es un e-commerce simplificado que nos permite aplicar todo lo aprendido: **Supabase Auth**, **Clean Architecture** y **Recursos Nativos**.

## Objetivos del Laboratorio

- Implementar un flujo completo de **Login y Registro**.
- Crear un catálogo de productos consumido desde Supabase.
- Permitir que el usuario suba su **Foto de Perfil** usando la cámara.
- Manejar el estado de la sesión de forma global con **Riverpod**.

## Desafío de Implementación: Supabase Storage

En este proyecto, no solo guardaremos texto en la base de datos, sino que subiremos archivos reales a un **Bucket de Supabase Storage**.

1. **Capturar**: Usar `image_picker` para obtener la foto.
2. **Subir**: Enviar el archivo al bucket "avatars" con un nombre único.
3. **Persistir**: Guardar la URL pública en el perfil del usuario en la base de datos.

::: {.anti-ia-challenge}
**Razonamiento de Infraestructura**: Si miles de usuarios suben fotos simultáneamente, ¿qué estrategia usarías para nombrar los archivos en el bucket y evitar colisiones (sobreescritura accidental)? Explica el uso de UUID o Timestamps.
:::

## Entrega

Tu ShopApp debe ser segura: las rutas de "Perfil" y "Carrito" deben estar protegidas y solo ser accesibles para usuarios autenticados. Documenta los pasos necesarios para configurar Supabase en tu README.
