import { defineConfig } from 'vite';

export default defineConfig({
  // ... Otras configuraciones

  // Configuración para cargar variables de entorno
  define: {
    'process.env': process.env,
  },
});