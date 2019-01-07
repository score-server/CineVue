<template>
  <footer class="footer">
    <div class="container">
      <span class="copyright">© scorewinner.ch 2018 - 2019</span>
    </div>
  </footer>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;

    background-color: #86c232;

    padding-top: 20px;
    padding-bottom: 20px;
    border-top-color: #474b4f !important;
  }

  .footer > .container > .copyright {
    margin-bottom: 0;
    color: white !important;
  }
</style>
