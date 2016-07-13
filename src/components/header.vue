<template>
  <header id="header">
    <h1 class="logo">
      <a href="/">
        <img src="/src/assets/logo.png" alt="logo">
      </a>
    </h1>
    <button class="topbar-toggle" @click="showAside = !showAside">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
  </header>
</template>

<style>
  header {
    height: 48px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #017cca;
  }

  .logo {
    margin-top: 8px;
    margin-left: 32px;
  }

  h1 {
    margin: 0;
    display: inline-block;
  }

  .topbar-toggle {
    position: absolute;
    top: 10px;
    right: 15px;
    padding: 9px 10px;
    background: transparent;
    border: none;
  }

  .icon-bar {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
    background-color: #fff;
  }

  .icon-bar + .icon-bar {
    margin-top: 4px;
  }
</style>

<script>
  export default {
    props: ['showAside']
  };
</script>