# Laboratorio 4: Cinemapedia

Cinemapedia es el proyecto central de este curso. Es una aplicación de películas completa que utiliza **TheMovieDB API** y aplica todos los conceptos de **Clean Architecture** y **Riverpod** aprendidos hasta ahora.

## Objetivos del Laboratorio

- Implementar una estructura de carpetas basada en **Features**.
- Usar **Riverpod** para manejar el estado de las películas (ahora en cine, populares, etc.).
- Implementar un **Custom ScrollView** con Sliders y Grids.
- Manejar la **Carga Infinita** de datos (Pagination).
- Implementar una pantalla de detalles con animaciones de transición.

## Desafío de Implementación

En este laboratorio, no solo mostraremos datos, sino que implementaremos un **Repository Pattern** para que la capa de presentación nunca sepa si los datos vienen de una API o de una base de datos local.

::: {.anti-ia-challenge}
**Optimización de UI**: Al hacer scroll infinito, ¿cómo evitarías realizar múltiples peticiones a la API para la misma página si el usuario hace scroll muy rápido? (Pista: investiga el concepto de `isLoading` flag en tu Provider).
:::

## Requisitos Técnicos

- Uso obligatorio de **Dio** para peticiones.
- Implementación de **Mappers** para convertir las respuestas de la API.
- Navegación con **GoRouter**.
- Tema personalizado siguiendo el branding del curso.
