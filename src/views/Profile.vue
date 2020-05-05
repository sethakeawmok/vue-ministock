<template>
  <div>
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Profile</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">User Profile</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            <div class="card card-primary card-outline">
              <div class="card-body box-profile">
                <div class="text-center">
                  <img
                    class="profile-user-img img-fluid img-circle"
                    :src="getProfileImage()"
                    alt="User profile picture"
                  />
                </div>

                <h3 class="profile-username text-center">
                  {{ form.fullname }}
                </h3>

                <!-- <p class="text-muted text-center">...</p> -->

                <!-- <ul class="list-group list-group-unbordered mb-3">
                  <li class="list-group-item">
                    <b>Followers</b> <a class="float-right">1,322</a>
                  </li>
                  <li class="list-group-item">
                    <b>Following</b> <a class="float-right">543</a>
                  </li>
                  <li class="list-group-item">
                    <b>Friends</b> <a class="float-right">13,287</a>
                  </li>
                </ul> -->

                <div class="form-group">
                     <div class="custom-file">
                      <input type="file" class="custom-file-input" id="customFile" @change="ChangeProfileImg">
                      <label href="#" class="btn btn-primary btn-block" for="customFile"><b>Select Profile</b></label>
                   
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="col-md-9">
            <div class="card">
              <div class="card-header p-2">
                <ul class="nav nav-pills">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      href="#settings"
                      data-toggle="tab"
                      >Settings</a
                    >
                  </li>
                </ul>
              </div>
              <div class="card-body">
                <div class="tab-content">
                  <div class="tab-pane active" id="settings">
                    <form class="form-horizontal">
                      <div class="form-group row">
                        <label for="inputName" class="col-sm-2 col-form-label"
                          >Username</label
                        >
                        <div class="col-sm-10">
                          <input
                            type="text"
                            class="form-control"
                            id="inputName"
                            placeholder=""
                            v-model="form.username"
                            disabled
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputEmail" class="col-sm-2 col-form-label"
                          >Email</label
                        >
                        <div class="col-sm-10">
                          <input
                            type="email"
                            id="inputEmail"
                            placeholder="Email"
                            v-model="form.email"
                            class="form-control"
                            :class="{
                              'is-invalid': form.errors.has('email'),
                            }"
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputName2" class="col-sm-2 col-form-label"
                          >Full Name</label
                        >
                        <div class="col-sm-10">
                          <input
                            type="text"
                            id="inputName2"
                            placeholder=""
                            v-model="form.fullname"
                            class="form-control"
                            :class="{
                              'is-invalid': form.errors.has('fullname'),
                            }"
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label
                          for="inputExperience"
                          class="col-sm-2 col-form-label"
                          >Experience</label
                        >
                        <div class="col-sm-10">
                          <textarea
                            class="form-control"
                            id="inputExperience"
                            placeholder="Experience"
                          ></textarea>
                        </div>
                      </div>

                      <div class="form-group row">
                        <div class="offset-sm-2 col-sm-10">
                          <button
                            type="submit"
                            class="btn btn-danger"
                            @click.prevent="UpdateProfile"
                          >
                            Update Profile
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "profile",
  data() {
    return {
      form: new window.Form({
        id: "",
        username: "",
        email: "",
        fullname: "",
        img_profile: "",
      }),
    };
  },
  methods: {
    getProfileImage() {
      let photo = ''
      if (this.form.img_profile == undefined || this.form.img_profile == ''){
        photo = process.env.VUE_APP_BASE_URL+'/assets/img/profile/user.png';
      } else if(this.form.img_profile.length > 100){
        photo =  this.form.img_profile
      } else {
        photo =  process.env.VUE_APP_BASE_URL+"/assets/img/profile/" + this.form.img_profile
      }
      return photo;
    },
    ChangeProfileImg(e) {
      var reader = new window.FileReader();
      if (e.target.files[0]["size"] < 2111775) {
          reader.onloadend = (e) => {
            this.form.img_profile = e.target.result;
          }
          reader.readAsDataURL(e.target.files[0]); 
      }else {
        alert("You are uploading a large file");
      }

    },
    UpdateProfile() {
      this.form
        .put(`${process.env.VUE_APP_BASE_URL}/api/user/me`)
        .then(() => {
          alert("อัพเดทข้อมูลเรียบร้อย");
        })
        .catch(() => {});
    },
  },
  created() {
    axios.get(`${process.env.VUE_APP_BASE_URL}/api/user/me`).then(({ data }) => this.form.fill(data.data));
  },
};
</script>
