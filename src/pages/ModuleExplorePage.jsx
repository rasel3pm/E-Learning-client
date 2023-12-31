import CourseTitle from "../components/studentDashboard/CourseTitle";
import Resource from "../components/studentDashboard/Resource";
import { useEffect, useState } from "react";
import { GET_ENROLLD_MODULE_API_REQUEST } from "../apiRequest/API";
import { useParams } from "react-router-dom";

const ModuleExplorePage = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      let result = await GET_ENROLLD_MODULE_API_REQUEST(id);
      setData(result);
    })();
  }, []);
  // console.log(data[0].course[0].title)
  return (
    <div className="bg-[#f5f1eb] md:p-10 p-5 h-screen">
      <CourseTitle
        // title={data[0].course[0].title}
        // image={data[0].course[0]?.thumbnail.map((url)=>url.url)}
      />
      <Resource />
    </div>
  );
};

export default ModuleExplorePage;
