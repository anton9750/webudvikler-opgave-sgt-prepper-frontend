export const render = (targetid, htmlelement, cleartarget = true) => {
    const target = document.getElementById(targetid);
    if (cleartarget) {
        target.innerHTML = '';
    }
    target.appendChild(htmlelement);
};