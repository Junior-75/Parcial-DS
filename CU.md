# Casos de Uso - Sistema de Gestión de Incidencias

---

## CU-01: Registrar incidencia

**Actor principal:**  
Ciudadano registrado.

**Precondición:**  
El ciudadano accede al sitio web desde un navegador.

**Objetivo:**  
Notificar una incidencia (bache, alumbrado, basura, seguridad o emergencia ) en la vía pública indicando ubicacion, tipo y descripcion.

**Postcondición:**  
La incidencia queda registrada y se genera un numero de seguimiento.
### Flujo principal

1. El ciudadano selecciona la categoría de incidencia.  
2. Ubica el punto en el mapa.  
3. Añade descripción, imágenes o video.  
4. Confirma el reporte.  
5. El sistema asigna un número de seguimiento único.

---

## CU-02: Consultar estado de incidencia

**Actor principal:**  
Ciudadano que reportó la incidencia

**Precondición:**  
Existe una incidencia registrada con el número de seguimiento del usuario.

**Objetivo:**  
Conocer el estado actual de su reporte (pendiente, en revisión o resuelto).

**Postcondición:**  
El ciudadano visualiza el historial de cambios de estado.

### Flujo principal

1. El ciudadano accede al módulo 'Consultar incidencia'
2. El ciudadano ingresa su número de seguimiento.  
3. El sistema muestra la ficha de la incidencia.  
4. El ciudadano revisa estado.

---

## CU-03: Generar reportes de incidencias

**Actor principal:**  
Administrador del sistema.

**Precondición:**  
Existen incidencias registradas en el sistema.

**Objetivo:**  
Permitir generar reportes estadísticos y gráficos.

**Postcondición:**  
El sistema genera un reporte visualizable y exportable.

### Flujo principal

1. El administrador accede al módulo de reportes.
2. Selecciona generar reporte
3. El sistema procesa la información.
4. Se muestran graficos, tablas y métricas.
5. El administrador exporta el reporte en PDF.