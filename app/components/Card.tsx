const Card = ({ children, title = '', className = '' }) => {
  return (
    <div
      className={`bg-white shadow-xl rounded-xl p-5 w-full h-full ${className}`}
    >
      {title && <div className="text-2xl font-bold mb-3">{title}</div>}
      {children}
    </div>
  )
}

export default Card
