/**
 * @export
 * @param {Object} classesObj { ... }
 * @returns {string} Concatened classes array into string
 *
 * @example
 * // if "fill" value are defined (!== 'undefined'), the class "button--fill" in key will be returned with final result
 * mapClassList({
 *   [`button--fill`]: fill,
 * })
 */
export function mapClassList(classesObj = {}) {
  return Object.entries(classesObj)
    .map(([klass, prop]) => {
      return (typeof prop !== 'undefined' && typeof prop !== 'number' && prop !== false && prop !== 'default') ? klass : false
    })
    .filter(item => (item !== false))
    .join(' ')
}


/**
 * @export
 * @returns {boolean}
 */
export function canUseDOM() {
  const window = window || global.window
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  )
}
