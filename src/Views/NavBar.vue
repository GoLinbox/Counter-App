<template>
    <div class="container">
        <div class="wrap">
            <div class="logo">
                <h1>
                    <router-link to="/">
                        Carts
                    </router-link>
                </h1>
            </div>
          <div class="nav">
            <ul>
                <li><router-link to="/counter">Manage Cart</router-link></li>
            </ul>
          </div>
        </div>
        <div class="animy">
          <p>AltSchool Third Semester Exam👨‍💻</p>
        </div>
    </div>
</template>


<style scoped>
.wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    padding: 0.2% 7%;
    background-color: #050013;
    color: #fff;
}
ul {
    list-style: none;
}
li a{
    text-decoration: none;
    padding: 10px 25px;
    background-color: #fd3668;
    color: #fff;
    transition: 0.5s;
}
li a:hover {
    background-color: #ff0846;
}
.container {
    margin-bottom: 4%;
}
.animy {
    background-image: linear-gradient(to right, #050013, #661429, #050013);
    color: white;
    padding: 7px 0px;
    margin: 0px;
}

@keyframes Animy {
    from{
        padding-right: 50%;
    }
    to{
        padding-left: 50%;
    }
    
}
.animy p {
    margin: 0px;
    font-size: 0.8rem;
    animation-name: Animy;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
    animation-timing-function: cubic-bezier(1, 1, 1, 1);
}
.logo h1 {
    background-image: -webkit-linear-gradient(45deg, #fa84a2, #64bffc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.logo a {
    text-decoration: none;
}
</style>

