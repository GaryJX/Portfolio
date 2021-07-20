const Page404: React.FC = () => {
  return null
}

export const getStaticProps = () => {
  return {
    redirect: {
      destination: '/',
    },
  }
}

export default Page404
