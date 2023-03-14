<template>
  <NavBar/>
  <div class="home">
    <div class="txt">
      <h1>AltSchool's Third-Semester Exam: Creating a Counter with every Basic Functionality</h1>
      <p>Involves creating a counter with the ability to perform the counter basic functions. <span>The counter functionality is housed in the Manage Cart.</span></p>
      <router-link to="/counter">Manage Cart</router-link>
    </div>
  </div>
  <FooterApp/>
</template>

<style scoped>
.home {
  text-align: center;
  margin: 10% 5%;
}
.txt {
  margin: 0px auto;
  text-align: center;
  max-width: 700px;
}
.txt h1 {
    background-image: -webkit-linear-gradient(45deg, #fa84a2, #64bffc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
span {
  color: #fa84a2;
  font-weight: 400;
}
.txt p {
  line-height: 20px;
  font-size: 0.8rem;
  color: #c5c5c5;
  max-width: 500px;
  margin: 0px auto;
  margin-bottom: 30px;
}
.txt a {
  text-decoration: none;
  padding: 10px 25px;
  background-color: #fd3668;
  color: #fff;
  transition: 0.5s;
}
.txt a:hover {
  background-color: #ff0846;
}
</style>

<script>
import NavBar from './NavBar.vue';
import FooterApp from './FooterApp.vue';

 export default {
  components: {
    NavBar,
    FooterApp
  }
 }
</script>