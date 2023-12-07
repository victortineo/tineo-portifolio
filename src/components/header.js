import * as React from "react"
import PropTypes from "prop-types"
import './header.css'

const Header = ({ siteTitle, onClick, isOpen }) => (
  <header
    style={{
      margin: `10px auto 0`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <button onClick={onClick}>
      <div className={`burguer-menu ${isOpen ? 'active' : ''}`} title="open sidebar">
        <div className="bg-mainPurple" />
      </div>
    </button>
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
