<template>
  <div>
    <CreateUser @handleHide="hideCreateUser" :createUserVisible="createUserVisible" />

    <!-- <div class="loading-spinner" v-if="loading">
      <a-spin />
    </div> -->

    <div v-if="!loading">
      <h1 :style="{ margin: '12px 12px 0' }">Users</h1>

      <div :style="{ margin: '12px 12px 0' }">
          <a-button @click.prevent="openCreateUser" type="primary" icon="plus" :style="{ margin: '0 auto 10px auto' }">
              Create User
          </a-button>
          <a-table
            :data-source="users"
            :columns="columns"
            bordered
          >
            <span slot="first_name" slot-scope="first_name" :style="{ fontSize: '12px' }">
                {{ first_name || "NULL" }}
            </span>

            <span slot="last_name" slot-scope="last_name" :style="{ fontSize: '12px' }">
                {{ last_name || "NULL" }}
            </span>

            <span slot="email" slot-scope="email" :style="{ fontSize: '12px' }">
                {{ email || "NULL" }}
            </span>

            <span slot="role" slot-scope="role" :style="{ fontSize: '12px' }">
                {{ role || "NULL" }}
            </span>

            <span slot="creation_date" slot-scope="creation_date" :style="{ fontSize: '12px' }">
                {{ creation_date || "NULL" }}
            </span>

            <!-- <span slot="action" slot-scope="record">
                <a-dropdown :trigger="['click']">
                  <span class="ant-drop-down-link" :style="{ cursor: 'pointer' }">
                      <a-button :loading="actionLoading[`action${record['_id']}`]" title="More..." :style="{ marginRight: '4px' }">
                        <a-icon v-if="!actionLoading[`action${record['_id']}`]" type="more" style="color: rgba(0,0,0,.25)" />
                      </a-button>
                  </span>

                  <a-menu slot="overlay">

                    <a-menu-item>
                      <span @click.prevent="toUpdateTrip(record)">
                        <a-icon type="eye" style="color: rgba(0,0,0,.25)" />
                        update
                      </span>
                    </a-menu-item>
                </a-menu>
              </a-dropdown>
            </span> -->

            <div
                slot="filterDropdown"
                slot-scope="{
                setSelectedKeys,
                selectedKeys,
                confirm,
                clearFilters,
                column,
                }"
                style="padding: 8px"
            >
                <a-input
                v-ant-ref="(c) => (searchInput = c)"
                :placeholder="`Search ${column.title}`"
                :value="selectedKeys[0]"
                style="width: 188px; margin-bottom: 8px; display: block;"
                @change="
                    (e) => setSelectedKeys(e.target.value ? [e.target.value] : [])
                "
                @pressEnter="
                    () => handleSearch(selectedKeys, confirm, column.dataIndex)
                "
                />
                <a-button
                type="primary"
                icon="search"
                size="small"
                style="width: 90px; margin-right: 8px"
                @click="() => handleSearch(selectedKeys, confirm, column.dataIndex)"
                >
                Search
                </a-button>
                <a-button
                size="small"
                style="width: 90px"
                @click="() => handleReset(clearFilters)"
                >
                    Reset
                </a-button>
            </div>

            <a-icon
                slot="filterIcon"
                slot-scope="filtered"
                type="search"
                :style="{ color: filtered ? '#108ee9' : undefined }"
            />
            <template slot="customRender" slot-scope="text, record, index, column">
                <span v-if="searchText && searchedColumn === column.dataIndex">
                <template
                    v-for="(fragment, i) in text
                    .toString()
                    .split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
                >
                    <mark
                    v-if="fragment.toLowerCase() === searchText.toLowerCase()"
                    :key="i"
                    class="highlight"
                    >{{ fragment }}</mark
                    >
                    <template v-else>{{ fragment }}</template>
                </template>
                </span>
                <template v-else>
                {{ text }}
                </template>
            </template>
          </a-table>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from "vuex"
  import CreateUser from "../../data_entry/users/CreateUser"
  // import CreateTrip from "../../data_entry/trips/CreateTrip"
//   import UpdateEmployee from "../../data_entry/update/UpdateEmployee"

//   const trips = [
//     {
//       key: "1",
//       conductor: {
//         first_name: "John",
//         last_name: "Doe"
//       },
//       fleet:{
//           fleet_number: 1275,
//           fleet_capacity: 18
//       },
//       departure_time: "2022-03-09 08:36:45",
//       arrival_time: "NOT_SET",
//       trip_origin: "Westgate",
//       trip_destination: "City",
//       head_count: 13,
//       surplus_count: 5,
//       creation_date: "2022-03-09 08:36:45",
//     },

