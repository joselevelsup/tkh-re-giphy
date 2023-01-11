import { useLoaderData } from "react-router-dom";

export default function GifDetail() {
  const gifDetailData = useLoaderData();

  console.log(gifDetailData);

  return (
    <div>
      {gifDetailData ? (
       <div>
          <img
            src={gifDetailData.data.images.original.url}
            height={gifDetailData.data.images.original.height}
            width={gifDetailData.data.images.original.width}
          />
         
            <p>{gifDetailData.data.title}</p>
          </div>
        
      ) : (
        <div>Still loading Giphy Detail</div>
      )}
    </div>
  );
}
