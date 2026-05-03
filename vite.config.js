import { defineConfig } from 'vite';

export default defineConfig({
  preview: {
    allowedHosts: true, // Allow all hosts or specify yours
    host: '0.0.0.0',
    port: parseInt(process.env.PORT) || 4173
  }
});
