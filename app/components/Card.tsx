const Card = ({ children, title = '', className = '' }) => {
  return (
    <div className={`bg-white shadow-xl rounded-xl ${className}`}>
      <div className="p-5">
        {title && <div className="text-2xl font-bold mb-3">{title}</div>}
        {children}
      </div>
    </div>
  )
}

export default Card
