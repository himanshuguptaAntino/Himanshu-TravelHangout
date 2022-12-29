import withAuth from "../components/withAuth";

const Dashboard = () => {
  return (
    <h1>Hello I am in Dashboard Page</h1>
  )
}

export default withAuth(Dashboard);