<template>
  <v-form>
    <v-text-field v-model="account" label="Account" required></v-text-field>
    <v-text-field
      v-model="password"
      label="Password"
      type="password"
      required
    ></v-text-field>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      account: null,
      password: null,
    };
  },
};
</script>

<style>
.account {
  position: absolute;
  width: 75px;
  height: 23px;
  left: 14px;
  top: 0px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;

  color: #7a7979;
}

.password {
  position: absolute;
  width: 89px;
  height: 23px;
  left: 0px;
  top: 60px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;

  color: #7a7979;
}
</style>