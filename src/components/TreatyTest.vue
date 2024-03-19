<template>
  <div>
    <Button variant="link" @click="sendRequest">Send Request</Button>
    {{ value }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { Button } from '@/components/ui/button'
import api from '@/lib/api/client'

const value = ref<any>();
async function sendRequest() {
  const res = await api.index.post({ name: "test value" })
  value.value = res.data
}
</script>
