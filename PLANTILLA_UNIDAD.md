# PLANTILLA: Unidad Mejorada (Statick Method)

Esta plantilla sigue la metodología Statick con profundidad técnica usando features Quarto. 

## Estructura Obligatoria

```markdown
# Título del Tema: Descripción Breve

[Introducción impactante - 1-2 oraciones máximo]

::: {.callout-tip}
## Por qué este capítulo es CRÍTICO

Explica la importancia del tema y referiencia a otras unidades.
:::

## Sección Principal

### Contenido conceptual (analogía, explicación)

::: {.panel-tabset}
## Código Básico

```dart
// Ejemplo mínimo funcional
```

## Código Avanzado

```dart
// Ejemplo con casos edge
```

## Error Común

```dart
// ❌ NO HACER ESTO
```

:::

### Segunda Subsección

[Explicación + ejemplos]

## Cross-References entre Temas

| Este concepto | Se conecta con | Por qué |
|--------------|--------------|---------|
| Topic A | [Unidad X] | razón práctica |

## Preguntas de Comprensión

::: {.callout-question collapse="true"}
## ⭐ Pregunta 1

[Pregunta de comprensión básica]

**Pistas**: [opcional]

**Respuesta**: [explicación]
:::

## DESAFÍO DE INGENIERÍA (Anti-IA)

::: {.anti-ia-challenge}
**CASO REAL**: [escenario real-world]

Tu misión: [tarea específica]

**Premio**: [recompensa si aplica]
:::

## Ejercicios BONUS

::: {.callout-important collapse="true"}
### Ejercicio N: Título

[enunciado del ejercicio]

**Pistas**: 
1. pista 1
2. pista 2
:::
```

## Features Quarto Usados

| Feature | Para qué sirve | Ejemplo |
|---------|---------------|---------|
| `::: {.panel-tabset}` | Múltiples vistas del mismo contenido | Código básico/avanzado |
| `::: {.callout-tip}` | Tips importantes | "Por qué es crítico" |
| `::: {.callout-warning}` | Errores comunes | "No hagas esto" |
| `::: {.callout-question}` | Preguntas comprensión | Preguntas con respuesta |
| `::: {.anti-ia-challenge}` | Desafío Statick | Ejercicio Anti-IA |
| `::: {.callout-important}` | Ejercicios bonus | Tareas adicionales |
| `{#sec-nombre}` | Cross-reference label | Para referenciar secciones |
| `@sec-nombre` | Referencia cruzada | Link a otras secciones |
| `[^1]` + footnotes | Deep reading | Recursos externos |

## Ejemplo Real

Ver: `unidades/unidad6/1_clean_architecture.qmd` - Esta unidad ya usa TODOS los features.

## Cómo usar esta plantilla

1. Copia esta estructura a tu nuevo archivo `.qmd`
2. Llena cada sección siguiendo el ejemplo de Clean Architecture
3. Añade 2-3 tabsets mínimo por unidad
4. Incluye cross-references a unidades relacionadas
5. Al menos 1 anti-ia-challenge + 1 ejercicio bonus
6. Una footnote de deep-reading por sección

## Tips de Profundidad

- **Mínimo 80-100 líneas** por archivo .qmd
- **2-3 ejemplos de código** por concepto
- **Analogía por sección** (Statick method)
- **Error común + Solución** en cada panel-tabset
- **Cross-references** a 2+ unidades relacionadas
