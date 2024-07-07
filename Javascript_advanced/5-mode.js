function changeMode(size, weight, transform, background, color) {
    return () => {
        document.body.style.fontStyle = `${size}px`;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
      }
    }

function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    const paragraph = document.createElement('p');
    const text = document.createTextNode("Welcome Holberton!");
    paragraph.appendChild(text);
    document.body.appendChild(paragraph);

    const spookyButton = document.createElement('button');
    spookyButton.innerHTML = 'Spooky';
    spookyButton.addEventListener('click', spooky);
    document.body.appendChild(spookyButton);

    const darkModeButton = document.createElement('button');
    darkModeButton.innerHTML = 'Dark mode';
    darkModeButton.addEventListener('click', darkMode);
    document.body.appendChild(darkModeButton);

    const screamModeButton = document.createElement('button');
    screamModeButton.innerHTML = 'Scream mode';
    screamModeButton.addEventListener('click', screamMode);
    document.body.appendChild(screamModeButton);
}

main();