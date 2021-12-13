import { imageItem, audioItem, videoItem } from "../components/mediaItem"
import { images, audio, video } from "../constants/media"

const content = document.getElementById('content')

if (content) {
    images.map(
        image => (
            imageItem(content, image.title, image.src)
        )
    )

    audio.map(
        audioEl => (
            audioItem(content, audioEl.title, audioEl.src)
        )
    )

    video.map(
        videoEl => (
            videoItem(content, videoEl.title, videoEl.src)
        )
    )
}
