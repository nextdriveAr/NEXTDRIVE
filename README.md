# Next Drive — Sitio web

Proyecto en React + Vite + Tailwind CSS.

## Desarrollo local

npm install
npm run dev

## Build de producción

npm run build

Los archivos finales quedan en la carpeta dist/.

## Estructura

- src/pages/ — las 6 páginas del sitio (Inicio, Vehículos, Ficha del vehículo, Vendé tu auto, Nosotros, Contacto)
- src/data/vehicles.js — datos de ejemplo de los autos. Reemplazar por datos reales.
- src/components/CarImage.jsx — placeholder visual de fotos. Reemplazar por fotos reales de cada auto.
- src/components/Nav.jsx, Footer.jsx, WhatsAppFloat.jsx — número de WhatsApp, Instagram y email de ejemplo, actualizar con los datos reales de Next Drive.

## Pendiente antes de producción

- Reemplazar fotos placeholder por fotos/video reales de cada vehículo.
- Cargar el número real de WhatsApp en Nav, Footer, WhatsAppFloat, VehicleDetail y SellYourCar.
- Conectar los formularios (Vendé tu auto y Contacto) a un servicio real de envío (email, Google Sheets, base de datos, etc.). Hoy solo muestran un mensaje de confirmación en pantalla.
