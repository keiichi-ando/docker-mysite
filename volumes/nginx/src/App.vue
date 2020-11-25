<template>
  <div id="app">
    <header>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
     </ul>
    </header>
    <router-view/>
  </div>
</template>

<style scoped lang="scss">
#app {
  header{
    background : #777;
    ul{
      margin: 0;
      padding: 0;
      display: flex;
      list-style: none;
        li{
          margin: 10px;
            a{
               color: #fff;
            }
        }
     }
  }
}
</style>