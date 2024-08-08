<template>
  <div id="basicLayout">
    <a-layout style="height: 400px">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://www.code-nav.cn/" target="_blank">
          编程导航与知识星球 by me
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style>
#basicLayout .header {
  margin-bottom: 16px;
  box-shadow: #eee 4px 6px 7px;
}

#basicLayout .content {
  background: linear-gradient(to right, #bbb, #fff);
  margin-bottom: 16px;
}

#basicLayout .footer {
  background: #efefef;
  padding: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script>
import { defineComponent } from "vue";
import GlobalHeader from "@/components/GlobalHeader.vue";

export default defineComponent({
  components: { GlobalHeader },
});
</script>
