import CustomizedTabHeaders from "@/components/CustomizedTabHeaders";
import { Typography } from "@mui/material";

const Doc = ({ params }) => {
  if (params.slug?.length === 2) {
    return (
      <div>
        <CustomizedTabHeaders activeIndex={"Home"} />
        <Typography variant="h1" gutterBottom>
          Docs
        </Typography>
        <Typography variant="h3" gutterBottom>
          Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
        </Typography>
      </div>
    );
  } else if (params.slug?.length === 1) {
    return (
      <div>
        <CustomizedTabHeaders activeIndex={"Home"} />
        <Typography variant="h1" gutterBottom>
          Docs
        </Typography>
        <Typography variant="h3" gutterBottom>
          Viewing docs for feature {params.slug[0]}
        </Typography>
      </div>
    );
  }
  return (
    <div>
      <CustomizedTabHeaders activeIndex={"Docs"} />
      <Typography variant="h1" gutterBottom>
        Docs
      </Typography>
      <Typography variant="h3" gutterBottom>
        Docs home page {JSON.stringify(params)}
      </Typography>
    </div>
  );
};
export default Doc;
