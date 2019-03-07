export { $parent, $delegate }

// copied from: https://github.com/paulirish/es-modules-todomvc/blob/master/docs/helpers.js
function $delegate(target, selector, type, handler) {
    var useCapture = type === 'blur' || type === 'focus'
    target.addEventListener(type, dispatchEvent, useCapture)
  
    function dispatchEvent(event) {
      var targetElement = event.target
      var potentialElements = target.querySelectorAll(selector)
      var hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0
      if (hasMatch) {
        handler.call(targetElement, event)
      }
    }
}

// Find the element's parent with the given tag name:
// $parent(qs('a'), 'div');
function $parent(element, tagName) {
    if (!element.parentNode) {
      return undefined
    }
    if (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) {
      return element.parentNode
    }
    return $parent(element.parentNode, tagName)
}