<template>
  <div id="app">
    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">Singapore Best Food ever!</h1>
        <p class="lead text-muted">All the food you need to try out when in Singapore...</p>
      </div>
    </section>

    <div class="album py-5 bg-light">
      <div class="container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>