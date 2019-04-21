<template>
  <div>
      <div class="head">Statistik Toko</div>
      <div class="container component">
        <div class="row">
          <div class="col-lg-6">
            <div class="padd">
              <div class="card">
                ad
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="padd">
              <div class="card">
                ad
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  }
}
</script>


<style scoped>
.head{
  font-size: 22px;
}
.component{
  padding: 10px 0px;
}
.component .padd{
  padding: 10px;
}
.component .padd .card{
  background-color: white;
  box-shadow: 0 0.3px 0.9px rgba(0, 0, 0, 0.18), 0 1.6px 3.6px rgba(0, 0, 0, 0.22);
  padding: 8px;
  height: 200px;
  border-radius: 4px;
  transition: 300ms;
}
.component .padd .card:hover{
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.18), 0 2px 10px rgba(0, 0, 0, 0.22);
}
</style>
