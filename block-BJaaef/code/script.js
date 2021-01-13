/* <li>
          <div class="intro">
            <img src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-eddard-stark.jpg" alt="pic">
            <h2>Eddard Stark</h2>
          </div>
          <p>Some deeskdkfkdfln emjdrempe lkwmdekwml erjmepmel lwnelwn  sdnslj</p>
          <button>Learn More!</button>
        </li> */

let people = got.houses.map(house => house.people).flat();

let rootElement = document.querySelector('ul');

people.forEach(person => {
    let li = document.createElement('li');

    let div = document.createElement('div');
    div.classList.add('intro');

    let img = document.createElement('img');
    img.src = person.image;
    img.alt = person.name;

    let h2 = document.createElement('h2');
    h2.innerText = person.name;

    let p = document.createElement('p');
    p.innerText = person.description;

    let a = document.createElement('a');
    a.innerText = 'Learn More!';
    a.href = person.wikiLink;

    div.append(img, h2);

    li.append(div, p, a);

    rootElement.append(li);
});