<template>
  <div class="frame1">
    <div class="letsgetstarted">Let's Get Started.</div>
    <div class="line1"></div>
    <Logo class="vector1" />
    <Form class="form" />
    <SignupButton class="signup" />
    <ForgetButton class="forgetpassword" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Logo from "@/components/Logo.vue";
import Form from "./Form.vue";
import SignupButton from "./SignupButton.vue";
import ForgetButton from "./ForgetButton.vue";

@Component({
  components: {
    Logo,
    Form,
    SignupButton,
    ForgetButton,
  },
})
export default class Index extends Vue {}
</script>

<style>
.form {
  width: 280px;
  height: 145px;
  left: 191px;
  top: 227px;
  position: absolute;
}
.frame1 {
  /* position: relative; */
  /* width: 100%;
  height: 100%; */
  margin-bottom: 20px;
  background: #ffffff;
}

/* Let’s Get Started. */
.letsgetstarted {
  position: absolute;
  width: 450px;
  height: 59px;
  left: 157px;
  top: 88px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  line-height: 59px;
}

/* Line 1 */
.line1 {
  position: absolute;
  width: 459px;
  height: 0px;
  left: 157px;
  top: 147px;

  border: 1px solid #000000;
}

/* identical to box height */
.boxheight {
  color: #000000;
}

/* Vector 1 */
.vector1 {
  position: absolute;
  width: 619px;
  height: 341px;
  left: 440px;
  top: 120px;
}

/* Rectangle 2 */
.rectangle2 {
  position: absolute;
  width: 174px;
  height: 36px;
  left: 294px;
  top: 241px;

  background: #e2e2e2;
}

/* Account */
.account {
  position: absolute;
  width: 75px;
  height: 23px;
  left: 191px;
  top: 247px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;

  color: #7a7979;
}

/* Rectangle 3 */
.rectangle3 {
  position: absolute;
  width: 174px;
  height: 36px;
  left: 294px;
  top: 300px;

  background: #e2e2e2;
}

/* Password */
.password {
  position: absolute;
  width: 89px;
  height: 23px;
  left: 177px;
  top: 306px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;

  color: #7a7979;
}

/* Group 1 */
.group1 {
  position: absolute;
  width: 69px;
  height: 23px;
  left: 147px;
  top: 530px;
}

/* Sign Up */
.signup {
  position: absolute;
  width: 69px;
  height: 23px;
  left: 187px;
  top: 430px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;

  color: #8075ff;
}

/* Forget Password */
.forgetpassword {
  position: absolute;
  width: 151px;
  height: 23px;
  left: 303px;
  top: 430px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;

  color: #9d7979;
}
</style>
