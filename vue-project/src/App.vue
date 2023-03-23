

<template>
  <main>
    <img :src="qrcodeImg" />
  </main>

  <div class="stream">
    <qr-stream @decode="onDecode" class="mb">
      <div style="color: red;" class="frame"></div>
    </qr-stream>
  </div>
  <div class="result">
    Result: {{state.data}}
  </div>
</template>

<script setup>
import qrcodeImg from './assets/qrcode.png'
import { QrStream, QrCapture, QrDropzone } from 'vue3-qr-reader';
import { reactive } from 'vue';
const state = reactive({
  data: null
})
function onDecode(data) {
  console.log(data);
  state.data = data
}
</script>
