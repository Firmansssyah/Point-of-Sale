<template>
    <div>
        <div class="head">Kasir</div>
        <div class="container-fluid component">
            <div class="row">
                <div class="col-lg-10">
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
                                <tr>
                                    <td colspan="2" style="padding-top: 12px;">
                                        <button class="btn-primary bg-primary">Transaksi</button>
                                        <button class="btn-success">Simpan</button>
                                        <button class="btn-danger">Batal</button>
                                    </td>
                                </tr>
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
                { id:1, product: 'Roti Sisir', qty: 20, price:3000,},
                { id:2, product: 'Hi-top 35ml', qty: 6, price:7000,},
                { id:3, product: 'Hi-top 15ml', qty: 6, price:12000,},
            ]
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


<style>
:root{
    --primary-color: #0078D7;
}
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
.component .card .head-card .search-product input{
    padding: 8px 8px 8px 30px;
    border: 0.5px solid grey;
    border-radius: 2px;
    width: 50%;
    transition: 600ms;
}
.component .card .head-card .search-product input:focus,
.component .card .head-card .search-product input:hover{
    outline: none;
    border: 0.5px solid white;
    transition: 300ms;
    box-shadow: 0 0.3px 0.9px rgba(0, 0, 0, 0.18), 0 1.6px 3.6px rgba(0, 0, 0, 0.22);
}
.component .card .head-card i{
    outline: none;
    position: absolute;
    padding: 10px;
}
.component .card .head-card .attr{
    padding-top: 20px;
}
.component .card .head-card .attr input:focus,
.component .card .head-card .attr input:hover{
    outline: none;
    border: 0.5px solid white;
    transition: 300ms;
    box-shadow: 0 0.3px 0.9px rgba(0, 0, 0, 0.18), 0 1.6px 3.6px rgba(0, 0, 0, 0.22);
}
.component .card .head-card .attr .costumer,
.component .card .head-card .attr .addres,
.component .card .head-card .attr .date{
    transition: 600ms;
}
.component .card .head-card .attr .costumer{
    padding: 8px 8px 8px 35px;
    border: 0.5px solid gray;
    border-radius: 2px;
    width: 25%;
    margin-right: 10px;
}
.component .card .head-card .attr .date{
    padding: 8px 8px 8px 35px;
    border: 0.5px solid gray;
    border-radius: 2px;
    width: 20%;
    margin-right: 10px;
}
.component .card .head-card .attr .addres{
    padding: 8px 8px 8px 35px;
    border: 0.5px solid gray;
    border-radius: 2px;
    width: 25%;
}
.component .card .body-card{
    padding: 20px 0px;
}
.component .card .body-card table{
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
}
.component .card .body-card table thead tr th{
    padding: 8px;
    color: gray;
    font-weight: 400;
}
.component .card .body-card table tbody tr{
    background-color: white;
    box-shadow: 0 0.3px 0.9px rgba(0, 0, 0, 0.18), 0 1.6px 3.6px rgba(0, 0, 0, 0.22);
}
.component .card .body-card table tbody td{
    padding: 8px;
    color: #4C4A48;
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
    padding: 10px;
    border-radius: 4px;
}
.component .card .footer-card table tr td{
    padding: 4px 8px;
}
.component .card .footer-card table tr td input{
    border: 1px solid #f3efef;
    border-radius: 2px;
    padding: 2px 8px;
    width: 100px;
    transition: 600ms;
}
.component .card .footer-card table tr td input:focus{
    outline: none;
    border: 1px solid #bbbaba;
    transition: 300ms;
}
.component .card .footer-card table tr td button{
    padding: 4px 0px;
    text-decoration: none;
    border-radius: 2px;
    width: 80px;
    margin-right: 8px;
    background-color: white;
    border: 1px solid #69686833;
}
.component .card .footer-card table tr td button:hover{
    cursor: pointer;
    border: 1px solid var(--primary-color);
    transition: 300ms;
}
.component .card .footer-card table tr td button:focus{
    outline: none;
}
@media (max-width: 992px){
  
}
</style>