"use strict"

var numeric = require("numeric")

function barycentric(simplex, point) {
  var A = numeric.transpose(simplex)
  A.push(numeric.rep([simplex.length], 1.0))
  var b = new Array(point.length+1)
  for(var i=0, il=point.length; i<il; ++i) {
    b[i] = point[i]
  }
  b[point.length] = 1.0
  return numeric.solve(A, b)
}

module.exports = barycentric