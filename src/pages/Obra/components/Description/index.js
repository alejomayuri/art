import './Description.css'

export default function ObraDescription({ text }) {
    return (
        <div className="op-description">
            <div className="op-description-content">
                <p>{text}</p>
            </div>
        </div>
    );
}