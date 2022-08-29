<template>
  <div class="border border-E2E8F0 p-8 rounded-lg">
    <div class="">
        <div class="flex justify-between text-161722 font-bold text-sm mb-4">
            <p>N2,000,320,000</p>
            <p>N5,000,000,000</p>
        </div>
        <div class="mb-2">
            <img src="../assets/group_45.png" alt="">
        </div>
        <div class="flex text-sm justify-between text-7E7B7B">
            <p>Raised</p>
            <p>Target</p>
        </div>
        <hr class="text-E5E5E5 my-2"/>
        <div class="mb-4 text-sm">
            <p>Bless this Fundraiser by making a transfer to the bank account below or use the 
               <strong> “Bless”</strong> button.</p>
        </div>
        <div class="bg-567286 text-sm rounded text-white justify-center items-center py-4 flex space-y-2 flex-col">
            <p class="text-E0F2FF">STERLING BANK</p>
            <div class="text-lg flex items-center">
                0046748389
                <Copy class="ml-2"/>
            </div>
            <p>Gbolahan Fawale</p>
        </div>
    </div>
    <div>
        <div class="relative flex py-5 items-center">
            <div class="flex-grow border-t border-E5E5E5"></div>
            <span class="flex-shrink mx-4 text-7E7B7B">Or</span>
            <div class="flex-grow border-t border-E5E5E5"></div>
        </div>
        <p class="mb-3 font-medium text-sm">You can also bless this fundraiser from anywhere in the world by using Paypal or Card.</p>
        <button class="rounded shadow py-4 w-full flex justify-center border border-E5E5E5">
            <img src="../assets/PayPal.png" alt=""/>
        </button>
        <button class="rounded shadow py-6 w-full flex justify-center mt-4 mb-6 border border-E5E5E5">
            <img src="../assets/MasterCard_Logo.png" alt=""/>
            <img src="../assets/Visa_Inc._logo.png" alt=""/>
            <img src="../assets/Verve_Logo.png" alt=""/>
            <img src="../assets/UnionPay_logo.png" alt=""/>
        </button>
        <button class="rounded bg-3E3C3C text-white w-full font-medium py-4">
            Share this Fundraiser
        </button>
    </div>
  </div>
</template>
<script>
import Copy from './copy.vue';
export default{
    name: "Payment",
    components: { Copy }
}
</script>
