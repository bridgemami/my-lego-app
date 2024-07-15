export default function Form() {
  return (
    <form className="form">
      <input 
      type="text"
      placeholder="Add lego set"
      />
      <div className="btn-container">
      <button className="btn">Add to wishlist</button>
      <button className="btn">Add to purchased</button>
        </div>
    </form>
  )
}
