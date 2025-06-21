import "../styles/SocialItems.css"

function SocialItems({href, src, alt}) {
  return (
    <div className="container-items">
        <li>
            <a href={href}>
                <img src={src} alt={alt} />
            </a>
        </li>
    </div>
  )
}

export default SocialItems