const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-xl rounded-xl ${className}`}>
      {children}
    </div>
  )
}

export default Card
