const Card = ({ children, title = '', className = '' }) => {
  // console.log('Card rendering')
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
