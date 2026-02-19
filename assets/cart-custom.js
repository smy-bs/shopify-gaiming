// assets/cart-custom.js

document.addEventListener('DOMContentLoaded', () => {
  // 장바구니 버튼 클릭 감지
  const addToCartButtons = document.querySelectorAll('[name="add"]');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      const form = button.closest('form');
      const formData = new FormData(form);

      fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        alert(`${data.title} added to cart!`);
      })
      .catch(error => console.error('Error:', error));
    });
  });
});
