<template>
  <NavBar/>
  <div class="wrap">
    
    <div class="show">
     <img src="https://media.istockphoto.com/id/900482712/photo/female-legs-in-the-rain.jpg?s=612x612&w=0&k=20&c=b3GNq_olyA1xsJeC8T3g4ND4Ao4jJpaVbQFdsg-Sw-s=" alt="" width="100%">
    </div>
   <div class="count">
    <div class="summary">
      <h1>Cart Summary</h1>
      <img src="https://cdn-icons-png.flaticon.com/512/3343/3343850.png" alt="">
    </div>

    <div class="AddRes">
      <div class="DecInc">
      <div class="but">
        <button @click="increment">Add Cart</button>
        <button @click="decrement">Remove Cart</button>
      </div>
      
      </div>
    </div>
    
    
    <div class="input">
      <p>Add your preffered quantity...</p>
      <input id="Input" type="number" v-model="value" placeholder="Enter Quantity"/>
      <button @click="setValue(value)">OK!</button>
    </div>
    
    <div class="total">
      <div>
        <h1> Total: {{ count }}</h1>
      </div>
      <div class="restore">
      <button @click="reset">Restore</button>
      </div>
    </div>
    
   </div>
  </div>
 <FooterApp/>
</template>



<script>
import useCounter from '@/components/Counter.js';
import NavBar from './NavBar.vue';
import FooterApp from './FooterApp.vue';

export default {
  setup() {
    const { count, increment, decrement, reset, setValue } = useCounter()

    let value = ""

    return {
      count,
      increment,
      decrement,
      reset,
      value,
      setValue,
    }
  },
  components : {
    NavBar,
    FooterApp
  }
}

</script>

<style scoped>
input {
  border: none;
  padding: 10px 20px;
  margin: 6px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
h1 {
  font-weight: 300;
  font-size: 1.2rem;
}
button {
  border: none;
  background-color: #562130;
  color: #f1f1f1;
  padding: 10px 25px;
  cursor: pointer;
  border-radius: 10px;
  transition: .5s;
}

button:hover {
  background-color: #661429;
}
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
  margin: 0px auto;
}

.show {
  margin-right: 40px;
}
.show img {
  opacity: .4;
  border-radius: 15px;
  max-width: 600px;
  width: 100%;
}
.count {
  border-left: 1px dashed #353539;
  padding: 30px 2px;
  padding-left: 26px;
  max-width: 400px;
  width: 100%;
}
span img {
  width: 10%;
}
.but button {
  margin: 7px;
  width: 100%;
  padding: 10px 8px;
}

.input {
  margin-top: 30px;
}
.input p {
  color: #777;
  font-size: 0.7rem;
  padding-bottom: 2px;
  margin-bottom: 3px;
}
.summary {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  border-bottom: 1px solid #ff9eb694;
}
.summary img {
  width: 10%;
  margin-left: 10px;
}
.total {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  padding-top: 6px;
  border-top: 1px solid #ff9eb694;
}

/* Media Query CSS */
@media only screen and (max-width: 600px) {
  .wrap {
    flex-direction: column;
    max-width: 350px;
    width: 100%;
  }

  .show {
    margin-right: 0px;
  }
  .count {
    border-left: none;
  }
}
</style>
