import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={230}
    height={542}
    viewBox="0 0 230 542"
    backgroundColor="#212123"
    foregroundColor="#d3d3d3"
  >
    <rect x="0" y="0" rx="10" ry="10" width="230" height="400" />
    <rect x="14" y="410" rx="0" ry="0" width="202" height="31" />
    <rect x="14" y="456" rx="0" ry="0" width="202" height="17" />
    <rect x="14" y="484" rx="0" ry="0" width="30" height="20" />
    <rect x="173" y="484" rx="0" ry="0" width="42" height="18" />
    <rect x="57" y="484" rx="0" ry="0" width="30" height="20" />
  </ContentLoader>
);

export default MyLoader;
