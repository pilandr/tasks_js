const path = "/users/download/index.html"

const isHtml = path => {
  const searchPathEnd = ".html";
  const pathEnd = path.slice(-5);

  return searchPathEnd==pathEnd;
}

console.log(isHtml(path));