import PropTypes from 'prop-types'

function Header(props) {

    const headerStyles = {
        backgroundColor: '#BB4A00'
    }

    return (
        <header style={headerStyles}>
            <div className='container'>
                <h2>{props.text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'Feedback UI',
}

Header.propTypes = {
    text: PropTypes.string
}

export default Header