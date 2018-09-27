/// https://github.com/30-seconds/30-seconds-of-code

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

///

export default function layout(direction, str) {
    const result = {}
    const chunks = chunk(str.split(' '), 2)
    chunks.map(([el, spacing], idx) => {
        if (spacing === undefined) return

        if (direction === 'row') {
            result[` > :nth-child(${chunks.length}n+${idx + 1})`] = {
                marginRight: spacing
            }
        } else if (direction === 'column') {
            result[` > :nth-child(${chunks.length}n+${idx + 1})`] = {
                marginBottom: spacing
            }
        }
    })
    return result
}