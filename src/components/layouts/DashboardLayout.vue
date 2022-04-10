<template>
  <a-layout>
      <a-layout-header :style="{ position: 'fixed', zIndex: '1', width: '100%' }">
        <!-- <div class="logo" /> -->
        
        <!-- <h1 class="user-profile-description" :style="{ margin: 'auto 12px auto auto' }">
            <a-icon :style="{fontSize: '20px'}" slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
            <a-dropdown :trigger="['click']">
              <span class="ant-drop-down-link" :style="{ cursor: 'pointer' }">
                Valentine Sean
                <a-icon type="caret-down" style="color: rgba(0,0,0,.25)" />
              </span>

              <a-menu slot="overlay">
                <a-menu-item>
                  <span @click.prevent="logout">
                    logout
                  </span>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
        </h1> -->

        <!-- v-model:selectedKeys="selectedKeys" -->
        <a-menu
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight: '64px', border: '', padding: '' }"
        >
          <a-menu-item
            key="1"
            :style="{ border: '' }"
            @click="toSubjects"
          >
            Subjects
          </a-menu-item>

          <a-menu-item key="2">Users</a-menu-item>
          
          <a-menu-item key="3" :style="{ float: 'right' }">
            Valentine Sean
          </a-menu-item>
        </a-menu>

      </a-layout-header>

      <a-layout-content
         :style="{ padding: '12px 72px', marginTop: '64px', border: 'solid 1px blue', minHeight: '90vh', maxHeight: '90vh' }"
      >

        <!-- <a-breadcrumb :style="{ margin: '16px 0' }">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb> -->
        
        <div class="loading-spinner" v-if="loading">
          <a-spin />
        </div>

        <slot v-if="!loading" />
      </a-layout-content>
  </a-layout>
</template>
<script>
//   import { mapGetters, mapActions } from "vuex"

  export default {
    name: "DashboardLayout",

    data() {
      return {
        loading: false,
        collapsed: false,
        drawer_visibility: false,
        desktop_size: true,
        tablet_size: false,
        default_tab: "",
        // default_sub_tab: null,
      };
    },

    methods: {
        // ...mapActions(["fetchDepartments", "fetchRoles", "fetchUsers", "fetchFeeds", "activate"]),
        // ...mapActions(["logoutUser"]),

        toDashboard(){
            this.$router.replace({ name: "Dashboard" })
            // console.log("Dashboard")
        },

        // toPredictions(){
        //     this.$router.replace({ name: "Predictions" })
        // },

        toMyTrip(){
            this.$router.replace({ name: "My Trip" })
            // console.log("Predictions")
        },

        toCurrentTrip(){
            this.$router.replace({ name: "Current Trip" })
            // console.log("Predictions")
        },

        toOffloadedTrips(){
            this.$router.replace({ name: "Offloaded Trips" })
            // console.log("Predictions")
        },

        toAllTrips(){
            this.$router.replace({ name: "All Trips" })
            // console.log("Predictions")
        },

        toSubjects(){
            this.$router.replace({ name: "Subjects" })
            // console.log("Fleet")
        },

        toConductors(){
            this.$router.replace({ name: "Conductors" })
            // console.log("Fleet")
        },

        toStations(){
            // this.$router.replace({ name: "Employees" })
            console.log("Stations")
        },

        toRoutes(){
            this.$router.replace({ name: "Routes" })
        },

        // On Breakpoint
        onBreakpoint(){
          this.tablet_size = true
        },

        // // Show Drawer
        // showDrawer(){
        //   this.drawer_visibility = true
        // },

        // closeDrawer(){
        //   this.drawer_visibility = false
        // },

        // // LOGOUT
        // async logout(){
        //   this.loading = true
        //   this.logoutUser(false)
        //   window.sessionStorage.removeItem('vuex');
        //   window.sessionStorage.clear()
        //   this.$router.replace({ name: 'Login' });
        //   this.$message.info("You have successfully logged out")
        //   this.loading = false
        //     // console.log("Logout function")
        // }
    },

    created(){
        if(this.$route.name === "Dashboard"){
          this.default_tab = "1"
        }
        
        // else if(this.$route.name === "Predictions"){
        //   this.default_tab = "2"
        // }

        else if(this.$route.name === "Appropriate Route"){
          this.default_tab = "2"
        }
        
        else if(this.$route.name === "My Trip"){
          this.default_tab = "3a"
        }

        else if(this.$route.name === "Current Trip"){
          this.default_tab = "3b"
        }

        else if(this.$route.name === "Offloaded Trips"){
          this.default_tab = "3c"
        }

        else if(this.$route.name === "All Trips"){
          this.default_tab = "3d"
        }

        // else if(this.$route.name === "Trips"){
        //   this.default_tab = "3"
        // }

        // else if(this.$route.name === "Current Trip" || this.$route.name === "Offloaded Trips"  || this.$route.name === "All Trips"){
        //   this.default_tab = "3"
        // }

        else if(this.$route.name === "Fleets"){
          this.default_tab = "4"
        }

        else if(this.$route.name === "Conductors"){
          this.default_tab = "5"
        }

        else if(this.$route.name === "Stations"){
          this.default_tab = "6"
        }

        else if(this.$route.name === "Routes"){
          this.default_tab = "7"
        }


    },

    mounted(){
        // Mounted hook
    },

    // computed: mapGetters(["getActiveUser"])
  };
</script>
<style>
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 12px;
    cursor: pointer;
    transition: color 0.3s;
  }

  /* #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  } */

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    /* background: rgba(255, 255, 255, 0.2); */
    margin: 16px;
    display: flex;
  }

  .layout-sider-menu{
  }

  /* MEDIA QUERIES */

  /* Extra Extra Large */
  @media screen and (max-width: 1600px){}

  /* Extra Large */
  @media screen and (max-width: 1200px){}

  /* Large */
  @media screen and (max-width: 992px){}

  /* Medium */
  @media screen and (max-width: 768px){
    .trigger{
      display: none !important;
    }

    .user-profile-description{
      /* border: solid 1px red; */
      /* margin: auto 12px auto auto; */
      margin-left: 12px !important;
    }

    .more-btn{
      display: inline !important;
    }
  }

  /* Small */
  @media screen and (max-width: 576px){}

  /* Extra Small */
  @media screen and (max-width: 480px){}
</style>
