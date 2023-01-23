import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Content from "./Content"
import Carousel from "./Carousel"

const CarouselMentorAndJudges = ({ scrollRef }) => {
    const data = useStaticQuery(graphql`
        query {
            allGoogleSpreadsheetJudges {
                edges {
                    node {
                        id
                        name
                        company
                        position
                        imageLink
                    }
                }
            }
        }
    `)

    return (
        <div ref={scrollRef}>
        {data.allGoogleSpreadsheetJudges.edges.length > 1 &&
            <>
                <Content> Mentors And Judges </Content>
                <Carousel data={data.allGoogleSpreadsheetJudges.edges}/>
            </>
        }
        </div>
    )
}

export default CarouselMentorAndJudges;