//     {
//       key: "2",
//       conductor: {
//         first_name: "Foo",
//         last_name: "Bar"
//       },
//       fleet:{
//           fleet_number: 1275,
//           fleet_capacity: 18
//       },
//       departure_time: "2022-03-09 08:36:45",
//       arrival_time: "NOT_SET",
//       trip_origin: "Westgate",
//       trip_destination: "City",
//       head_count: 13,
//       surplus_count: 5,
//       creation_date: "2022-03-09 08:36:45",
//     },
//   ];

  export default {
    name: "Users",

    components: {
      CreateUser,
    },

    data() {
      return {
        loading: false,
        createBtnDisabled: true,
        createUserVisible: false,
        actionButton: "action",
        actionLoading: false,
        users: [],
        searchText: "",
        searchInput: null,
        searchedColumn: "",
        
        // Table Columns
        columns: [
          {
            title: "First Name",
            dataIndex: "first_name",
            scopedSlots: {
              filterDropdown: "filterDropdown",
              filterIcon: "filterIcon",
              customRender: "first_name",
            },

            // Last name is failing to search!!!
            onFilter: (value, record) =>
              (record.first_name !== undefined && record.first_name !== null) &&
              (record.first_name || record.first_name)
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
            onFilterDropdownVisibleChange: (visible) => {
              if (visible) {
                setTimeout(() => {
                  this.searchInput.focus();
                }, 0);
              }
            },
          },

          {
            title: "Last Name",
            dataIndex: "last_name",
            scopedSlots: {
              filterDropdown: "filterDropdown",
              filterIcon: "filterIcon",
              customRender: "last_name",
            },

            // Last name is failing to search!!!
            onFilter: (value, record) =>
              (record.last_name !== undefined && record.last_name !== null) &&
              (record.last_name || record.last_name)
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
            onFilterDropdownVisibleChange: (visible) => {
              if (visible) {
                setTimeout(() => {
                  this.searchInput.focus();
                }, 0);
              }
            },
          },

          {
            title: "Email",
            dataIndex: "email",
            scopedSlots: {
              filterDropdown: "filterDropdown",
              filterIcon: "filterIcon",
              customRender: "email",
            },

            // Last name is failing to search!!!
            onFilter: (value, record) =>
              (record.email !== undefined && record.email !== null) &&
              (record.email || record.email)
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
            onFilterDropdownVisibleChange: (visible) => {
              if (visible) {
                setTimeout(() => {
                  this.searchInput.focus();
                }, 0);
              }
            },
          },

          {
            title: "Role",
            dataIndex: "role",
            scopedSlots: {
              filterDropdown: "filterDropdown",
              filterIcon: "filterIcon",
              customRender: "role",
            },

            onFilter: (value, record) =>
              (record.role !== undefined && record.role !== null) &&
              record.role
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
            onFilterDropdownVisibleChange: (visible) => {
              if (visible) {
                setTimeout(() => {
                  this.searchInput.focus();
                }, 0);
              }
            },
          },

          {
            title: "Creation Date",
            dataIndex: "creation_date",
            scopedSlots: {
              filterDropdown: "filterDropdown",
              filterIcon: "filterIcon",
              customRender: "creation_date",
            },

            onFilter: (value, record) =>
              (record.creation_date !== undefined && record.creation_date !== null) &&
              record.creation_date
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
            onFilterDropdownVisibleChange: (visible) => {
              if (visible) {
                setTimeout(() => {
                  this.searchInput.focus();
                }, 0);
              }
            },
          },

        //   {
        //     title: "Action",
        //     dataIndex: "",
        //     key: "x",
        //     scopedSlots: {
        //       customRender: "action"
        //     },
        //   },
        ],
      };
    },

    methods: {
      ...mapActions(["fetchUsers"]),

      openCreateUser(){
        this.createUserVisible = true
      },

      hideCreateUser(){
        this.createUserVisible = false
      },

      handleSearch(selectedKeys, confirm, dataIndex) {
        confirm();
        this.searchText = selectedKeys[0];
        this.searchedColumn = dataIndex;
      },

      handleReset(clearFilters) {
        clearFilters();
        this.searchText = "";
      },
    },

    async created(){
      this.loading = true
      await this.fetchUsers()
      this.users = this.getUsers
      this.loading = false
    },

    // mounted(){
    //   if(this.getActiveUser["role"]["role_name"] === "Manager"){
    //     this.createBtnDisabled = false
    //   }

    //   else{
    //     this.createBtnDisabled = true
    //   }
    // },

    computed: mapGetters(["getUsers"])
  }
</script>

<style scoped>
  .highlight {
    background-color: rgb(255, 192, 105);
    padding: 0px;
  }
</style>
