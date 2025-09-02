export default function CreditCard({ rotation, name, offset }) {
  return (
    <div className={`credit-card-container ${offset}`} style={{transform: `rotate(${rotation}deg)`}}>
      <span>Untitled.</span><br />
      <div className="lower-text">
        <span className="name">{name}<span className="expiration">06/24</span></span>
        <span>1234 1234 1234 1234</span>
      </div>
    </div>
  )
}