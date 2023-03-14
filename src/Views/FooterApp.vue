<template>
    <div class="footer">
        <div class="socials">
            <div class="logo">
                <h1>
                    <router-link to="/">Carts</router-link>
                </h1>
            </div>
            <div class="social">
                <a href="https://twitter.com/GoLinbox"><i class="fab fa-twitter"></i></a>
                <a href="https://discordapp.com/users/1011779939349037137"><i class="fab fa-discord"></i></a>
                <a href="mailto: jrmholawale@gmail.com"><i class="fas fa-envelope"></i></a>
            </div>
        </div>
        <div class="copyright">
            <p>Copyright © 2023 Cart LTD. All rights reserved.</p>
        </div>
    </div>
</template>

<script>

export default {
}
</script>

<style scoped>
.footer {
    width: 100%;
    margin-bottom: 0px;
    padding-bottom: 0px;
}
.socials {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    margin: 0% 7%;
    margin-top: 30px;
}
.fab {
    margin-right: 12px;
    color: #ff7b9c;
    cursor: pointer;
    transition: 0.5s;
}
.fas {
    color: #ff7b9c;
    cursor: pointer;
    transition: 0.5s;
}
.fab:hover, .fas:hover {
    color: #fa2b5f;
}
.logo a {
    text-decoration: none;
}
.logo h1 {
    background-image: -webkit-linear-gradient(45deg, #fa84a2, #64bffc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.copyright {
    background-image: linear-gradient(to right, #000102, #0f0004);
    margin-bottom: 0px;
    padding-bottom: 0px;
    padding: 2px 0px;
}
.copyright p {
    font-size: 0.8rem;
}
</style>





