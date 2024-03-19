import { Elysia, t } from "elysia";

export const app = new Elysia({ prefix: '/api' })
  .get('/', () => 'server is active')
  .post('/', ({ body }) => body, {
    body: t.Object({
      name: t.String()
    })
  })

export type App = typeof app;
