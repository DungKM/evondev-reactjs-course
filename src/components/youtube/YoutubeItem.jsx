const YoutubeItem = (props) => {
return (
    <div className={`youtube-item ${props.className}`}>
    <div
      className="youtube-image"
    >
      <img
        src={props.image}
        alt="random"
      />
    </div>
    <div className="youtube-footer">
      <img
        src={props.avatar}
        alt=""
        className="youtube-avatar"
      />
      <div className="youtube-infor">
        <h3 className="youtube-title">
          {props.title}
        </h3>
        <h4 className="youtube-channel">
          {props.channel}
        </h4>
      </div>
    </div>
  </div>
)
}
export default YoutubeItem;