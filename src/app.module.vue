<template>
  <div id="app">
    <Navigation></Navigation>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
  import Navigation from './app/shared/components/navigation.component'
  import Foot from './app/shared/components/footer.component'
export default {
  name: 'App',
  components: {
    Navigation,
    Foot,
  }
}
</script>

<style>
  html {
    min-height: 100%;
    position: relative;
  }

  body {
    background-color: #222629;

  }
  hr {
    background-color: #86c232 !important;
  }

  a {
    color: #86c232 !important;
  }

  i {
    color: #d8dae0;
  }

  span {
    color: #d8dae0 !important;
  }

  /* color & background color for cards & content */
  .container {
    color: #ffffff;
  }
  .container .card {
    color: #acb1b4;
    background-color: #474b4f;
    border: none;
  }

  /* Button Styling */
  .btn-primary {
    background-color: #86c232;
    border-color: #86c232;
  }

  .btn-primary:hover,
  .btn-primary:active,
  .btn-primary:focus {
    background-color: #61892f;
    border-color: #61892f;

  }

  .alert-primary {
    background-color: #86c232;
    border-color: #61892f;
    color: white;
  }

  .list-group-flush {
    color: black;
  }

</style>
