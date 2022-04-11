export default function Article(props) {
    return (
        <>
            <h3>
                {props.date}
            </h3>
            <h1>
                {props.title}
            </h1>
            <img  className="image" src={props.img}></img>
            <a className="articleText">
                {props.article}
            </a>
        </>  
    )
}