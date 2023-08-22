function toggleMode() {
  const html = document.documentElement

  html.classList.toggle('light')

  //pegar a imagem
  const img = document.querySelector("#profile img")

  //substituir a imagem
  //se tiver light mode, adicionar a imagem light
  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
    //se tiver sem light mode, manter a imagem normal
  } else {
    img.setAttribute('src', './assets/Avatar.png')
  }

  //substituir o texto alternativo
  //se tiver light mode, deixar o texto alternativo de um jeito
  if(html.classList.contains('light')) {
    img.setAttribute('alt', 'Foto de Lucca Bonatto usando uma camiseta e um óculos')
    //se tiver sem light mode, manter o texto alternativo de outro jeito
  } else {
    img.setAttribute('alt', 'Foto animada de Lucca Bonatto usando uma blusa preta e um óculos')
  }

}