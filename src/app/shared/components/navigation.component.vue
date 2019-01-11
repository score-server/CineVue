<template>
    <nav class="navbar navbar-expand-md p-3 px-md-4 mb-3 border-bottom shadow-sm">
      <a class="navbar-brand" href="#/">
        <img src="https://i.imgur.com/0UYRu82.png" class="d-inline-block align-top nav-logo" alt="nav brand">
        MovieScore
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link text-dark" to="/movies">Movies</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-dark" to="/series">Series</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-dark" to="/lists">Lists</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link text-dark dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Administration
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item nav-item" to="/requests">Requests</router-link>
              <router-link class="dropdown-item nav-item" to="/users">Users</router-link>
              <router-link class="dropdown-item nav-item" to="/blog">Blog</router-link>
              <router-link class="dropdown-item nav-item" to="/about">About</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link text-dark dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Admin-Panel
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item nav-item" to="/groups">Groups</router-link>
              <router-link class="dropdown-item nav-item" to="/control">Control Center</router-link>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li><router-link class="nav-link text-dark" to="logout"><i class="fas fa-sign-out-alt"></i> logout</router-link></li>
          <li><router-link class="nav-link text-dark" to="/login"><i class="fas fa-sign-in-alt"></i> Login</router-link></li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'navigation',
}
</script>

<style scoped>
  .navbar {
    color: #ffffff;
    border-bottom-color: #86c232 !important;
  }
  .navbar > .navbar-brand,
  .navbar > .navbar-toggler,
  .navbar > .navbar-collapse > ul > li > a {
    color: #ffffff !important;
  }
  .navbar > .navbar-collapse > ul > li > .dropdown-menu > a:hover {
    background-color: #61892f;
  }

  .navbar > .navbar-collapse > ul > li > .dropdown-menu > a {
    color: white !important;
  }

  .navbar > .navbar-collapse > ul > li > .dropdown-menu > a > i {
    color: #86c232;
  }
  .nav-logo {
    margin-right: 5px;
    width: 30px;
    height: 30px;
  }
  .dropdown-menu {
    background-color: #222629;
    border-color: #86c232;
  }

</style>
