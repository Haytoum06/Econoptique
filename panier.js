const themeToggle = document.getElementById('themeToggle');
        const body = document.body;

        // Récupération du thème sauvegardé ou thème par défaut
        const savedTheme = localStorage.getItem('theme') || 'light';
        
        // Application du thème initial
        if (savedTheme === 'dark') {
            body.setAttribute('data-theme', 'dark');
            themeToggle.classList.add('active');
        }

        // Gestionnaire de clic pour le toggle
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            // Application du nouveau thème
            if (newTheme === 'dark') {
                body.setAttribute('data-theme', 'dark');
                themeToggle.classList.add('active');
            } else {
                body.removeAttribute('data-theme');
                themeToggle.classList.remove('active');
            }
            
            // Sauvegarde du thème
            localStorage.setItem('theme', newTheme);
        });

        // Animation des boutons d'ajout au panier
        const addToCartButtons = document.querySelectorAll('.btn-primary');
        let cartTotal = 0;
        const cartTotalElement = document.querySelector('.cart-total');

        addToCartButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                // Animation du bouton
                button.classList.add('btn-added');
                button.textContent = 'Ajouté !';
                
                // Calcul du prix (simulation)
                const priceText = button.parentElement.querySelector('.product-price').textContent;
                const price = parseFloat(priceText.replace('€', '').replace(',', '.'));
                cartTotal += price;
                cartTotalElement.textContent = `Total: ${cartTotal.toFixed(2).replace('.', ',')} €`;
                
                // Retour à l'état normal après 2 secondes
                setTimeout(() => {
                    button.classList.remove('btn-added');
                    button.textContent = 'Ajouter au panier';
                }, 2000);
            });
        });