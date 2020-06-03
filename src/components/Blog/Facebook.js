import React from "react"

const Facebook = () => {
  return (
    <>
      <h3 className="sidebar-title">Facebook</h3>

      <div className="card-content">
        <iframe
          title="facebook feed"
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FChedraTaxITP%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          height="350"
          width="100%"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allowTransparency="true"
          allow="encrypted-media"
        />
      </div>
    </>
  )
}

export default Facebook
