<template>
    <div class="NotFound">
      <h1>This page does not exist (404)</h1>
      <p>Back to <router-link to="/">Home</router-link></p>
    </div>
</template>

<style scoped>
.NotFound {
   margin-top: 20%;
}
.NotFound h1 {
     background-image: -webkit-linear-gradient(45deg, #fa84a2, #64bffc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
p {
  font-size: 1.3rem;
}
a {
  text-decoration: none;
  color: #ff7b9c;
  transition: 0.5s;
}
a:hover {
  color: #fd3668;
}
</style>