document.getElementById("cart-button").addEventListener("click", function() {
    document.getElementById("cart").classList.toggle("hidden")
})

//Funksjon for produkt opplisting:
function fetchProducts() {
    let productHTML = ""

    products.map(p => productHTML += `<article class="product-card">
                <img src="website_images/PROD_${p.imagefile}" alt="PRODUKTNAVN" />
                <a href="#">${p.category}</a>
                <h3>${p.title}</h3>
                <p>Kr. ${p.price},-</p>
                <button onClick="">Legg til handlevogn</button>
            </article>`)

            document.getElementById("product-list").innerHTML = productHTML
}

fetchProducts()