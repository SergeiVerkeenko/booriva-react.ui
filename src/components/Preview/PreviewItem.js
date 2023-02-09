import style from './Preview.module.css'

function PreviewItem({ logo, paragraph, image }) {
    return (
        <div className={style['section']}>
            <div className={style[image]}> </div>
            <div className={style['paragraf']}>
                <h2>{logo}</h2>
                <p>{paragraph}</p>

            </div>
        </div>
    )
}

export default PreviewItem