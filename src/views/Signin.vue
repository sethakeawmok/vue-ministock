<template>
  <div class="login-page">
    <div class="login-box">
      <div class="login-logo">
        <a href="#"><b>Nueng</b>Admin</a>
      </div>

      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">Sign in to start your session</p>

          <form @submit.prevent="submit">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                v-model="form.username"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-user"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model="form.password"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <div class="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label for="remember">
                    Remember Me
                  </label>
                </div>
              </div>

              <div class="col-4">
                <button type="submit" class="btn btn-primary btn-block">
                  Sign In
                </button>
              </div>
            </div>
          </form>
          <div class="social-auth-links text-center mb-3">
            <p>- OR -</p>
            <a href="#" class="btn btn-block btn-primary">
              <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
            </a>
            <a href="#" class="btn btn-block btn-danger">
              <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions } from "vuex";

export default {
  name: "signin",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions({
      signIn: "auth/signIn",
    }),

    submit() {
      this.signIn(this.form)
        .then(() => {
          window.location.href = 'dashboard'
          // this.$router.replace({
          //   name: "dashboard",
          // });
        })
        .catch(() => {
          console.log("Login feiled");
        });
    },
  },
};
</script>
