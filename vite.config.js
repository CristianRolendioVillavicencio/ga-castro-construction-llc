import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Esto permitirá que el servidor sea accesible en la red local
    port: 5173 // Puedes cambiar el puerto si lo deseas
  }
});
