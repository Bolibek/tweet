const AppHeader = ({liked, allPosts}) => {
  return(
    <div>
      <h1>Bolibek Fayzullayev</h1>
      <h2>{allPosts} posts, like {liked}</h2>
    </div>
  )
}

export default AppHeader;