import { gql } from '@apollo/client'

const GET_DATA_NEWS_DETAIL = `query ($language: LanguageCodeEnum!, $slug: ID!) {
  post(id: $slug, idType: SLUG) {
    translation(language: $language) {
      slug
      news {
        banner {
          title
          subtitle
          background {
            altText
            sourceUrl
          }
        }
        content {
          heading
          listcontent {
            titleContent
            text
            gallery {
              altText
              sourceUrl
            }
          }
        }
        subtitleMobile
        othernews {
          ... on Post {
            slug
            news{
              name
            }
            featuredImage{
              node{
                sourceUrl
                altText
              }
            }
          }
        }
      }
    }
  }
}`


const GET_ALL_NEWS = gql` 
query getAllNews($language: LanguageCodeEnum!, $offset: Int!, $size: Int!) {
    posts(where: {
      offsetPagination: {offset: $offset,size:$size}
        orderby:{field:DATE, order:ASC}		
        }
    ){
      nodes{
        translation(language:$language){
          id
          slug
          featuredImage{
            node{
              altText
              sourceUrl
            }
          }
          news{
            time
            name
          }
        }
      }
      pageInfo{
        offsetPagination{
          total
        }
      }
    }
}`

const DATA_BY_SEARCH_TEXT = gql`query ($text: String!, $language: LanguageCodeEnum!,$offset: Int!, $size: Int!) {
  posts(where: {search:$text,offsetPagination:{offset:$offset,size:$size} orderby:{field:DATE,order:DESC}}){
    nodes{
      translation(language:$language){
        slug
        featuredImage{
          node{
            altText
            sourceUrl
          }
        }
        news{
          name
          time
        }
      }
    }
    pageInfo{
      offsetPagination{
        total
      }
    }
  }
}`
const GET_DATA_ALL_WITH_SEARCH = gql`query getData($text: String!, $language: LanguageCodeFilterEnum!, $offset: Int!, $size: Int!) {
  posts(
    where: {language: $language, search: $text, offsetPagination: {offset: $offset, size: $size}, orderby: {field: DATE, order: DESC}}
  ) {
    nodes {
      id
      slug
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
      news {
        time
        name
      }
    }
    pageInfo {
      offsetPagination {
        total
      }
    }
  }
}`

const DATA_NEWS_WITH_SEARCH_AND_CATEGORY = gql `
query getData($text: String!, $language: LanguageCodeFilterEnum!, $offset: Int!, $size: Int!,$term:[String!]) {
  posts(
    where: {language: $language, search: $text, offsetPagination: {offset: $offset, size: $size}, orderby: {field: DATE, order: DESC}, taxQuery: {taxArray: {field: SLUG, taxonomy: CATEGORY, operator: IN, terms: $term}}}
  ) {
    nodes {
      id
      slug
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
      news {
        time
        name
      }
    }
    pageInfo {
      offsetPagination {
        total
      }
    }
  }
}
`
const GET_META_NEWS = `
query($language: LanguageCodeEnum!){
  page(id: "cG9zdDozNDI=") {
    translation(language:$language){
      seo{
      title
      fullHead
      metaDesc
      }
       featuredImage{
      node{
        altText
        sourceUrl
      }
    }
    }
  }
}`
const META_NEWS_DETAIL_QUERY = `query($slug:ID!, $language:LanguageCodeEnum!){
  post(id:$slug,idType:SLUG){
    translation(language:$language){
      seo{
        title
        fullHead
        metaDesc
      }
      featuredImage{
        node{
          sourceUrl
          altText
        }
      }
    }
  }
}`

const NEWS_QUERY = `query($language:LanguageCodeEnum!){
  page(id:"cG9zdDozNDI="){
    translation(language:$language){
      news_page{
        banner{
          background{
            sourceUrl
            altText
          }
          title
          description
        }
      }
    }
  }
}`
export {
  NEWS_QUERY,
  GET_DATA_NEWS_DETAIL,
  GET_ALL_NEWS,
  DATA_BY_SEARCH_TEXT,
  GET_DATA_ALL_WITH_SEARCH,
  GET_META_NEWS,
  META_NEWS_DETAIL_QUERY,
  DATA_NEWS_WITH_SEARCH_AND_CATEGORY
}