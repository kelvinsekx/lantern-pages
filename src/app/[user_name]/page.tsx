export default async function UserPage({
  params,
}: {
  params: Promise<{ user_name: string }>;
}) {
  const { user_name } = await params;
  return (
    <div>
      <nav>
        <div>{user_name}</div>
      </nav>
      <div>
        <div id="side-bar">
          <div id="most-read"></div>
          <div id="latest-read"></div>
          <div id="latest"></div>
        </div>
        <div>
          <div id="course-list"></div>
          <div id="heat-map"></div>
        </div>
      </div>
    </div>
  );
}
