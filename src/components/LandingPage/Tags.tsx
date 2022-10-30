import TagComponent from "src/components/ApperOnTheDetailPage/Tag";
import { allTags, Tag } from "src/lib/tags";

function Tags({ tags }: { tags: Tag[] }) {
  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold">Tags</h3>
      <div className="flex flex-wrap gap-4 text-lg">
        {tags.map((tag) => (
          <TagComponent key={tag.name} text={tag.name} count={tag.count} />
        ))}
      </div>
    </div>
  );
}

export default Tags;
