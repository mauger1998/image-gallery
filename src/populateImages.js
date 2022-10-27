function populateImages() {
    const listItems = document.querySelectorAll("li");
    let listItemsArray = Array.from(listItems);
    listItemsArray.forEach(item => {
        let index = listItemsArray.indexOf(item);
        let image = document.createElement("img");
        image.setAttribute("id", `image${index}`);
        item.appendChild(image)

    })
}

export { populateImages }