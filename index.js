
function wrapAdjective(visualFlair) {
  return function(adj = 'special') {
    return `You are ${adj}${visualFlair}!`
  }
}