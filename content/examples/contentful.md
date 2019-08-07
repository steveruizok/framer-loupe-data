# Contentful

### Follow these steps to use Contentful with Framer X

1. Create a [Contentful account](https://www.contentful.com/), if you don't have one already
2. Select: "I develop content-rich products"
3. Follow the onboarding steps
..* Copy website repository
..* Explore website content structure
..* Deploy website with the host you prefer
4. Modify your site's content
5. When you're ready to view it in Framer, go to Settings --> API keys
..* Grab the Space ID
..* Greab the Content Delivery API - access token
6. In the Framer X Contentful prototype, go to ContentfulData.tsx then, place the API keys in the corresponding spaces
..* const SPACE_ID = ""
..* const ACCESS_TOKEN = ""
7. Preview the prototype! 