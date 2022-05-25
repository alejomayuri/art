import './ObraDisplay.css'

export default function ObraDisplay({ url }) {
    return (
        <iframe src={url} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
    )
}