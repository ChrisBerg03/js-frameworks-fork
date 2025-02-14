import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../layout/layout";

export function Product() {
    const [data, setData] = useState({});
    const params = useParams();
    console.log(params);

    useEffect(() => {
        async function getData() {
            const res = await fetch(
                "https://v2.api.noroff.dev/auction/listings/" + params.id
            );
            const data = await res.json();
            console.log(data);
            setData(data.data);
        }
        getData();
    }, []);

    return (
        <Layout>
            <div id="card" className="m-auto max-w-2xl">
                {data.id ? (
                    <div className="max-w-lg h-auto">
                        <h2>{data.title}</h2>
                        {data.media.length && (
                            <img
                                src={data.media[0].url}
                                alt="alt text"
                                onError={(e) => {
                                    e.target.src =
                                        "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
                                }}
                            />
                        )}
                        <p>{data.description}</p>
                        <p>created: {data.created}</p>
                        <p>updated: {data.updated}</p>
                        <p>ENDS_AT: {data.endsAt}</p>
                    </div>
                ) : (
                    <h2>loading</h2>
                )}
            </div>
        </Layout>
    );
}
