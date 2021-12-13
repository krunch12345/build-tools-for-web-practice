const mediaItem = (node, children, title) => {
    const item = `
        <div class='card'>
            ${children}
            <span class='card-title'>${title}</span>
        </div>
    `

    return node.insertAdjacentHTML('beforeend', item)
}

export const imageItem = (node, title, src) => {
    const children = `
        <img src='${src}' alt='${title}' height='200px'>
    `
    mediaItem(node, children, title)
}

export const audioItem = (node, title, src) => {
    const children = `
        <audio src='${src}' controls></audio>
    `
    mediaItem(node, children, title)
}

export const videoItem = (node, title, src) => {
    const children = `
        <video src='${src}' controls height='200px'></video>
    `
    mediaItem(node, children, title)
}
