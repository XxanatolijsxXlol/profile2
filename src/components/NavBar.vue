<template>
  <nav class="navbar">
    <div class="nav-items">
      <ul>
        <li>
          <RouterLink to="/" class="nav-link">Profile</RouterLink>
        </li>
        <li>
          <RouterLink to="/Friends" class="nav-link">Friends</RouterLink>
        </li>
        <li>
          <RouterLink to="/Messages" class="nav-link">Messages</RouterLink>
        </li>
        <li>
          <RouterLink to="/Notification" class="nav-link">Notifications</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
body {
    padding: 0px;
    margin: 0px;
}

.navbar {
  left: 0;
  top: 0;
  width: 100%;
  position: absolute;
  display: flex;
  padding: 10px;
  background-color: #3c083c;
 
  align-items: center;
  box-shadow: 7px 5px 15px -4px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 7px 5px 15px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 7px 5px 15px -4px rgba(0, 0, 0, 0.75);
}

.nav-items > ul > li {
    position: relative;
    display: inline;
    list-style: none;
    margin: 10px;
    padding: 10px 20px;
    cursor: pointer;
}

.nav-items > ul > li > .nav-link {
   
    text-decoration: none;
}

.nav-items > ul > li::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.17rem;
    background-color: #ffffff;
    left: 0;
    bottom: 0;
    transform-origin: 0% 100%;
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.nav-items > ul > li:hover::after {
    transform: scaleX(1);
}

.nav-button .nav-link {
    display: block;
    padding: 10px 20px;
    color: white;
    text-decoration: none;
    position: relative;
    z-index: 1;
}
</style>
