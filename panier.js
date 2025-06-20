const themeToggle = document.getElementById('themeToggle');
        const body = document.body;

        const savedTheme = localStorage.getItem('theme') || 'light';
        
        if (savedTheme === 'dark') {
            body.setAttribute('data-theme', 'dark');
            themeToggle.classList.add('active');
        }

        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            if (newTheme === 'dark') {
                body.setAttribute('data-theme', 'dark');
                themeToggle.classList.add('active');
            } else {
                body.removeAttribute('data-theme');
                themeToggle.classList.remove('active');
            }
            
            localStorage.setItem('theme', newTheme);
        });

        const addToCartButtons = document.querySelectorAll('.btn-primary');
        let cartTotal = 0;
        const cartTotalElement = document.querySelector('.cart-total');

        addToCartButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                button.classList.add('btn-added');
                button.textContent = 'Ajouté !';
                
                const priceText = button.parentElement.querySelector('.product-price').textContent;
                const price = parseFloat(priceText.replace('€', '').replace(',', '.'));
                cartTotal += price;
                cartTotalElement.textContent = `Total: ${cartTotal.toFixed(2).replace('.', ',')} €`;
                
                setTimeout(() => {
                    button.classList.remove('btn-added');
                    button.textContent = 'Ajouter au panier';
                }, 2000);
            });
        });
