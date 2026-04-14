import { homeController } from "../controllers/homeController.js";
import { clearMain } from "../utils/index.js";

export function initRouter() {
    window.addEventListener("hashchange", handleRoute);
    window.addEventListener("load", handleRoute);
}

function handleRoute() {
    clearMain()

    const hash = window.location.hash || "#/";
    const cleanHash = hash.replace(/^#\/?/, "")
    const segments = cleanHash.split("/").filter(Boolean)

    if (segments.length === 0) {
        homeController();
        return;
    }

    document.querySelector("#root").innerHTML = `<h1 class="text-2xl font-bold">Side ikke fundet</h1>`;
}