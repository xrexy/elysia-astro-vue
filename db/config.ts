import { defineDb, defineTable, column } from 'astro:db';

const TodoItem = defineTable({
  columns: {
    label: column.text(),
    completed: column.boolean({
      default: false
    }),
    createdAt: column.date({
      default: new Date()
    })
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { TodoItem }
});
