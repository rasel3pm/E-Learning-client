import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET_ALL_BLOGS_API_REQUEST } from "../../apiRequest/API";
import CourseSkeleton from "../common/CourseSkeleton";
import SectionTitle from "../common/SectionTitle";

const LatestBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await GET_ALL_BLOGS_API_REQUEST();
      setBlogs(result);
    })();
  }, []);
  return (
    <>
      {blogs.length === 0 ? (
        <CourseSkeleton />
      ) : (
        <div className="pt-10 pb-32 md:pt-20 mt-6 blog-section">
          <div className="md:px-20 pt-20">
            <SectionTitle
              title="Our latest blogs"
              des="If you want to go briliant so read more"
            />
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 md:gap-10 gap-5 px-16 md:px-20 md:py-7">
            {blogs.map((blog) => (
              <div
                key={blog["_id"]}
                className="card w-96 bg-base-50 shadow-xl image-full"
              >
                <figure>
                  <img src={blog.thumbnail} alt={blog.title} width={400} />
                </figure>
                <div className="card-body">
                  <Link to={`/blogs/${blog._id}`}>
                    {" "}
                    <h2 className="card-title text-white hover:underline">
                      {blog.title}
                    </h2>
                  </Link>
                  <p>{blog.description.substring(0, 70)}</p>
                  <div className="card-actions justify-end">
                    <Link to={`/blogs/${blog._id}`}>
                      <button class="transition hover:duration-400 hover:bg-blue-500 text-white p-1 hover:text-white border border-blue-500 hover:border-transparent rounded">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default LatestBlog;
