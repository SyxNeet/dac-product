const GET_DATA_DESIGN = `query getDataDesign($language:LanguageCodeEnum!){
    page(id:"cG9zdDozNzI=" idType:ID){
      translation(language:$language){
        design{
          banner{
            background{
              sourceUrl
              altText
            }
            title
            subtitle
          }
          content{
            enhanceBrand{
              title
              description
            }
            packagingDesign{
              title
              description
              image{
                sourceUrl
                altText
              }
            }
            brandIdentity{
              title
              description
              image{
                sourceUrl
                altText
              }
            }
            consultingServices{
              title
              listServices{
                icon{
                  sourceUrl
                  altText
                }
                name
                text
              }
            }
          }
        }
      }
    }
  }`

const GET_META_DESIGN = `
query($language: LanguageCodeEnum!){
  page(id: "cG9zdDozNzA=") {
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
export {
  GET_DATA_DESIGN,
  GET_META_DESIGN
}