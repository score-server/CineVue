<template>
  <div class="container wrapper text-center">
    <img class="mb-4" src="https://i.imgur.com/0UYRu82.png" alt="" width="120px" height="120px">
    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
    <form action="" method="post" class="form-signin">
      <div class="form-group">
        <input type="text" name="username" class="form-control" placeholder="username" v-model="input.username" required>
      </div>
      <div class="form-group ">
        <input type="password" name="password" placeholder="Password" class="form-control" v-model="input.username" required>
      </div>
      <div class="form-group">
        <button class="btn btn-lg btn-primary btn-block" v-on:click="login()" type="submit">Sign in</button>
      </div>
    </form>
  </div>
</template>

<script src="./login.controller.js"></script>
<style src="../assets/css/login.style.css"></style>
