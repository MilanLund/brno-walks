import React from "react"
import { graphql } from "gatsby"
import PropTypes from 'prop-types'
//import { RichTextElement } from "@kentico/gatsby-kontent-components"
import Layout from "../components/layout"
import ListItem from "../components/listItem"

const IndexPage = ({ data }) => {
  const walks = data.allKontentItemWalk.nodes;
  
  return (
    <Layout>
      <h1>Procházky v okolí Brna</h1>
      {walks.map((item) => <ListItem data={item.elements} />)}
    </Layout>
  );
}

export default IndexPage

export const query = graphql`
  {
    allKontentItemWalk {
      nodes {
        elements {
          title {
            value
          }
          url_slug {
            value
          }
          map_url {
            value
          }
          length {
            value
          }
          duration_from_brno {
            value
          }
          distance_from_brno {
            value
          }
          difficulty {
            value {
              codename
            }
          }
          description {
            value
            images {
              description
              url
            }
            links {
              link_id
              codename
              type
              url_slug
            }
          }
          attractivity {
            value {
              codename
            }
          }
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.object,
};
