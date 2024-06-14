import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const changeTabId = () => {
    updateActiveTabId(tabId)
  }

  const activeButtonClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeButtonClassName}`}
        onClick={changeTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
