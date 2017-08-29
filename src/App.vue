<template>
  <div id="app">
    <header>
      <span>Pictured Stories</span>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  margin-top: 2em;
}

header {
  /* font-size: 1em; */
  margin: 0;
  height: 56px;
  padding: 0 1.5em;
  background-color: #0bbdbd;
  color: #fff;
}

header span {
  display: block;
  position: relative;
  font-size: 1.5em;
  line-height: 56px;
  letter-spacing: .05em;
  font-weight: 400;
  box-sizing: border-box;
}
</style>
