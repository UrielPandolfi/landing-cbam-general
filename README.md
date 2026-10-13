# Landing general · Coldwell Banker Franquicias

Versión final del sitio con dos recorridos: emprendedores y propietarios de agencias que evalúan convertirse a Coldwell Banker.

## Funcionalidad

- Primera pregunta: «¿Ya tienes tu propia agencia inmobiliaria?».
- Emprendedores: preguntas progresivas, tarjeta de proyecto y beneficios; el CTA revela el formulario de contacto.
- Agencias: cuatro escenas de la calculadora original, gráfica comparativa y PDF de una hoja con logotipo.
- Formulario con campos y opciones originales de Zoho; envío nativo al formulario oficial.
- Fotografías locales, paleta oficial y tipografía Roboto alojada localmente, con su licencia OFL.

## Instalar y ejecutar

Requiere Node.js >= 22.13 y pnpm 11.25.0.

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

```bash
pnpm build
```

El proyecto utiliza React, TypeScript y Vinext con salida para Cloudflare Workers. No es un sitio HTML estático ni un proyecto listo para GitHub Pages.

## Archivos principales

- `app/page.tsx`: escenas, selección del recorrido, calculadora y contacto.
- `app/globals.css`: estilos, paleta y tipografías.
- `lib/calculator.ts` y `lib/parameters.json`: lógica original de conversión.
- `components/growth-display.tsx`: cifras animadas y gráfica.
- `app/api/report/route.ts` y `lib/report-pdf.ts`: PDF descargable.
- `public/`: fotografías, logos, favicon y fuentes.

## Integración y despliegue

La acción del formulario y la redirección de agradecimiento apuntan a Zoho y Coldwell Banker México. El envío no reserva automáticamente una cita. Antes de usar otro dominio, revisa esos destinos y el enlace de regreso incluido en `lib/report-pdf.ts`.

`.openai/hosting.json` conserva la identidad del proyecto original de Sites. Si despliegas este código como un proyecto nuevo, utiliza la identidad y configuración de tu propio proyecto. No incluye credenciales ni datos de prospectos.

Código exportado de la versión aprobada: `81706f3b4d0b7ee4d5eacc42099e6ca6721ad022`.
