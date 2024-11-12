// Part 2
const appendTo = document.getElementById("section");

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);

  data.forEach((data) => {
    const div = document.createElement("div");
    const text = document.createElement("p");

    // Plus icon
    const plus = document.createElement("i");

    plus.className = "fa-regular fa-square-plus";

    div.className = "title";
    text.className = "text";

    div.textContent = `${data.id}. ${data.title}`;

    div.appendChild(plus);

    text.textContent = data.body;

    if (data.id % 2 === 0) {
      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "gray";
      });

      div.addEventListener("mouseout", () => {
        div.style.backgroundColor = "lightblue";
      });

      div.style.backgroundColor = "lightblue";
    } else {
      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "gray";
      });

      div.addEventListener("mouseout", () => {
        div.style.backgroundColor = "honeydew";
      });
      div.style.backgroundColor = "honeydew";
    }

    appendTo.appendChild(div);
    appendTo.appendChild(text);

    text.classList.add("hidden");

    div.addEventListener("click", () => {
      text.classList.toggle("active");

      plus.classList.toggle("fa-square-plus");
      plus.classList.toggle("fa-square-minus");
    });
  });
}
getData();
