# Laboratorio 1: YesNo App

En este primer laboratorio práctico, construiremos una aplicación de chat simple pero funcional que utiliza una API externa para responder "Sí" o "No" a nuestras preguntas.

## Objetivos del Laboratorio

- Aplicar el uso de **Material 3**.
- Gestionar el estado con **Provider** (introducción).
- Consumir una API REST básica (`yesno.wtf/api`).
- Crear interfaces con **ListView** y **Chat Bubbles**.

## Estructura del Proyecto

1. **Modelos**: Definir cómo luce la respuesta de la API.
2. **Provider**: Manejar el historial de mensajes y la petición a la API.
3. **Screens**: Pantalla principal del chat.
4. **Widgets**: Burbujas de chat personalizadas.

## Desafío Anti-IA

::: {.anti-ia-challenge}
**Razonamiento Crítico**: En este proyecto usamos `http` para las peticiones. Si la API tarda 5 segundos en responder, ¿cómo mostrarías un indicador de "escribiendo..." en la interfaz? No busques el código, describe el flujo de estado necesario.
:::

## Entrega

Sube tu código a un repositorio de GitHub y comparte el enlace en la plataforma de Abacom. Asegúrate de incluir un `README.md` con capturas de pantalla de tu aplicación.
