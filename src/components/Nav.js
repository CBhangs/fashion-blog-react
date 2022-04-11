export default function Nav(props) {
    return (
        <div className="navBar">
        {
            props.navBar.map((item) => {
                return (
                    <a>{item}</a>
                )
            })
        }
        </div>
    )
}