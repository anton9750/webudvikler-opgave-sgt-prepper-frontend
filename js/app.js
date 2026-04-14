import renderHeader from "./views/partials/headerView.js"
import { initRouter } from "./router/router.js"
import renderNav from "./views/partials/navView.js"
import renderFooter from "./views/partials/footerView.js"

const initApp = () => {
  renderHeader()
  renderNav()
  renderFooter()
  initRouter()
}

initApp()