<template>
    <div class="px-24 bg-EEF2F4">
        <div class="bg-E0F2FF p-8">
            <Navbar />
        </div>  
        <div class="bg-white grid grid-cols-3 gap-6 p-12">
            <div class="col-span-2 px-12">
                <img src="../assets/gWedi4SWsHQ.png" />
                <div class="border border-E2E8F0 rounded-b-lg">
                    <Jumbotron />
                    <InfoNav />
                    <Footer />
                </div>
            </div>
            <div>
                <Payment />
            </div>
        </div>   
    </div>
</template>
<script>
import Navbar from '../components/navbar.vue'
import Payment from '../components/payment.vue'
import Jumbotron from '../components/jumbotron.vue';
import InfoNav from '../components/infoNav.vue';
import Footer from '../components/footer.vue';
export default{
    name: "Index",
    components: { Navbar, Payment, Jumbotron, InfoNav, Footer }
}
</script>