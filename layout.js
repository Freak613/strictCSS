export const layout = (direction, str) => {
    const result = {}
    const chunks = chunk(str.split(' '), 2)
    chunks.map(([el, spacing], idx) => {
        if (spacing === undefined) return

        if (direction === 'row') {

        } else if (direction === 'column') {
            result[` > :nth-child(${chunks.length}n+${idx + 1})`] = {
                marginBottom: spacing
            }            
        }
    })
    return result
}