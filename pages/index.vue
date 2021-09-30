<template>
  <div>
    <p>Fetched from API: {{ normal }}</p>
    <p>Fetch from the /error handler: {{ err }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      normal: '',
      err: '',
    }
  },
  async mounted() {
    try {
      const normal = await (await fetch('/api/', { method: 'POST', body: JSON.stringify({ hello: 'world' }) })).json();
      this.normal = normal;
      const notnormal = await (await fetch('/api/error', { method: 'GET' })).json();
      this.err = notnormal.msg;
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
