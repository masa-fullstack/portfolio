const ProgressBar = ({ bgcolor, completed, label }) => {
  const fillerStyles = {
    width: `${completed}%`,
  }

  return (
    <div className="h-4 bg-gray-300 rounded-lg m-2">
      <div className={`h-full rounded-lg ${bgcolor}`} style={fillerStyles}>
        <span className="text-white text-xs align-top pl-3">{label}</span>
      </div>
    </div>
  )
}

export default ProgressBar
