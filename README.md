# Christmas Party — invitación React

Invitación digital hecha con React + Vite. Las respuestas se envían mediante WhatsApp con un mensaje prellenado.

## Requisitos
- Node.js 18 o superior
- npm

## Ejecutar localmente

```bash
npm install
npm run dev
```

Abre la dirección local que indique Vite.

## Personalizar WhatsApp

En `src/main.jsx`, cambia `WHATSAPP_NUMBER` si necesitas otro número. Debe llevar código de país, sin `+`, espacios ni guiones.

## Crear build

```bash
npm run build
```

Vite generará la carpeta `dist`.

## Publicar en Vercel

1. Sube el contenido de esta carpeta a un repositorio de GitHub.
2. Entra a https://vercel.com e importa el repositorio.
3. Vercel detectará Vite automáticamente.
4. Usa estos valores si te los solicita:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
5. Pulsa Deploy.

## Cómo funciona la confirmación

Los botones abren `wa.me` con un mensaje distinto para confirmar asistencia o declinar. La persona invitada debe pulsar **Enviar** en WhatsApp para que recibas la respuesta. No se almacena información en una base de datos.
