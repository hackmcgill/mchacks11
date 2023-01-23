import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Content from "./Content"
import Carousel from "./Carousel"

const CarouselSpeaker = ({ scrollRef }) => {
    const data = useStaticQuery(graphql`
        query {
            allGoogleSpreadsheetSpeakers {
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
            {data.allGoogleSpreadsheetSpeakers.edges.length > 1 &&
                <>
                    <Content> Speakers </Content>
                    <Carousel data={data.allGoogleSpreadsheetSpeakers.edges}/>
                </>
            }
        </div>
    )
}

export default CarouselSpeaker;