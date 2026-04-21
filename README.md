# Flutter Professional Course - ABACOM

 curso completo de Flutter para convertirte en un desarrollador profesional. Desde cero hasta producción.

## 📚 Contenido del Curso

El curso está estructurado en 14 unidades que cubren todos los aspectos del desarrollo Flutter profesional:

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

## 🏗️ Arquitectura

Este curso sigue los principios de **Clean Architecture** con separación de capas:

- **DOMAIN**: Lógica de negocio, entidades, casos de uso
- **APPLICATION**: Providers, state management
- **INFRASTRUCTURE**: APIs, bases de datos, servicios externos
- **PRESENTATION**: Widgets, UI

## 🧪 Proyectos Prácticos

1. **YesNo App** - Consumo de API básica
2. **TokTik** - Videos verticales con swipe
3. **Widgets App** - Catálogo de widgets
4. **CinePedia** - Películas con Clean Architecture
5. **PushApp** - Notificaciones push
6. **ShopApp** - E-commerce con Supabase
7. **App Final** - Proyecto integrador

## 🚀 Tecnologías Aprendidas

- **Flutter** - Framework UI
- **Riverpod** - State Management
- **Dio** - HTTP Client
- **Drift/SQLite** - Base de datos local
- **Firebase** - Notificaciones push
- **Supabase** - Auth y Backend
- **Clean Architecture** - Patrón de arquitectura
- **GitHub Actions** - CI/CD

## 📖 Cómo Usar Este Curso

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/[TU_USUARIO]/course-of-flutter.git
   ```

2. **Instala las dependencias** (si hay código Flutter):
   ```bash
   flutter pub get
   ```

3. **Para desarrollar el curso** (requiere Quarto):
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
├── about.qmd              # Información del curso
├── glosario.qmd           # Glosario de términos
├── SETUP.qmd              # Guía de configuración
├── unidades/             # 14 unidades del curso
│   ├── unidad1/
│   ├── unidad2/
│   └── ...
├── lab-practicos/        # Proyectos prácticos
├── quizzes/               # Evaluaciones
└── docs/                  # Output generado (publicado)
```

## 🔧 Requisitos

- **Dart/Flutter SDK** 3.41+
- **VS Code** con extensiones de Flutter
- **Quarto** (para desarrollo del curso)

## 📄 Licencia

Este material es para uso educativo de ABACOM.

---

**Instructor**: Diego Medardo Saavedra García  
**Organización**: ABACOM  
**Versión**: 1.0.0
