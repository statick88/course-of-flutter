# Laboratorio 8: IA Móvil - Embebción de Modelos de IA

## 🎯 Objetivo del Laboratorio

Integrar un modelo de inteligencia artificial en una aplicación Flutter para demostrar capacidades de procesamiento offline.

## 📝 Descripción

En este laboratorio práctico, construirás una aplicación móvil que utilice modelos de IA para:
- Procesamiento de imágenes con detección de objetos
- Análisis de texto con procesamiento de lenguaje natural
- Reconocimiento de patrones usando IA local

## 🛠️ Requisitos del Laboratorio

### Tecnologías Necesarias
- Flutter SDK configurado
- Android Studio o VS Code con extensiones de Flutter
- Conocimientos básicos de TensorFlow Lite o PyTorch Mobile
- Modelo preentrenado (disponible para descarga)

### Dependencias Requeridas
```yaml
dependencies:
  tflite_flutter: ^0.11.0
  image_picker: ^0.8.7+3
  path_provider: ^2.0.15
  http: ^0.13.5
```

## 📚 Instrucciones del Laboratorio

### Paso 1: Configuración del Proyecto (15 minutos)
1. Crear un nuevo proyecto Flutter
2. Agregar dependencias necesarias en pubspec.yaml
3. Configurar permisos para cámara y almacenamiento
4. Preparar estructura de carpetas para IA

### Paso 2: Integración del Modelo TFLite (30 minutos)
1. Descargar un modelo TFLite (ej: MobileNet para clasificación) desde [TensorFlow Hub](https://tfhub.dev/).
2. Agregar el modelo al directorio `assets/models/`.
3. Configurar el intérprete de TensorFlow Lite.
4. **Crítico**: Implementar la lógica de pre-procesamiento (normalización). Los modelos TFLite suelen esperar tensores de 0.0 a 1.0 o -1.0 a 1.0.

```dart
class IALocalService {
  late Interpreter _interpreter;
  
  Future<void> inicializar() async {
    // Carga el modelo desde los assets
    _interpreter = await Interpreter.fromAsset('assets/models/mobilenet.tflite');
  }
  
  Future<List<double>> procesarImagen(Uint8List rawBytes) async {
    // 1. Decodificar la imagen a una matriz numérica
    // 2. Redimensionar a 224x224 (según el modelo)
    // 3. NORMALIZAR: Convertir de 0-255 (int) a 0.0-1.0 (float)
    // 4. Inyectar en el interpreter.run(input, output)
    
    var input = _normalizarImagen(rawBytes); 
    var output = List<double>.filled(1001, 0).reshape([1, 1001]);
    
    _interpreter.run(input, output);
    return output[0];
  }
}
```

### Paso 3: Construcción de la Interfaz (25 minutos)
1. Crear pantalla principal con botón para cámara/galería
2. Implementar vista previa de imágenes
3. Mostrar resultados de inferencia en tiempo real
4. Agregar indicador de carga y estado

### Paso 4: Optimización (20 minutos)
1. Implementar cuantificación del modelo
2. Probar rendimiento en diferentes dispositivos
3. Añadir manejo de memoria eficiente
4. Configurar opciones de hardware (GPU/NNAPI)

### Paso 5: Testing y Validación (10 minutos)
1. Probar con imágenes de muestra
2. Verificar tiempos de respuesta
3. Asegurar resultados precisos
4. Documentar límites del modelo

## 🎨 Requisitos de Calidad

### Funcionalidad
- [ ] La aplicación puede cargar imágenes desde cámara o galería
- [ ] El modelo de IA se ejecuta completamente offline
- [ ] Los resultados de inferencia se muestran claramente
- [ ] La aplicación maneja errores de inferencia

### Rendimiento
- [ ] Tiempo de inferencia < 2 segundos en dispositivos estándar
- [ ] Uso de CPU/GPU eficiente
- [ ] Sin bloqueos de la UI durante inferencia
- [ ] Memoria utilizada < 100MB

### Calidad del Código
- [ ] Uso de Clean Architecture (capa domain, data, presentation)
- [ ] Tests unitarios para servicios de IA
- [ ] Documentación clara del código
- [ ] Manejo adecuado de estados (loading, error, success)

## 🧪 Casos de Prueba

### Caso 1: Clasificación de Imágenes
**Entrada:** Imagen de un perro
**Salida esperada:** "golden retriever" con confianza > 80%

### Caso 2: Objeto no reconocido
**Entrada:** Imagen abstracta
**Salida esperada:** Mensaje de "objeto no reconocido"

### Caso 3: Rendimiento bajo carga
**Entrada:** 10 imágenes consecutivas
**Salida esperada:** Tiempos consistentes sin degradación significativa

## 🛠️ Pistas y Soluciones

### Si el modelo no se carga:
- Verificar ruta del archivo en assets
- Asegurar que el modelo esté en formato TFLite
- Comprobar dependencias en pubspec.yaml

### Si la inferencia es lenta:
- Usar modelo más pequeño (MobileNet en vez de ResNet)
- Implementar cuantificación (float32 → uint8)
- Usar delegado GPU si está disponible

### Si hay problemas de memoria:
- Liberar recursos después de cada inferencia
- Usar pooling de imágenes
- Limitar tamaño de entrada

## 📊 Métricas a Medir

1. **Tiempo de inferencia**: Promedio en milisegundos
2. **Precisión**: Porcentaje de aciertos en test set
3. **Uso de memoria**: MB consumidos por el modelo
4. **Tamaño del modelo**: MB del archivo TFLite
5. **Tiempo de carga**: Segundos para inicializar el modelo

## 🎯 Desafíos Anti-IA

### Desafío 1: Sin Documentación
**Problema:** El modelo funciona pero no puedes explicar cómo
**Solución:** Documentar el pipeline completo y los requisitos

### Desafío 2: Optimización Extrema
**Problema:** El modelo original es demasiado grande
**Solución:** Aplicar técnicas de cuantificación y poda

### Desafío 3: Múltiples Formatos
**Problema:** Soportar diferentes tipos de modelos
**Solución:** Crear abstracción de proveedor de IA

## 🔗 Recursos Útiles

- **Modelos TFLite**: https://tfhub.dev/tensorflow/lite-models
- **Documentación TFLite Flutter**: https://pub.dev/packages/tflite_flutter
- **Ejemplos de código**: GitHub - tensorflow/examples
- **Conversión de modelos**: TensorFlow Lite Converter

## 📝 Entrega

### Requisitos Finales
1. Proyecto Flutter funcional con IA integrada
2. Documentación del proceso de integración
3. Métricas de rendimiento reportadas
4. Video demostrativo de la aplicación
5. Código fuente con buenas prácticas

### Criterios de Éxito
- ✅ Modelo integrado y funcionando offline
- ✅ Interfaz de usuario intuitiva
- ✅ Rendimiento aceptable en dispositivo móvil
- ✅ Código limpio y bien estructurado
- ✅ Documentación completa

---

**Nota:** Este laboratorio está diseñado para complementar el Módulo 8 del curso principal y demuestra la capacidad de integrar tecnologías emergentes como la IA en aplicaciones móviles profesionales.
