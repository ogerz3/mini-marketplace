const productsList = document.getElementById('product-list');

fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';

      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" />
        <h4>${product.title}</h4>
        <p>$${product.price}</p>
        <button>Add to cart</button>
      `;

      card.querySelector('button').addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('add-to-cart', {
          detail: product
        }));
      });

      productsList.appendChild(card);
    });
  })
  .catch(err => console.error(err));
