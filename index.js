import styles from 'stage0/styles'

/// https://github.com/30-seconds/30-seconds-of-code

const isObject = obj => obj === Object(obj);

const deepClone = obj => {
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  );
  return Array.isArray(obj) ? (clone.length = obj.length) && Array.from(clone) : clone;
};

///

export const strictCSS = stylesObj => {
    let needToLogStyles = false
    const validateProp = (prop, c) => {
        if (prop.match(/^margin/)) {
            console.error(`Margins are not allowed. Use container style instead. Look at '${c}.${prop}'`)
            needToLogStyles = true
            return false
        }
        return true
    }

    Object.keys(stylesObj).map(c => {
        Object.keys(stylesObj[c]).map(prop => {
            if (!isObject(stylesObj[c][prop])) {
                if (!validateProp(prop, c)) delete stylesObj[c][prop]
            }
        })
    })

    if (needToLogStyles) console.debug(deepClone(stylesObj), stylesObj)

    return styles(stylesObj)
}