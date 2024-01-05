const tagsElement = document.querySelector("#tags");
const textAreaElement = document.querySelector("#textarea");
const theTagElement = document.querySelector("#tag");

// whenever i go to the page, the cursor will be always in the textarea
textAreaElement.focus();

textAreaElement.addEventListener("keyup", (e) => {
  createTags(e.target.value);
});

const createTags = (input) => {
  const tags = input.split(",");
  console.log(tags);
};
