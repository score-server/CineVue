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

<style src="./app/assets/css/style.css"></style>
