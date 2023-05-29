import { useContext } from "react";
import { ColorModeContext } from "../src/components/Menu/components/ColorMode";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledVideo = styled.section`
    margin: 48px;
    align: center;

    div>iframe{
        border: none;
        border-radius: 1.25%;
    }

    div span{
        padding-top: 8px;
        display: block;
        padding-right: 24px;
        color: ${({ theme }) => theme.textColorBase || "#222222"};
        font-size: 20px;
        margin-top: 8px;
    }

`;


export default function () {

    const router = useRouter()
    const video = router.query;
    console.log(video)

    video.url = video.url.replace('watch?v=', 'embed/')

    return (
        <StyledVideo>
            <div>
                <iframe
                    width="800"
                    height="400"
                    src={video.url}
                    title={video.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                >
                </iframe>

                <span>{video.titulo}</span>
            </div>

        </StyledVideo>
    )
}
