# 01 Desafío

## HTML

```html
<!doctype html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Hello, world!</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lexend+Deca&display=swap"
        rel="stylesheet">

    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <main class="card">
        <div class="card-col-img"></div>
        <div class="card-col-text">
            <div class="card-body">
                <h5 class="card-title">Get <span class="title-morado">insights</span> that help your business grow.</h5>
                <div class="card-text">Discover, ipsum dolor sit amet consectetur adipisicing elit. Omnis
                    aspernatur dolorem fuga quis.
                </div>
                <div class="card-footer">
                    <div>
                        <h3 class="footer-title">10k+</h3>
                        <p class="footer-text">Companies</p>
                    </div>
                    <div>
                        <h3 class="footer-title">10k+</h3>
                        <p class="footer-text">Companies</p>
                    </div>
                    <div>
                        <h3 class="footer-title">10k+</h3>
                        <p class="footer-text">Companies</p>
                    </div>
                </div>
            </div>
        </div>
    </main>

</body>

</html>
```

## CSS

```css
:root {
    --Morado-intenso: hsl(277, 64%, 61%);
    --Very-dark-blue: hsl(244, 37%, 7%);
    --Dark-blue: hsl(244, 38%, 16%);
    --White-gray: hsla(0, 0%, 100%, 0.75);
}

html {
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}


body {
    font-family: 'Inter', sans-serif;
    background-color: var(--Very-dark-blue);
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    max-width: 390px;
    background-color: var(--Dark-blue);
    overflow: hidden;
    border-radius: 0.5em;
    color: white;
    margin: 1em;
}

.card-col-img {
    background-image: url('../images/image-header-mobile.jpg');
    background-color: hsl(277, 64%, 61%);
    background-blend-mode: multiply;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 350px;
}

.card-img-top {
    width: 100%;
    /* z-index: 2; */
}

.card-body {
    margin: 2em;
    text-align: center;
}

.card-title {
    margin-top: 0;
    margin-bottom: 1em;
    font-size: 2rem;
    font-weight: 700;
}

.title-morado {
    color: var(--Morado-intenso);
}

.card-text {
    color: var(--White-gray);
    margin-bottom: 1em;
}

.card-footer {
    margin-bottom: 0;
}

.footer-title {
    margin-bottom: 0.5em;
    font-weight: 700;
    font-size: 1.5rem;
}

.footer-text {
    font-family: 'Lexend Deca', sans-serif;
    color: var(--White-gray);
    text-transform: uppercase;
    font-size: 0.8rem;
}

@media (min-width: 768px) {

    body {
        height: 100vh;
    }

    .card {
        display: flex;
        max-width: 1000px;
    }

    .card-col-img {
        background-image: url('../images/image-header-desktop.jpg');
        height: auto;
        order: 2;
        flex: 1 1 0;
    }

    .card-col-text {
        order: 1;
        flex: 1 1 0;
    }

    .card-footer {
        display: flex;
        justify-content: space-between;
    }
}
```