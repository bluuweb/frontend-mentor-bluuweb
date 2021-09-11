# 01 Desafío

- [Stats preview card](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62)

## Ayudita
- [box-sizing](https://css-tricks.com/box-sizing/#universal-box-sizing-with-inheritance)
- [normalize.css](https://necolas.github.io/normalize.css/)
- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Fuentes
- [Fuente Inter](https://fonts.google.com/specimen/Inter) 400, 700
- [Fuente Lexend Deca](https://fonts.google.com/specimen/Lexend+Deca) 400

## Colors
#### Primary

- Very dark blue (main background): hsl(233, 47%, 7%)
- Dark desaturated blue (card background): hsl(244, 38%, 16%)
- Soft violet (accent): hsl(277, 64%, 61%)

#### Neutral

- White (main heading, stats): hsl(0, 0%, 100%)
- Slightly transparent white (main paragraph): hsla(0, 0%, 100%, 0.75)
- Slightly transparent white (stat headings): hsla(0, 0%, 100%, 0.6)

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## HTML

```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Preview Card</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lexend+Deca&display=swap"
        rel="stylesheet">

    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <main class="container">
        <div class="cards">
            <article class="card">
                <div class="card-col-img"></div>
                <div class="card-col-text">
                    <div class="card-body">
                        <h1 class="card-title">Get ipsum <span class="title-violet">dolor</span> sit amet.</h1>
                        <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
                            cupiditate
                            quae amet debitis, minima quia quis odio impedit delectus? Veritatis!</p>
                        <div class="card-footer">
                            <div>
                                <h2 class="footer-title">10k+</h2>
                                <p class="footer-text">companies</p>
                            </div>
                            <div>
                                <h2 class="footer-title">10k+</h2>
                                <p class="footer-text">companies</p>
                            </div>
                            <div>
                                <h2 class="footer-title">10k+</h2>
                                <p class="footer-text">companies</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </main>
</body>

</html>
```

## CSS

```css
:root {
    --Very-dark-blue: hsl(233, 47%, 7%);
    --Dark-desaturated-blue: hsl(244, 38%, 16%);
    --Soft-violet: hsl(277, 64%, 61%);
    --White: hsl(0, 0%, 100%);
    --Slightly-transparent-white: hsla(0, 0%, 100%, 0.75);
    --Slightly-transparent-white-dos: hsla(0, 0%, 100%, 0.6);
}

html {
    box-sizing: border-box;
}

*,
*::after,
*::before {
    box-sizing: inherit;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--Very-dark-blue);
}

.container {
    width: 90%;
    margin: 3em auto;
}

@media(min-width: 768px) {

    .container {
        margin-top: 0;
        margin-bottom: 0;
    }
}

.cards {
    display: flex;
    justify-content: center;
}

@media(min-width: 768px) {

    .cards {
        height: 100vh;
        display: flex;
        align-items: center;
    }
}

.card {
    overflow: hidden;
    max-width: 400px;
    border-radius: 1em;
    background-color: var(--Dark-desaturated-blue);
    color: var(--White);
}

@media(min-width: 768px) {
    .card {
        display: flex;
        max-width: 1000px;
    }
}

.card-col-img {
    background-image: url('../img/image-header-mobile.jpg');
    background-color: var(--Soft-violet);
    background-blend-mode: multiply;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 300px;
}

@media(min-width: 768px) {
    .card-col-img {
        background-image: url('../img/image-header-desktop.jpg');
        order: 2;
        flex: 1;
        height: auto;
    }

    .card-col-text {
        order: 1;
        flex: 1;
    }
}

.card-body {
    padding-left: 2em;
    padding-right: 2em;
    text-align: center;
}

@media(min-width: 768px) {
    .card-body {
        padding-top: 3em;
        padding-bottom: 3em;
    }
}

.card-title {
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-weight: 700;
}

.title-violet {
    color: var(--Soft-violet);
}

.card-text {
    color: var(--Slightly-transparent-white)
}

.card-footer {
    margin-bottom: 2rem;
}

@media(min-width: 768px) {
    .card-footer {
        display: flex;
        justify-content: space-between;
    }
}

.footer-title {
    color: var(--White);
    margin-bottom: .2em;
    font-weight: 700;
}

.footer-text {
    font-family: 'Lexend Deca', sans-serif;
    margin-top: 0;
    color: var(--Slightly-transparent-white);
    text-transform: uppercase;
    font-size: .8rem;
    letter-spacing: 1px;
}

/*
https://codesandbox.io/s/card-flexbox-flex-grow-shrink-basis-jxt89?file=/css/style.css:932-1354

flex: flex-grow | flex-shrink | flex-basis

flex-grow: 1; Las cajas crecen para utilizar todo el tamaño disponible de forma horizontal.
En este caso crecen de manera proporcional.
(flex: 2 1 200px; crecería el doble que el resto.)

flex-shrink: 1; El item puede contraerse
shrink y grow son proporciones.

flex-basis: 200px; Tamaño de la caja.

flex: 1; es igual a flex: 1 1 0;
flex: auto; es igual a flex: 1 1 auto;
*/
```