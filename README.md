# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Cloning](#cloning)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![Alt Text](./public/design/desktop-design-empty.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## Cloning

Clone repo to preferred directory.
Navigate to project directory on terminal, run:

### `npm install`

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I got good practice on using React hooks,especially useState and useEffect. Knowing when and how to use conditional rendering. Overall, Figuring out the logic for this project was fun.


Struggled with having NaN and Infinity show up as results, Just thought to try this in `Calculate.jsx`. It worked! 🤣

```js
<span>
  ${isNaN(amount) || !isFinite(amount) ? "0.00" : amount}
</span>
```

### Continued development

Going forward, I intend to get more practice on react hooks, explore more react concepts. Improve my code and file structuring. 

## Author

- Website - [UmesiQueen]](https://umesiqueen.github.io/UmesiQueen/)
- Frontend Mentor - [@UmesiQueen](https://www.frontendmentor.io/profile/UmesiQueen)
- Twitter - [@UmesiQueen](https://www.twitter.com/UmesiQueen)
