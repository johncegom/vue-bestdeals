<template>
  <div class="modal" id="signin">
    <div class="modal-dialog modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">Sign In</h2>
          <button type="button" class="close" data-dismiss="modal">
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <form action="#" class="was-validated">
          <div class="form-group w-75 m-auto">
            <i class="fas fa-user-alt"></i>
            <label for="email">Email:</label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="Email"
              placeholder="Your email"
              v-model="email"
              @keyup.enter="signin"
              required
            >
            
            <div class="invalid-feedback">Please enter your email..</div>
          </div>

          <div class="form-group w-75 m-auto">
            <i class="fas fa-lock"></i>
            <label for="pwd">Password:</label>
            <input
              type="password"
              class="form-control"
              id="pwd"
              name="Password"
              placeholder="Your password"
              v-model="password"
              @keyup.enter="signin"
              required
            >
            <div class="invalid-feedback">Please enter your password.</div>
          </div>
          <div class="m-auto w-75">
            <input type="checkbox" name="remember" id="rememberbox"> Remember me
          </div>
        </form>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-primary" @click="signin">Sign In</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb } from "../firebase.js";

export default {
  name: "Signin",
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    signin() {
      fb
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          $('#signin').modal('hide');
          Toast.fire({
            type: 'success',
            title: 'Signed in successfully'
          })
          this.$router.replace('admin/overview');

        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === "auth/wrong-password") {
            Toast.fire({
              type: 'warning',
              title: 'Wrong password!'
            });
          } else {
            Toast.fire({
              type: 'warning',
              title: errorMessage,
            });
          }
        });
    }
  }
};
</script>

<style scoped>
.form-group label {
  margin-left: 5px;
}
#rememberbox {
  margin-top: 10px;
  
}
</style>