# Laboratorio 2: TokTik (Vertical Video App)

En este laboratorio, crearemos una aplicación inspirada en TikTok para aprender a manejar contenido multimedia, layouts a pantalla completa y gestos táctiles.

## Objetivos del Laboratorio

- Implementar un **Scroll Vertical** infinito.
- Usar el paquete `video_player` para reproducción de video.
- Crear gradientes y superposiciones (overlays) con el widget **Stack**.
- Aplicar animaciones simples para los botones de interacción.

## Desafío de Arquitectura

Para este proyecto, utilizaremos un modelo de datos local (falso backend) para simular la llegada de videos.

1. **Entities**: Definir la entidad `VideoPost`.
2. **Models**: Crear el modelo `VideoPostModel` con métodos `fromJson`.
3. **Mappers**: Separar la lógica de conversión de datos de la lógica de negocio.

::: {.anti-ia-challenge}
**Estrategia de Performance**: Los videos consumen mucha memoria y datos. ¿Cómo implementarías una lógica para que solo el video que está actualmente en pantalla se esté reproduciendo, mientras que los demás estén pausados o precargados?
:::

## Entrega

Asegúrate de que tu aplicación sea fluida y maneje correctamente la carga de videos. Documenta en tu README cómo configuraste los permisos de red para Android e iOS.
