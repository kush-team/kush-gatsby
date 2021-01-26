import { Link } from "gatsby-plugin-intl"
import React from "react"
import "./card.css"
import "twin.macro"
import moment from "moment-timezone"


export default ({ card }) => (
  <div className="card">
    <h2>
      <Link to={`/article/${card.id}`} aria-label="KushTeamDev">
        {card.title}
      </Link>
    </h2>
    <p>{card.brief}</p>
    <div tw="flex items-center justify-between px-8 py-6 text-xs bg-gray-900">
      <div tw="flex items-center justify-center">
        <img
          tw="object-cover w-8 h-8 mr-3 rounded-full shadow"
          src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
          width="80"
          height="80"
          alt="avatar"
        />
        <div tw="font-mono text-sm font-bold tracking-tighter text-gray-100">
          <span>{card.author.username}</span>
          <span className="ml-3 text-gray-300">{moment(card.createdAt).format("MMM DD, YYYY, h:mm:ss a")}</span>

        </div>
      </div>
    </div>
  </div>
)
