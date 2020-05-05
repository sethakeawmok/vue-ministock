<template>
  <div class="wrapper">
    <Navigation />
    <Sidebar />
    <div class="content-wrapper">
      <section class="content">
        <router-view />
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default {
  name: "DashboardLayout",
  components: {
    Navigation,
    Sidebar,
    Footer
  },
  created() {
    window.$("body").removeClass("layout-top-nav").addClass("sidebar-mini layout-fixed layout-navbar-fixed");
  },
};
</script>

<style></style>
