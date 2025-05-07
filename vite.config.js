import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: "/simple-weather-app", // ← استبدل باسم الريبو بالضبط
	plugins: [react()],
});
