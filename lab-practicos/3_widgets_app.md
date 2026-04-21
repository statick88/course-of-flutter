# Laboratorio 3: Widgets App

En este laboratorio, construiremos un catálogo interactivo de más de 15 widgets de Flutter. Esta aplicación te servirá como referencia rápida (Cookbook) para tus futuros proyectos.

## Objetivos del Laboratorio

- Dominar la **Navegación** avanzada con `go_router`.
- Implementar **Menús Laterales** (Drawer) y diálogos personalizados.
- Crear animaciones de carga y progreso.
- Aplicar el uso de **Riverpod** para el cambio de tema global (Dark/Light Mode).

## Componentes a Implementar

- **Buttons**: Variaciones de Material 3.
- **Cards**: Diseños personalizados con sombras y bordes.
- **Progress Indicators**: Circulares y lineales con estados controlados.
- **Snackbars & Dialogs**: Notificaciones y alertas al usuario.
- **Infinite Scroll**: Carga de imágenes optimizada.

::: {.anti-ia-challenge}
**Desafío de Optimización**: En la pantalla de Infinite Scroll, las imágenes pueden saturar la memoria. ¿Cómo usarías el widget `Image.network` con un `loadingBuilder` para mejorar la experiencia de usuario mientras la imagen se descarga?
:::

## Entrega

Tu Widgets App debe incluir un menú de configuración donde el usuario pueda elegir entre al menos 5 colores temáticos diferentes y alternar entre modo claro y oscuro.
