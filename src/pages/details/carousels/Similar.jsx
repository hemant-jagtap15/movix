import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Similar = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);//iski vajah se jo movie open ki hai uske similar movies aa jayegi

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <Carousel
            title={title}
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Similar;