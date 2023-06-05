// Write your code here.
import './index.css'

const ResusableBanner = props => {
  const {BannerDetails} = props
  const {headerText, description, className} = BannerDetails
  return (
    <li className={className}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <div>
        <button className="button">Show more</button>
      </div>
    </li>
  )
}

export default ResusableBanner
