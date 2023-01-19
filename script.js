function toggleMode() {
  // document = documento html
  const html = document.documentElement;

  /*
  // se ao clicarmos no switch já existir a tag LIGHT no nosso documento HTML
  // tiramos a tag do documento e quando clicarmos de novo, adicionamos ela. Isso se repete
  if (html.classList.contains("light")) {
    // se já tiver a tag LIGHT ele remove ela
    html.classList.remove("light");
  } else {
    // se não tiver, ele adiciona ela
    html.classList.add("light");
  }
  */

  // todo o codigo acima pode ser substituido por apenas essa linha, a funcionalidade sera a mesma
  html.classList.toggle("light");

  // mudando a imagem conforme o modo do app (dark / light)
  // pegamos onde nossa tag img, com o id #profile
  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    // setAttribute irá mudar o src da nossa tag img e o alt
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "Foto de Luigi Belanda acendendo uma vela, com uma capa da Ordem DeMolay");
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png");
    img.setAttribute("alt", "Foto de Luigi Belanda segurando a bandeira nacional, usando a capa da Ordem DeMolay e também seu óculos pessoal. Ao fundo aparecem outras pessoas e um pouco na frente do Luigi uma vela acessa");
  }
}
