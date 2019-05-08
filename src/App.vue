<template>
  <div id="app">  
    <div class="container-fluid">
      <div class="" v-bind:class="{ opacity : showSidebar }" @click="showSidebar = !showSidebar"></div>
      <div class="row">
        <div class="col-lg-12">
          <div class="sidebar" v-bind:class="{ showSidebar: showSidebar }">
            <div class="side-content">
              <div class="s-title">Pos-App</div>
              <div class="user">
                <div class="img"></div>
                <div class="name">
                  <b>M. Firmansyah</b> <br>
                  <i>Owner</i>
                </div>
              </div>
              <div class="s-menu">
                <ul>
                  <li @click="showSidebar = !showSidebar">
                    <router-link to="/home"><div :class="{'blue': $route.path=='/home'}"></div><span class="icon"><i class="mi mi-Home"></i></span> Home</router-link>
                  </li>
                  <li @click="showSidebar = !showSidebar">
                    <router-link to="/kasir"><div :class="{'blue': $route.path=='/kasir'}"></div><span class="icon"><i class="mi mi-Calculator"></i></span> Kasir</router-link>
                  </li>
                  <li @click="showSidebar = !showSidebar">
                    <router-link to="/pelanggan"><div :class="{ 'blue': $route.path=='/pelanggan' }"></div><span class="icon"><i class="mi mi-Family"></i></span> Pelanggan</router-link>
                  </li>
                  <li>
                    <router-link to="/"><span class="icon"><i class="mi mi-Tiles"></i></span> Produk</router-link>
                  </li>
                  <li>
                    <router-link to="/"><span class="icon"><i class="mi mi-CalculatorPercentage"></i></span> Diskon</router-link>
                  </li>
                  <li>
                    <router-link to="/"><span class="icon"><i class="mi mi-Contact"></i></span> User</router-link>
                  </li>
                  <li>
                    <router-link to="/"><span class="icon"><i class="mi mi-PowerButton"></i></span> Keluar</router-link>
                  </li>
                  
                </ul>
                <!-- <ul class="sub-menu">
                      <li><router-link to="/"><span class="icon"><i class="mi mi-Tiles"></i></span> Produk</router-link></li>
                      <li><router-link to="/"><span class="icon"><i class="mi mi-Tag"></i></span> Kategori</router-link></li>
                      <li><router-link to="/"><span class="icon"><i class="mi mi-Resolution"></i></span> Satuan</router-link></li>
                </ul> -->
              </div>
            </div>
          </div>
          <div class="main">
            <div class="toogle-menu">
              <i class="mi mi-GridView" @click="showSidebar = !showSidebar"></i>
              
            </div>
            <div class="content">
              <router-view/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <ul>
      <li><router-link to="/">One</router-link></li>
      <li><router-link to="/two">Two</router-link></li>
    </ul>  
    <router-view/> -->
  </div>
</template>

<script>

export default {
data(){
  return {
      showSidebar: false
    }
  },
}
</script>
<style src='./assets/css/grid.min.css'></style>
<style src='./assets/micon_nb/css/micon_nb.min.css'></style>
<style>
*{margin: 0px; padding: 0px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #4C4A48;}
.sidebar {
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: rgb(243, 241, 239);
  width: 23%;
  color: #00080f;
}
.sidebar .side-content{
  padding: 40px;
}
.sidebar .side-content .s-title{
  font-weight: bold;
  font-size: 26px;
}
.sidebar .side-content .user{
  display: inline-flex;
  padding: 12px 0px;
}
.sidebar .side-content .user .img{
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: inline-block;
    background-image: url("./assets/img/user.png");
    background-position: center;
    box-shadow: 0px 2px 8px #8080806b;
    border: 2px solid gray;
    background-size: cover;
}
.sidebar .side-content .user .name{
    padding: 4px 18px;
}
.sidebar .side-content .user .name b{
    font-style: normal;
    font-weight: 400;
}
.sidebar .side-content .user .name i{
    font-style: normal;
    font-weight: lighter;
}

.sidebar .side-content .user-pict{
  border: 1px solid black;
  width: 60px;
  height: 60px;
}
.sidebar .side-content .s-menu{
  margin-top: 30px;
  
}
.sidebar .side-content .s-menu ul{
    list-style: none;
    padding: 0;
}
.sidebar .side-content .s-menu ul li{
    display: grid;
    margin-bottom: 1px;
}
.sidebar .side-content .s-menu ul li:last-child{
    position: absolute;
    left: 40px;
    right: 40px;
    bottom: 48px;
}
.sidebar .side-content .s-menu ul li:last-child a{
    color: #E74856;
}
.blue{
    width: 4px;
    height: 20px;
    background-color: #0078D7;
    position: absolute;
    margin-top: 1px;
    margin-left: -12px;
}
.sidebar .side-content .s-menu ul li .sub-menu{
  padding-left: 30px;
}
.sidebar .side-content .s-menu ul li a{
    text-decoration: none;
    color: black;
    padding: 6px 10px!important;
    border-left: 3px solid rgb(243, 241, 239);
    font-size: 16px;
}
.sidebar .side-content .s-menu ul li a .icon i{
  position: relative;
    top: 1px;
}
.sidebar .side-content .s-menu ul li a .icon i{
  padding-right: 10px;
  font-size: 17px;
}
.sidebar .side-content .s-menu ul li a:hover{
    background-color: rgb(224, 224, 224);
    border-left: 3px solid rgb(224, 224, 224);
}
.main{
  background-color: red;
  position: fixed;
  overflow: auto;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #f9f8f6;
  box-shadow: 0px 2px 8px #8080806b;
  width: 77%;
  border-left: 0.1px solid #d5d5d5;
}
.main .content{
  padding: 100px 50px 0px 50px;
}
.toogle-menu{
  position: fixed;
  padding: 12px 20px 6px;
  width: 100%;
  background-color: #0078D7;
  box-shadow: 0px 2px 8px #8080806b;
  z-index: 99;
  visibility: hidden;
}
.toogle-menu i{
  font-size: 24px;
  color: white;
}
.toogle-menu b{
  font-size: 18px;
  color: white;
  font-weight: 200;
  margin-top: -20px;
}
.toogle-menu i:hover{
  cursor: pointer;
}
@media only screen and (max-width: 992px) {
  .toogle-menu{
    visibility: visible;
  }
  .showSidebar{
    left: 0px !important;
    z-index: 1;
    transition: all 200ms ease-in-out;
    width: 280px;
    box-shadow: 0px 2px 8px #8080806b;
  }
  .opacity{
    z-index: 1;
    background-color: #4c4c4c14;
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    transition: all 200ms ease-in-out;
  }
  .sidebar{
    left: -295px;
    transition: all 200ms ease-in-out;
    z-index: 1;
  }
  .main{
  width: 100%;
  }
  .main .content{
  padding: 100px 15px 0px 15px;
  }
}
</style>
