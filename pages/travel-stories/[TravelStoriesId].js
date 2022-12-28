import { useRouter } from "next/router";

const TravelStoriesId = () => {
    const router=useRouter();
    const {TravelStoriesId}=router.query
  return (
    <h1>This page is a details of travelStory of Client whose id is {TravelStoriesId}</h1>
  )
}

export default TravelStoriesId