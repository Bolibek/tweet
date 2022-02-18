export default function AppHeader({likedPosts, allPosts}) {
  const profileOwner = "Fayzullaev Bolibek";
	return (
		<div>
			<h2><b>{profileOwner}</b></h2>
			<h3>owns <b>{allPosts}</b> posts &amp; has <b>{likedPosts}</b> likes</h3>
		</div>
	);
}
