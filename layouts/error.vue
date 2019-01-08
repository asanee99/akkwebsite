<template>
  <v-container class="error-page">
    <h1>ขออภัย ไม่พบหน้าที่คุณค้นหากรุณากลับไปที่หน้าแรก</h1>
    <p>กลับไปที่ <a href="/">หน้าแรก</a>!</p>
  </v-container>
</template>

<style scoped>
.error-page {
  text-align: center;
}

.error-page a {
  text-decoration: none;
  color: red;
}

.error-page a:hover,
.error-page a:active {
  color: salmon;
}
</style>
