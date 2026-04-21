# Laboratorio 5: PushApp

En este laboratorio práctico, construiremos una aplicación de mensajería básica que recibe y muestra notificaciones push utilizando Firebase.

## Objetivos del Laboratorio

- Configurar un proyecto de **Firebase** desde cero para Flutter.
- Implementar la recepción de notificaciones en primer plano y en segundo plano.
- Mostrar las notificaciones recibidas en una lista persistida con **Drift**.
- Manejar los **Permisos de Notificación** de manera profesional.

## Estructura del Proyecto

1. **Firebase Init**: Inicializar Firebase en el `main.dart`.
2. **Notification Provider**: Un provider global (Riverpod) para manejar el historial de notificaciones.
3. **Local DB**: Guardar las notificaciones para que no se pierdan al cerrar la app.
4. **UI**: Una pantalla simple con el historial de alertas recibidas.

::: {.anti-ia-challenge}
**Razonamiento Crítico**: Si el usuario desactiva las notificaciones desde los ajustes del sistema, ¿cómo detectarías esto en tu aplicación de Flutter para mostrar un aviso pidiéndole que las reactive? No busques el código, explica el flujo lógico.
:::

## Entrega

Asegúrate de probar tu aplicación enviando mensajes de prueba desde la consola de Firebase. Incluye en tu README el token del dispositivo de prueba que usaste.
