<template>
  <div class="container-fluid">
    <h1>Users Page</h1>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="modal" id="modal-add-user" aria-modal="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 v-show="!editmode" class="modal-title">
                    Add New
                  </h4>
                  <h4 v-show="editmode" class="modal-title">
                    Update
                  </h4>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <form @submit.prevent="editmode ? updateUser() : createUser()">
                  <div class="modal-body">
                    <div class="form-group">
                      <input
                        v-model="form.username"
                        type="text"
                        name="name"
                        placeholder="Name"
                        class="form-control"
                        :class="{
                          'is-invalid': form.errors.has('username'),
                        }"
                      />
                      <has-error :form="form" field="username"></has-error>
                    </div>

                    <div class="form-group">
                      <input
                        v-model="form.email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        class="form-control"
                        :class="{
                          'is-invalid': form.errors.has('email'),
                        }"
                      />
                      <has-error :form="form" field="email"></has-error>
                    </div>

                    <div class="form-group">
                      <input
                        v-model="form.fullname"
                        type="text"
                        name="name"
                        placeholder="Fullname"
                        class="form-control"
                        :class="{
                          'is-invalid': form.errors.has('fullname'),
                        }"
                      />
                      <has-error :form="form" field="fullname"></has-error>
                    </div>

                    <div class="form-group" v-show="!editmode">
                      <input
                        v-model="form.password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        class="form-control"
                        :class="{
                          'is-invalid': form.errors.has('password'),
                        }"
                      />
                      <has-error :form="form" field="password"></has-error>
                    </div>
                  </div>
                  <div class="modal-footer justify-content-between">
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-dismiss="modal"
                    >
                      Close
                    </button>

                    <button
                      v-show="editmode"
                      type="submit"
                      class="btn btn-primary"
                    >
                      Update
                    </button>

                    <button
                      v-show="!editmode"
                      type="submit"
                      class="btn btn-primary"
                    >
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="card-header">
            <h3 class="card-title">Responsive Hover Table</h3>

            <div class="card-tools">
              <div class="input-group input-group-sm">
                <div class="input-group-append">
                  <button
                    type="button"
                    class="btn btn-success"
                    @click="newModal"
                  >
                    Add User <i class="fas fa-user-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="card-body table-responsive p-0">
            <table class="table table-hover text-nowrap">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Full Name</th>
                  <th>Type</th>
                  <th class="text-center">Manage</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td>{{ user.id }}</td>
                  <td>{{ user.username }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.fullname }}</td>
                  <td class="project-state">
                    <span class="badge badge-success">Admin</span>
                  </td>
                  <td class="text-center">
                    <div v-if="currentuser.id !== user.id">
                      <a
                        class="btn btn-info btn-sm mr-2"
                        href="#"
                        @click="editModal(user)"
                      >
                        <i class="fas fa-pencil-alt"> </i>
                        Edit
                      </a>
                      <a
                        class="btn btn-danger btn-sm"
                        href="#"
                        @click="deleteUser(user.id)"
                      >
                        <i class="fas fa-trash"> </i>
                        Delete
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "user",
  data() {
    return {
      editmode: false,
      users: {},
      form: new window.Form({
        id: "",
        username: "",
        email: "",
        fullname: "",
        img_profile: "",
        password: "",
      }),
    };
  },
  methods: {
    newModal() {
      this.editmode = false;
      this.form.reset();
      window.$("#modal-add-user").modal("show");
    },
    editModal(user) {
      this.editmode = true;
      this.form.reset();
      window.$("#modal-add-user").modal("show");
      this.form.fill(user);
    },
    loadusers() {
      axios.get("/api/users").then((response) => {
        this.users = response.data.data;
      });
    },
    createUser() {
      this.form
        .post(`${process.env.VUE_APP_BASE_URL}/api/user`)
        .then(() => {
          this.$emit("AfterCreate");
          window.$("#modal-add-user").modal("hide");
          alert("เพิ่มเรียบร้อย");
        })
        .catch(() => {});
    },
    updateUser() {
      this.form
        .put(`${process.env.VUE_APP_BASE_URL}/api/users/` + this.form.id)
        .then(() => {
          window.$("#modal-add-user").modal("hide");
          alert("Update เรียบร้อย");
          this.$emit("AfterCreate");
        })
        .catch(() => {});
    },
    deleteUser(id) {
      if (confirm("ยืนยันการลบ User นี้หรือไม่")) {
        this.form
          .delete(`${process.env.VUE_APP_BASE_URL}/api/users/` + id)
          .then(() => {
            alert("ลบเรียบร้อย");

            this.$emit("AfterCreate");
          })
          .catch(() => {
            alert("ไม่สามารถลบได้ เกิดข้อผิดพลาดบางอย่าง");
          });
      }
    },
  },
  computed: {
    ...mapGetters({
      currentuser: "auth/user",
    }),
  },
  created() {
    this.loadusers();
    this.$on("AfterCreate", () => {
      this.loadusers();
    });
  },
};
</script>
