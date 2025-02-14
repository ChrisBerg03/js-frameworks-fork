import { useEffect, useState } from "react";
import { Layout } from "../layout/layout";
import { Link } from "react-router-dom";
const baseUrl = "https://v2.api.noroff.dev/auction/";

export function Home() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [sortOrder, setSortOrder] = useState("asc");
    useEffect(() => {
        async function getData() {
            const res = await fetch(
                baseUrl +
                    `listings?page=${page}&limit=20&_active=true&sortOrder=${sortOrder}&sort=created`
            );
            const data = await res.json();
            console.log(data);
            setData(data.data);
        }
        getData();
    }, [page, sortOrder]);

    return (
        <>
            <Layout>
                <h1 className="text-3xl font-bold">ALL LISTINGS</h1>
                <div>
                    <label>
                        Filter
                        <select
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                        >
                            <option value="desc">desc</option>
                            <option value="asc">asc</option>
                        </select>
                    </label>
                </div>
                <div className="max-w-7xl flex gap-4 flex-wrap m-auto">
                    {data.map((listing) => {
                        return (
                            <Link to={"/" + listing.id} key={listing.id}>
                                <div className="w-sm h-80 flex flex-col p-4 shadow-2xl">
                                    {listing.media.length ? (
                                        <img
                                            src={listing.media[0].url}
                                            className="max-h-60 max-w-full object-cover"
                                        />
                                    ) : (
                                        <img
                                            className="max-h-60 object-cover"
                                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAwwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAwYCB//EADEQAQACAQIDBwIDCQAAAAAAAAABAgMEESExUQUSIjJBYXEjUhMUwRUzYoGRoaKx0f/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/APoIDo5gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9232z/QGAAAAAAAAAAAAAAAAAAAAASdHpLam2/lxxzt/wABqw4cme/dx13n/SywdmY67Tmnvz0jhCZixUw0imOu1Ye2dakeaY6Y42x0rX4jZ73YEV4yYseSPqUrb5hEzdmYr7zimaT05wnAKDUaXNp/PXw/dHGGl0s8Y2nkr9X2bW299P4bfZ6T8NSs2KoZtE0tNbRMTHOJFRgAAABmtbXtFaxMzPpEMLzQaeuHBWdvHaN7T+iWrIq/yOp23/Bnb5homJrMxaJiY5xLpEPtPT1yYZyxHjpG+/WDVxTAKyAAA94cVs2WuOnOf7A26PTW1OTblSPNK8pSuOkUpG1Y5Q84MVcGKMdOUevV7ZtakAEUAAAAAA2iecQwyA5oBtgAAdDp7xkwUvXlNXPJGk1l9NO0R3qTzrKWLKvWjXXimkyzPrXux/NG/auPb91ffpwQdVqsmptE34VjlWPRJFtaAGmQABd9n6b8vi3tH1Lc/b2Q+y9N37/jXjw1nw+8rZm1qQARQAAAAAAAAAFVbsrJHky1n5jZFzaXPh43xzt1jjC/F1Mc0LvUaDDm3msdy/WsfoqtRpsunttkrw9LRyldTGkBUAAAAG3TYbZ80Y6+vOekNS80Gm/L4vFH1Lcbe3slqyJFKVx0ilI2rEbQyDLQAAAAAAAAAAAAAAxatb1mt4iazziWQFRrOz7Yt74d7U9Y9YQXSq/XaCL75MEbW9a9fhZUsVQTG07TwkaZAS9Bo51Fu/eNsUf5ewN3Zel70xnyRwjyR191oREREREbRHKBhuAAAAAAAAAAAAAAAAAAAAIur0VNR4qz3MnXr8oE9m6iJ2iKz7xZci6mK7T9mRExbPaLfw15LGIiIiIiIiOUQCKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z"
                                        />
                                    )}
                                    <div>
                                        <h2 className="text-xl font-bold">
                                            {listing.title}
                                        </h2>

                                        <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                                            {listing.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
                <div className="w-dvw flex justify-evenly">
                    <button
                        className="cursor-pointer"
                        id="prev"
                        onClick={() => {
                            if (page > 1) {
                                setPage(page - 1);
                            }
                        }}
                    >
                        prev
                    </button>
                    <button
                        className="cursor-pointer"
                        id="next"
                        onClick={() => {
                            setPage(page + 1);
                        }}
                    >
                        next
                    </button>
                </div>
            </Layout>
        </>
    );
}
