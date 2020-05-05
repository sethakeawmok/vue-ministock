<template>
  <div class="dashboard">
   <h1>Dashboard Page</h1> 
    <h3>Name : {{user.fullname}}</h3>
     
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'dashboard', 
  computed: {
    ...mapGetters({ 
      user: "auth/user"
    }),
  },
}
</script>
