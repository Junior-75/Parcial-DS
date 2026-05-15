# Especificación de Requisitos de Software
## Sistema de Registro de Incidencias en Vía Pública

---

# 1. Introducción

## 1.1 Propósito
Este documento define los requisitos funcionales y la arquitectura del sistema web para el registro, seguimiento y generación de reportes de incidencias en la vía pública.

## 1.2 Alcance
El sistema permitirá a ciudadanos registrar incidencias y consultar su estado mediante una plataforma web. Además, los administradores podrán generar reportes estadísticos.

## 1.3 Definiciones

| Término | Definición |
|---|---|
| Incidencia | Problema detectado en la vía pública que requiere atención municipal |
| Administrador | Usuario con acceso a estadísticas y reportes globales |
| Dashboard | Panel visual con indicadores y métricas |

---

# 2. Requisitos Funcionales

Los requisitos funcionales se derivan de los casos de uso definidos.

---

## RF-01 — Registro de incidencia (CU-01)

- **RF-01.1** El sistema debe permitir seleccionar la categoría de incidencia: bache, alumbrado, basura, seguridad ciudadana o emergencia.
- **RF-01.2** El sistema debe permitir ubicar la incidencia mediante mapa interactivo.
- **RF-01.3** El sistema debe aceptar una descripción de texto de la incidencia.
- **RF-01.4** El sistema debe permitir adjuntar imágenes(JPEG) y video(MP4).
- **RF-01.5** El sistema debe generar automáticamente un número de seguimiento único.
- **RF-01.6** El sistema debe registrar la incidencia con estado inicial 'Pendiente'.

---

## RF-02 — Consulta de estado de incidencia (CU-02)

- **RF-02.1** El sistema debe permitir consultar una incidencia ingresando el número de seguimiento.
- **RF-02.2** El sistema debe mostrar el estado actual de la incidencia.
- **RF-02.3** El sistema debe mostrar fecha de registro y última actualización.
- **RF-02.4** El sistema debe mostrar el historial de cambios de estado.
- **RF-02.5** El sistema debe mostrar observaciones o comentarios sobre la incidencia.
- **RF-02.6** El sistema debe permitir visualizar imágenes o videos adjuntos al reporte.

---

## RF-03 — Generación de reportes (CU-03)

- **RF-03.1** El administrador debe poder generar reportes ya sea por fecha, categoría, estado o zona.
- **RF-03.2** El sistema debe mostrar estadísticas generales de incidencias.
- **RF-03.3** El sistema debe mostrar gráficos estadisticos por categoría y estado.
- **RF-03.4** El sistema debe permitir exportar reportes en formato PDF.
- **RF-03.5** El sistema debe identificar las zonas con mayor cantidad de incidencias.

---

# 3. Arquitectura del Sistema

## 3.1 Estilo arquitectónico

El sistema utilizará una arquitectura de tres capas: presentación, negocio y datos.

```text
┌─────────────────────────────────────────────┐
│          CAPA DE PRESENTACIÓN               │
│        Navegador Web                        │
│      React + TypeScript + Vite              │
└──────────────────┬──────────────────────────┘
                   │ HTTPS / REST API
┌──────────────────▼──────────────────────────┐
│             CAPA DE NEGOCIO                 │
│            Fastify (Node.js)                │
│                                             │
│  ┌──────────────┐  ┌────────────────────┐   │
│  │ Módulo       │  │ Módulo Reportes    │   │
│  │ Ciudadano    │  │ y Dashboard        │   │
│  └──────────────┘  └────────────────────┘   │
│                                             │
│  ┌──────────────────────────────────────┐   │
│  │ Servicio de Localización             │   │
│  │ Servicio de Exportación PDF          │   │
│  └──────────────────────────────────────┘   │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│               CAPA DE DATOS                 │
│               PostgreSQL                    │
└─────────────────────────────────────────────┘
```

### 3.2 Componentes principales

#### Frontend (Capa de presentación)
- **Framework:** React con TypeScript.
- **Bundler:** Vite.
- **Mapa interactivo:** Leaflet.js con OpenStreetMap.
- **Estilos:** Tailwind CSS para diseño responsivo.
- **Comunicación:** Axios para consumo de la API REST.

#### Backend (Capa de negocio)
- **Runtime:** Node.js.
- **Framework:** Fastify.
- **Arquitectura:** API RESTful.
- **Validación:** Zod o Joi para validación de datos.

#### Base de datos (Capa de datos)
- **SGBD:** PostgreSQL.

### 3.3 Modelo de datos

```
USUARIO
  id, nombre, email,
  password, rol

INCIDENCIA
  id, codigo_seguimiento,
  categoria,
  descripcion,
  ubicacion,
  estado,
  fecha_registro

ARCHIVO
  id,
  id_incidencia,
  url_archivo,
  tipo

REPORTE
  id,
  fecha_generacion,
  tipo_reporte
```

### 3.4 API RESTful — Endpoints principales

| Método | Endpoint | Descripción | Rol requerido |
|---|---|---|---|
| POST | `/api/incidencias` | Registrar incidencia | Público |
| GET | `/api/incidencias/:codigo` | Consultar incidencia | Público |
| GET | `/api/reportes/resumen` | Dashboard de estadísticas | Administrador |
| GET | `/api/reportes/exportar` | Exportar reporte PDF | Administrador |
| POST | `/api/auth/login` | Iniciar sesión | Público |

---

## 4. Restricciones del sistema

- El sistema debe funcionar en los navegadores Chrome 110+, Firefox 110+, Safari 15+ y Edge 110+.
- Los datos no deben salir del territorio nacional en cumplimiento con la normativa de protección de datos.

---

## 5. Trazabilidad: Casos de Uso → Requisitos

| Caso de uso | Requisitos funcionales asociados |
|---|---|
| CU-01 Registrar incidencia | RF-01.1 a RF-01.6 |
| CU-02 Consultar estado | RF-02.1 a RF-02.6 |
| CU-03 Generar reportes | RF-03.1 a RF-03.5 |