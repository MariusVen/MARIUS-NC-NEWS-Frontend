export default function Sorting({
  sortType,
  sortAscDesc,
  setSortAscDesc,
  setSortType,
}) {
  return (
    <div>
      <select
        className="select"
        value={sortType}
        onChange={(e) => {
          setSortType(e.target.value);
        }}
      >
        <option value="created_at">date</option>
        <option value="comment_count">comment count</option>
        <option value="votes">votes</option>
        <option value="title">title</option>
      </select>
      <select
        className="select"
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
