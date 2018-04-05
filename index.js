function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div.target')
}

function deepestChild( ){
   var node = document.getElementById("grand-node")
   var nextnode = node.children[0]
   while (nextnode) {
     node = nextnode
     nextnode = node.children[0]
   }
   return node
}

function increaseRankBy(n) {
  var rank = document.querySelectorAll('ul.ranked-list li')
  
  for (let i = 0; i < rank.length; i++) {
    rank[i].innerHTML = n+parseInt(rank[i].innerHTML) 
  }
}