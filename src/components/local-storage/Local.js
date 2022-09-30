const addtodb = t => {
    const quantity = localStorage.getItem(t.target.innerText)
    if (quantity) {
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(t.target.innerText, newQuantity)
    }
    else {
        localStorage.setItem(t.target.innerText, 1)
    }

}
export { addtodb }