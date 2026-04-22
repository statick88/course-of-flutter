# Flutter Professional Course - ABACOM

Curso completo de Flutter para convertirte en un desarrollador profesional. Desde cero hasta producción, integrando las últimas tendencias del mercado como la **Inteligencia Artificial Móvil**.

## 📚 Contenido del Curso

El curso está estructurado en 15 unidades que cubren todos los aspectos del desarrollo Flutter profesional:

| Unidad | Tema |
|--------|------|
| 1 | Fundamentos Dart (Variables, Funciones, POO) |
| 2 | Instalación y Configuración del Entorno |
| 3 | Flutter: Primeros Pasos |
| 4 | Widgets Básicos y Layouts |
| 5 | Gestión de Estado con Riverpod |
| 6 | Clean Architecture |
| 7 | Consumo de APIs con Dio |
| 8 | Persistencia Local con SQLite/Drift |
| 9 | Firebase Notifications |
| 10 | Supabase Auth |
| 11 | Cámara y Galería |
| 12 | Build y Distribución |
| 13 | Optimización de Rendimiento |
| 14 | Testing y CI/CD |
| **15** | **Inteligencia Artificial Móvil (Embedding)** |

## 🏗️ Arquitectura

Este curso sigue los principios de **Clean Architecture** con separación de capas, incluso para la integración de modelos de IA:

- **DOMAIN**: Lógica de negocio, entidades, casos de uso.
- **APPLICATION**: Providers, state management (Riverpod/BLoC).
- **INFRASTRUCTURE**: APIs, bases de datos, **Motores de IA (TFLite)**.
- **PRESENTATION**: Widgets, UI responsiva.

## 🧪 Proyectos Prácticos (Laboratorios)

1. **YesNo App** - Consumo de API básica.
2. **TokTik** - Videos verticales con swipe.
3. **Widgets App** - Catálogo de widgets.
4. **CinePedia** - Películas con Clean Architecture.
5. **PushApp** - Notificaciones push.
6. **ShopApp** - E-commerce con Supabase.
7. **App Final** - Proyecto integrador.
8. **IA Mobile App** - Inferencia de modelos locales (TFLite) offline.

## 🚀 Tecnologías Aprendidas

- **Flutter** - Framework UI multiplataforma.
- **Riverpod** - State Management moderno.
- **TensorFlow Lite** - Inferencia de IA en el dispositivo.
- **Dio** - Cliente HTTP avanzado.
- **Drift/SQLite** - Persistencia de datos local.
- **Firebase / Supabase** - Backend as a Service (BaaS).
- **Clean Architecture** - Escalabilidad y testing.
- **GitHub Actions** - Automatización de flujos CI/CD.

## 📖 Cómo Usar Este Curso

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/[TU_USUARIO]/course-of-flutter.git
   ```

2. **Instala las dependencias**:
   ```bash
   flutter pub get
   ```

3. **Para generar el contenido del curso** (requiere Quarto):
   ```bash
   quarto render
   ```

4. **Ver el curso publicado**:
   Abre `docs/index.html` en tu navegador.

## 📂 Estructura del Proyecto

```
course-of-flutter/
├── _quarto.yaml          # Configuración de Quarto
├── index.qmd              # Página principal
├── SETUP.qmd              # Guía de configuración
├── unidades/             # 15 unidades del curso
│   ├── unidad1/
│   ├── ...
│   └── unidad15/         # Nueva Unidad de IA Móvil
├── lab-practicos/        # 8 Proyectos prácticos
├── quizzes/               # Evaluaciones y exámenes
└── docs/                  # Sitio web generado
```

## 🔧 Requisitos

- **Dart/Flutter SDK** 3.41+
- **VS Code** con extensiones de Flutter
- **Quarto** (para renderizar el material del curso)

## 📄 Licencia

Este material es para uso educativo de ABACOM.

---

**Instructor**: Diego Medardo Saavedra García  
**Organización**: ABACOM  
**Versión**: 1.1.0 (IA Integrated)
