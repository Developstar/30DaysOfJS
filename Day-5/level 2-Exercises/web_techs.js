export const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  // In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

  switch(webTechs){
    case  webTechs.includes('Sass') :
    console.log('Sass is a CSS preprocess')
    break

    default:
      webTechs.push('Sass')
  }

  console.log(webTechs)








export default webTechs;

