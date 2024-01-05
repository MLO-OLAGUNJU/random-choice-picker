const tagsElement = document.querySelector("#tags");
const textAreaElement = document.querySelector("#textarea");
const theTagElement = document.querySelector("#tag");

// whenever i go to the page, the cursor will be always in the textarea
textAreaElement.focus();

textAreaElement.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key == "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomSelect();
  }
});

const createTags = (input) => {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsElement.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.textContent = tag;
    tagsElement.appendChild(tagEl);
  });
};

const randomSelect = () => {
  const times = 30;

  const interVal = setInterval(() => {
    const randomTag = pickRandomTag();
  }, 100);
};

const pickRandomTag = () => {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
};

const highlightTag = (tag) => {
  tag.classList.add(".highlight");
};

const highlightTag = (tag) => {
  tag.classList.add(".highlight");
};
