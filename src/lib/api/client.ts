import { treaty } from "@elysiajs/eden";
import type { App } from ".";

const { api } = treaty<App>('http://localhost:4321')

export default api
