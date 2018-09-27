# strictCSS

Given too much flexibility with CSS, sometimes it's hard to argue about existence of one or another CSS-spec property.
This project started of thinking about `margin` property. Rather than styling given element, it looks like it's trying to fix parent layout. And it's definitely container's job to align elements and spacing them.

So, let's try to see what happen if we try to create more stricted, opinionated approach on CSS.

These tools utilizes [styles](https://github.com/Freak613/stage0) CSS-in-JS utility and generate styles-friendly code for it.

## strictCSS

```javascript
import strictCSS from 'strictcss'

const styles = strictCSS({
    container: {
        display: 'flex',
        flexDirection: 'row',
        ' > div': {
            marginTop: '10px'
        }
    },
    item: {
        marginTop: '10px'
    }
})
// This will cut marginTop property of `item` style and print error in the console.
// Whereas it'll allow margin properties for nested styles, to allow container to style children properly.
// Except that, it works similar to `styles`
```

## layout

```javascript
import layout from 'scrictcss/layout'

// Used to generate spacing for container children
// As it turns out that neither CSS-grid nor Flexbox are able to give individual per-row/column spacing for content 

layout('column', '* 5px *')

// will produce styling for container
// {
//     ' > :nth-child(2n+1)': {
//         marginBottom: '5px'
//     }
// }
```