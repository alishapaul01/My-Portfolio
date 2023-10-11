import './Image.css'

const Image=(props)=>{
    return (
        <div className='project-img'>
            <div className='heading'>
                <h1>{props.heading}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    )
}
export default Image;