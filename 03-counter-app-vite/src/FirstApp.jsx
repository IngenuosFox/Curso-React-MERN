import PropTypes from "prop-types"

export const FirstApp = ({title, subTitle, name}) => {

    return (
        <>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <h1 data-testid="test-title"> {title} </h1>
            <p>{subTitle}</p>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    name: "Jonathan Raya Rios",
    subTitle: "No hay subtitulo",
    // title: "No hay título",
}