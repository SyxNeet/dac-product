const GET_DATA_CONTACT_PAGE = `query($language:LanguageCodeEnum!){
  page(id:"cG9zdDo2OTU="){
   translation(language:$language){
      id
     contact{
      banner{
        background{
          sourceUrl
          altText
        }
        title
        subTitle
      }
      contentAddress{
        heading
        listContentAddress{
          title
          subTitle
          icon{
            altText
            sourceUrl
          }
          infomation
        }
        image{
          sourceUrl
          altText
        }
      }
      contentContact{
        heading
        address{
          text
        }
        formData{
          title
          name
          email
          telephone
          content
          button
        }
      }
    }
  }
  }
}`
const META_CONTACT_QUERY = `
query($language: LanguageCodeEnum!){
  page(id: "cG9zdDo2OTU=") {
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

const SLUG_CONTACT_QUERY =(id)=> `{
  page(id:"${id}"){
    language{
      code
    }
    slug
    translations{
      language{
        code
      }
      slug
    }
  }
}`
export {
  GET_DATA_CONTACT_PAGE,
  META_CONTACT_QUERY,
  SLUG_CONTACT_QUERY
}