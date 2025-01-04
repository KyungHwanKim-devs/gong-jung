export const scrollTo = (id: string) => {
  const element = document.getElementById(id);

  if (element) {
    const elementOffsetTop = element.offsetTop;
    const elementHeight = element.clientHeight;
    const windowHeight = window.innerHeight;

    window.scrollTo({
      top: elementOffsetTop - windowHeight / 2 + elementHeight / 2,
      behavior: "smooth",
    });
  }
};
