import {useRouter} from "next/router"
const PackageList = () => {
    const router=useRouter();
    const {packageDetailsId}=router.query
  return (
    <>
    <h1>Hello This is Package details of id= {packageDetailsId} page</h1>
    </>
  )
}
export default PackageList;