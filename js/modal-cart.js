document.addEventListener("alpine:init",()=>{Alpine.data("ThemeModule_ModalCart",({openOnAddToCart})=>({init(){openOnAddToCart===!0&&document.body.addEventListener("shapes:modalcart:afteradditem",()=>{Alpine.store("modals").open("cart")}),Alpine.store("modals").register("cart","rightDrawer")}}))});
//# sourceMappingURL=/cdn/shop/t/3/assets/modal-cart.js.map?v=136095141966072940001709232268
