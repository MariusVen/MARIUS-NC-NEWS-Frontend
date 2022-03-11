export default function Sorting({
  sortType,
  sortAscDesc,
  setSortAscDesc,
  setSortType,
}) {
  return (
    <div>
      <select
        value={sortType}
        onChange={(e) => {
          setSortType(e.target.value);
        }}
      >
        <option value="created_at">by date</option>
        <option value="comment_count">by comment count</option>
        <option value="votes">by votes</option>
        <option value="title">by title</option>
      </select>

      <select
        value={sortAscDesc}
        onChange={(e) => {
          setSortAscDesc(e.target.value);
        }}
      >
        <option value="asc">asc</option>
        <option value="desc">desc</option>
      </select>
    </div>
  );
}
