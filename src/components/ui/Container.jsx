export default function Container({ children, className = '' }) {
  return (
    <div className={`w-full max-w-container mx-auto px-6 md:px-10 ${className}`}>
      {children}
    </div>
  )
}