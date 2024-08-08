<template>
  <a-row id="GlobalHeader" style="margin-bottom: 16px" align="center">
    <a-col flex="100px"></a-col>
    <a-col flex="auto">
      <div>
        <a-menu
          mode="horizontal"
          :selected-keys="selectedKeys"
          @menu-item-click="doMenuClick"
        >
          <a-menu-item
            key="0"
            :style="{ padding: 0, marginRight: '38px' }"
            disabled
          >
            <div class="title-bar">
              <img class="logo" src="../assets/SystemLogo.jpg" />
              <div>YU Oline Judge</div>
            </div>
          </a-menu-item>
          <a-menu-item v-for="item in routes" :key="item.path">
            {{ item.name }}
          </a-menu-item>
        </a-menu>
      </div>
    </a-col>
    <a-col flex="100px">
      <div>{{ store.state.user?.loginUser?.userName ?? "未登录" }}</div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "@/router/routes";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from "vuex";

const router = useRouter(); //vue-router组件
const doMenuClick = (Key: string) => {
  router.push({
    path: Key,
  });
};
//默认主页
const selectedKeys = ref(["/"]); //动态变量
//路由选中后更行选择的菜单项,激活菜后高亮 to:为要跳转的路径
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});
//通过vuex 获取状态变量
const store = useStore();
//测试状态管理
setTimeout(() => {
  store.dispatch("user/getLoginUser", {
    userName: "yupi",
    role: "admin",
  });
});
</script>

<!-- Add  "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.logo {
  height: 45px;
}
</style>
