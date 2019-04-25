<template>
    <div>
        <div class="head">Kasir</div>
        <div class="container component">
            <div class="row">
                <div class="col-lg-8">
                    <div class="card">
                        <div class="head-card">
                            <div class="search-product"><i class="mi mi-Search"></i><input type="text" placeholder="Cari Produk"></div>
                            <div class="attr">
                                <i class="mi mi-Contact"></i>
                                <input type="text" class="costumer" placeholder="Nama Pelanggan">
                                <i class="mi mi-Calendar"></i>
                                <input type="text" class="date" value="28 - Desember - 2019">
                                <i class="mi mi-Tiles"></i>
                                <input type="text" class="costumer" placeholder="Alamat">
                            </div>
                        </div>
                        <div class="body-card">
                            <table>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Nama Produk</th>
                                        <th>Qty</th>
                                        <th>Harga</th>
                                        <th>Jumlah</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in items" :key="index">
                                        <td style="text-align: center;">{{index+1}}</td>
                                        <td>{{item.product}}</td>
                                        <td style="text-align: center; padding: 0px;">
                                            <input type="number" v-model="item.qty">
                                        </td>
                                        <td>Rp. {{formatPrice(item.price)}}</td>
                                        <td>Rp. {{formatPrice(item.qty * item.price)}}</td>
                                    </tr>
                                </tbody>                                
                            </table>
                        </div>
                        <div class="footer-card">
                            <table>
                                <tr>
                                    <td>Diskon</td>
                                    <td>:<input type="text" v-model="discount"> %</td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td>: Rp. <input type="hidden" v-model="countTotals" readonly style="border: none;">{{ formatPrice(totals)}}</td>
                                </tr>
                                <tr>
                                    <td>Bayar</td>
                                    <td>: Rp. <input type="text" v-model="bayar" v-on:keypress="isNumber(event)"></td>
                                </tr>
                                <tr>
                                    <td>Kembali</td>
                                    <td>: Rp. <input type="hidden" v-model="kembalian" readonly style="border: none;">{{ formatPrice(kembali)}}</td>
                                </tr>
                                <div style="padding: 18px 0px; float: right;">
                                    <a>Transaksi</a>
                                </div>
                            </table>
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
        return {
            discount: 0,
            totals: 0,
            bayar: 20000,
            kembali: 0,
            items:[
                {
                    id:1,
                    product: 'Learn vue Component',
                    qty: 3,
                    price:3000,
                },
                {
                    id:2,
                    product: 'Learn vue Router',
                    qty: 2,
                    price: 4000,
                }]
        }
    },
    computed:{
        totalRow(){
            return this.items[0].qty * this.items[0].price;
        },
        countTotals(){
            let total = 0;
            let disc = 0;
            for(let i in this.items) {
                total += this.items[i].qty * this.items[i].price;
            }
            if(this.discount > 0){
                disc = (total * this.discount) / 100;
                total = total - disc;
            }
            return this.totals = total
        },
        kembalian(){
            let kali;
            this.kembali = this.totals - this.bayar
            kali = this.kembali * 2
            this.kembali = this.kembali - kali
            if(this.kembali < 0){
                this.kembali = 0
            }
            return this.kembali
        },        
    },
    methods: {
    formatPrice(value) {
        let val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    isNumber: function(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();;
        } else {
            return true;
        }
    }
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
.component .card{
    padding: 15px;
    min-height: 200px;
    border-radius: 4px;
    transition: 300ms;
}
.component .padd .card:hover{
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.18), 0 2px 10px rgba(0, 0, 0, 0.22);
}
.component .card .head-card{

}
.component .card .head-card .search-product input{
    padding: 8px 8px 8px 30px;
    border: 1px solid gray;
    border-radius: 2px;
    width: 50%;
}
.component .card .head-card .search-product input:focus{
    outline: none;
    border: 1.5px solid gray;
}
.component .card .head-card i{
    outline: none;
    position: absolute;
    padding: 10px;
}
.component .card .head-card .attr{
    padding-top: 20px;
    
}
.component .card .head-card .attr input:focus{
    outline: none;
    border: 1.5px solid gray;
}
.component .card .head-card .attr .costumer{
    padding: 8px 8px 8px 35px;
    border: 1px solid gray;
    border-radius: 2px;
    width: 25%;
    margin-right: 10px;
}
.component .card .head-card .attr .date{
    padding: 8px 8px 8px 35px;
    border: 1px solid gray;
    border-radius: 2px;
    width: 20%;
    margin-right: 10px;
}
.component .card .head-card .attr .addres{
    padding: 8px 8px 8px 35px;
    border: 1px solid gray;
    border-radius: 2px;
    width: 25%;
}
.component .card .body-card{
    padding: 20px 0px;
}
.component .card .body-card table{
    width: 100%;
}
.component .card .body-card table thead tr th{
    padding: 8px;
    color: gray;
}
.component .card .body-card table tbody tr{
    background-color: white;
    box-shadow: 0 0.3px 0.9px rgba(0, 0, 0, 0.18), 0 1.6px 3.6px rgba(0, 0, 0, 0.22);
    margin-bottom: 20px;
}
.component .card .body-card table tbody td{
    padding: 8px;
}
.component .card .body-card table tbody td i{
    padding: 4px 8px;
    font-size: 10px;
    font-weight: bold;
}
.component .card .body-card table tbody td input{
    border: none;
    width: 40px;
    text-align: center;
}
.component .card .body-card table tbody td input:focus{
    outline: none;
}
.component .card .footer-card{
    background-color: white;
    box-shadow: 0 0.3px 0.9px rgba(0, 0, 0, 0.18), 0 1.6px 3.6px rgba(0, 0, 0, 0.22);
    float: right;
    font-size: 14px;
    padding: 10px
}
.component .card .footer-card table tr td{
    padding: 4px 10px;
}
.component .card .footer-card table tr td input{
    border: 1px solid #f3efef;
    border-radius: 2px;
    padding: 2px 4px;
    width: 100px;
}
.component .card .footer-card table tr td input:focus{
    outline: none;
    border: 1.5px solid gray;
}
.component .card .footer-card a{
    padding: 6px 10px;
    border: 1px solid #d6cfcf;
    border-radius: 3px;
    font-weight: 500;
    margin: 10px;
    transition: 300ms;
}
.component .card .footer-card a:hover{
    cursor: pointer;
    border: 1px solid #0078D7;
}
</style>