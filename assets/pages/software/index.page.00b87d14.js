import { u as usePageContext } from "../../chunk-c9bff55b.js";
/* empty css                    */import { d as defineComponent, o as onMounted, t as createElementBlock, u as openBlock } from "../../chunk-ca2b0874.js";
const style = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.page",
  setup(__props) {
    onMounted(() => {
      const { urlPathname } = usePageContext();
      const url = `${"/ssg/"}${urlPathname}`;
      window.location.href = `/${url.split("/").filter((e) => e !== "").join("/")}/v0.2`;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("p", null, " Redirecting... ");
    };
  }
});
export {
  _sfc_main as default
};