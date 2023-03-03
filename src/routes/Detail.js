import { useCallback, useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import {
    Loader,
    DetailBox,
    DetailContents,
    DetailImg, 
    DetailTitle, 
    DetailYear,
    DetailParagraph,
    DetailGenres,
} from "../Presenter/DetailPresenter"

function Detail() {
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);
    const {id} = useParams()
    const getMovie = useCallback(async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
        setDetail(json.data.movie);
        setLoading(false);
    }, [id])
    useEffect(() => {
        getMovie();
    }, [getMovie])
    return (
        <DetailBox>
            {loading ? <Loader>Loading...</Loader> :
            <DetailContents key={detail.id}>
                <DetailImg src={detail.large_cover_image} alt={detail.title} />
                <div>
                    <DetailTitle>Title: {detail.title}</DetailTitle>
                    <DetailYear>Year: {detail.year}</DetailYear>
                    <DetailParagraph><h3>Summary</h3>{detail.description_full}</DetailParagraph>
                    <DetailGenres> <h3>Genres</h3>
                        {detail.genres.map(g => (
                            <li key={g}>{g}</li>
                        ))}
                    </DetailGenres>
                </div>
            </DetailContents>
            }
        </DetailBox>
    )
}

export default Detail;