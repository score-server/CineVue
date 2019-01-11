<template>
  <div class="container wrapper text-center">
    <img class="mb-4" src="https://i.imgur.com/0UYRu82.png" alt="" width="120px" height="120px">
    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
    <form action="" method="post" class="form-signin">
      <div class="form-group">
        <input type="text" name="name" class="form-control" placeholder="name" required>
      </div>
      <div class="form-group ">
        <input type="password" name="password" placeholder="Password" class="form-control" required>
      </div>
      <div class="form-group">
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </div>
    </form>
  </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>
  /* Sign in page */
  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }
  .form-signin .checkbox {
    font-weight: 400;
  }
  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>
