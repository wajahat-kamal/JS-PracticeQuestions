const container = document.getElementById("container")

async function getData() {
    try {
        const data = await fetch("https://dummyjson.com/products/")

        const productsData = await data.json()
        const products = productsData.products
        console.log(products);

        if (!data.ok) {
            throw new Error("Network response was not ok");
        }


        products.forEach((product) => {
            const div = document.createElement("div")
            div.classList.add("card")
            div.innerHTML = `
            <img src=${product.thumbnail} alt=${product.title} class="cardImage" />
            <h1>${product.title}</h1>
            <p>${product.description}</p>
            <div>
                <h2>${product.category}</h2>
                <h2>$${product.price}</h2>
             </div>
            `
            container.append(div)
        });
    } catch (error) {
        console.log(error);
    }
}
getData()