import PropTypes from "prop-types"
import { useState } from "react"

function Avatar({ firstName, lastName, image }) {
  const [donutsCount, setDonutsCount] = useState(0)

  const handleClick = () => setDonutsCount(donutsCount + 1)

  return (
    <figure>
      <img src={image} alt={firstName} />
      <figcaption>
        {firstName} {lastName} <button onClick={handleClick}>🍩</button>{" "}
        {donutsCount}
      </figcaption>
    </figure>
  )
}

export default Avatar

Avatar.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  image: PropTypes.string,
}
