export default function Header(props) {
    return(
        <>
        <h1>
            {props.title}
        </h1>
        <h2>
            {props.subTitle}
        </h2>
        </>
    )
}