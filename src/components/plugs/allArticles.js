import React from "react"
import "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import Card from "./card"

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      allKushTeam {
        GetAllArticles {
          dataList {
            id
            title
            brief
            author {
              username
            }
            createdAt
          }
        }
      }
    }
  `)
  return (
    <div className="grid w-full max-w-2xl grid-cols-1 gap-6 px-2">
      {data.allKushTeam.GetAllArticles.dataList.map((article, i) => (
        <Card card={article} key={i} />
      ))}
    </div>
  )
}
