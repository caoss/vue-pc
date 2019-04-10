<template>
  <div class="about">
    <Nav/>
    <h1>This is an about page</h1>

    <ol>
        <li v-for="item in lists" v-bind:key="item.pname">
           <p>{{ item.pname }}</p> 
        </li>
      </ol>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "index",
  data() {
    return {
    };
  },
  components: {
    Nav
  },
  created() {
    this.getData();
  },
  methods: {
    //在组件中分发 Action
    // ...mapActions([
    //   "getList" //将this.login映射为 this.$store.dispatch('login')，触发store中actions-login方法
    // ]),
    ...mapActions(
      //带有命名空间的写法、namespace:true
      "list",
      {
        getList: "getList"
      }
    ),
    // 登录操作
    getData() {
      this.getList({ pageNo: 1, pageSize: 10 });
    }
  },
  computed: {
    ...mapGetters(
      //带有命名空间的写法
      "list",
      {
        lists: "list",
        total: "total"
      }
    )
    // ...mapGetters(["name"])
  }
};
</script>