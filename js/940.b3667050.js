"use strict";(self["webpackChunkadxpay"]=self["webpackChunkadxpay"]||[]).push([[940],{9940:function(e,t,a){a.r(t),a.d(t,{default:function(){return U}});var o=a(3396),r=a(9242),n=a(7139);const i={class:"container content"},d=(0,o._)("div",{class:"row"},[(0,o._)("div",{class:"col-12"},[(0,o._)("h1",{class:"text-primary"},"Transaksi DANA")])],-1),s={class:"row mt-3"},u={class:"col-12"},l={class:"card bg-putih shadow rounded-10"},c={class:"card-body"},m={class:"text-left"},p={class:"form-group"},h=(0,o._)("label",{for:"no_tujuan",class:"text-primary"},"No Tujuan",-1),f={class:"form-group"},k={for:"produk"},b=(0,o.Uk)("Produk "),_=(0,o._)("option",{value:""},"Pilih",-1),g=["value"],w={key:0,class:"form-group"},y=(0,o._)("label",{for:"metode_pembayaran"},"Metode Pembayaran",-1),P=(0,o._)("option",{value:""},"Pilih",-1),v=(0,o._)("option",{value:"Hutang"},"Bayar Nanti",-1),C={value:"Dompet"};function T(e,t,a,T,D,x){return(0,o.wg)(),(0,o.iD)("div",i,[d,(0,o._)("div",s,[(0,o._)("div",u,[(0,o._)("div",l,[(0,o._)("div",c,[(0,o._)("form",m,[(0,o._)("div",p,[h,(0,o.wy)((0,o._)("input",{onInput:t[0]||(t[0]=(...e)=>x.checkProvider&&x.checkProvider(...e)),"onUpdate:modelValue":t[1]||(t[1]=e=>this.noTujuan=e),id:"no_tujuan",required:"",autocomplete:"off",type:"text",class:"form-control form-control-lg border border-primary rounded-10",name:"no_hp",pattern:"\\d*",placeholder:"Masukkan Nomor Tujuan.."},null,544),[[r.nr,this.noTujuan]])]),(0,o._)("div",f,[(0,o._)("label",k,[b,(0,o.wy)((0,o._)("span",{class:"badge badge-danger"},"Saldo : Rp. "+(0,n.zw)(x.numberFormat(this.user.saldo)),513),[[r.F8,"0"==this.user.verified]])]),(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>D.idProduct=e),id:"produk",name:"produk",required:"",class:"form-control form-control-lg rounded-10"},[_,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(x.orderedProduct,(e=>((0,o.wg)(),(0,o.iD)(o.HY,{key:e},["TLOPC"!=e.product_id?((0,o.wg)(),(0,o.iD)("option",{key:0,value:e.product_id},(0,n.zw)(e.operator_name)+" "+(0,n.zw)(e.product_name)+" Harga: Rp. "+(0,n.zw)(x.numberFormat(parseInt(e.product_name.replace(/[^0-9]/g,""))+2e3)),9,g)):(0,o.kq)("",!0)],64)))),128))],512),[[r.bM,D.idProduct]])]),"1"==this.user.verified?((0,o.wg)(),(0,o.iD)("div",w,[y,(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>D.metodePembayaran=e),id:"metode_pembayaran",name:"metode_pembayaran",required:"",class:"form-control form-control-lg rounded-10"},[P,v,(0,o._)("option",C," Dompet | Saldo Anda: Rp. "+(0,n.zw)(x.numberFormat(this.user.saldo)),1)],512),[[r.bM,D.metodePembayaran]])])):(0,o.kq)("",!0),(0,o._)("div",null,[(0,o._)("button",{onClick:t[4]||(t[4]=e=>x.kirim()),type:"button",class:"btn btn-lg btn-block btn-primary rounded-10"}," Kirim ")])])])])])])])}a(2338);var D=a(2492),x=a.n(D),j=a(6265),B=a.n(j),A=a(4806),N=a.n(A),F={name:"CusTransaksiDANAView",props:["ipAdress"],data(){return{user:JSON.parse(localStorage.getItem("SessionUser")),noTujuan:null,dataCheckNoTujuan:{},idOperator:null,idProduct:null,metodePembayaran:null,dataLoadProduct:null}},methods:{kirim(){"0"==this.user.verified&&(this.metodePembayaran="Dompet"),this.noTujuan?this.idProduct?this.metodePembayaran?x().fire({title:"Yakin untuk mengirim?",text:"Pastikan data form sudah benar!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yakin"}).then((e=>{if(e.isConfirmed){const e=new FormData;e.append("metode_pembayaran",this.metodePembayaran),e.append("no_hp",this.noTujuan),e.append("produk",this.idProduct),e.append("operatorProduk",this.idOperator),e.append("cus_id",this.user.id),B()({method:"post",url:this.ipAdress+"api/transaksi/dana?username="+this.user.username,data:e,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){"failed"==e.data.status?x().fire({icon:"error",title:e.data.message,text:e.data.keterangan,showConfirmButton:!0,timer:1500}).then((function(){window.location="/customer/data-transaksi"})):""==e.data?x().fire({icon:"success",title:"Diproses",text:"Transaksi Diproses",showConfirmButton:!0,timer:1500}).then((function(){window.location="/customer/data-transaksi"})):x().fire({icon:"success",title:e.data.message,text:e.data.keterangan,showConfirmButton:!0,timer:1500}).then((function(){window.location="/customer/data-transaksi"}))})).catch((function(e){console.log(e)}))}})):x().fire({icon:"error",title:"Metode Pembayaran Kosong",text:"silahkan pilih metode pembayaran!",showConfirmButton:!1,timer:1500}):x().fire({icon:"error",title:"Produk Kosong",text:"silahkan pilih produk!",showConfirmButton:!1,timer:1500}):x().fire({icon:"error",title:"No Tujuan",text:"silahkan masukkan no hp yang benar!",showConfirmButton:!1,timer:1500})},loadProduct(){B().get(this.ipAdress+"api/get-prabayar-produk/"+this.idOperator+"?username="+this.user.username).then((({data:e})=>{this.dataLoadProduct=e.filter((function(e){return"ACTIVE"==e.status}))}))},numberFormat(e){return e?e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."):"0"},checkProvider:function(){this.noTujuan=this.noTujuan.replace(/[^0-9]/g,""),this.idOperator="UDDNA",this.loadProduct()}},computed:{orderedProduct:function(){return N().orderBy(this.dataLoadProduct,"product_price","asc")}},mounted(){}},O=a(89);const S=(0,O.Z)(F,[["render",T]]);var U=S}}]);
//# sourceMappingURL=940.b3667050.js.map